import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy as Cp, X, Loader } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

type propsType = {
  text?: string;
  className?: string;
};
const Copy = ({ text, className }: propsType) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyClick = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
      setIsCopied(true);
      toast({
        title: "Copied",
        description: "Copied at " + new Date().toLocaleString(),
        action: (
          <ToastAction altText="cancel">
            <X />
          </ToastAction>
        ),
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  }, [isCopied]);

  return (
    <>
      <textarea
        ref={textAreaRef}
        value={text}
        readOnly
        style={{ position: "absolute", left: "-9999px" }}
      />
      <Button onClick={handleCopyClick} className={cn("font-bold", className)}>
        {isCopied ? (
          <Loader className="animate-spin" />
        ) : (
          <>
            <Cp className="my-2" />
            Copy
          </>
        )}
      </Button>
    </>
  );
};

export default Copy;
