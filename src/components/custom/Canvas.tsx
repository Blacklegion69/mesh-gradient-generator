import React, { useCallback, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import { DownloadCloud, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

type propsType = {
  children: React.ReactNode;
  className?: string;
  filename?: string;
};

const Canvas = ({ children, className, filename }: propsType) => {
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const onButtonClick = useCallback(() => {
    const d = new Date().toLocaleString();
    if (ref.current === null) {
      return;
    }
    setIsLoading(true);
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = filename
          ? filename + JSON.stringify(d)
          : `${crypto.randomUUID()}`;
        link.href = dataUrl;
        link.click();
        setIsLoading(false);
        toast({
          title: "Downloaded",
          description: "Downloaded at " + new Date().toLocaleString(),
          action: (
            <ToastAction altText="cancel">
              <X />
            </ToastAction>
          ),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref, toast, filename]);
  const Downloadbutton = () => {
    return (
      <Button
        className="flex justify-center items-center rounded text-center"
        onClick={onButtonClick}
      >
        {isLoading ? (
          <div className="p-2 rounded-full border-2 animate-spin border-t-slate-900 border-slate-100"></div>
        ) : (
          <div className="flex justify-center items-center">
            <DownloadCloud />
            <span className="mx-2 font-bold">Download</span>
          </div>
        )}
      </Button>
    );
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div ref={ref} className={cn("w-full", className)}>
        {children}
      </div>
      <div className="w-full mt-2">
        <Downloadbutton />
      </div>
    </div>
  );
};

export default Canvas;
