import { createSlice } from "@reduxjs/toolkit";
import useHexadecimal from "@/hooks/useHexadecimal";
import generateGradient from "@/hooks/generateGradient";

// Declaring types
type gradientType = {
  id: string;
  shape: string;
  size: string;
  positionX: number;
  positionY: number;
  color: string;
  endingPoint: number;
};

type initialStateType = {
  selected: string;
  controller: boolean;
  randomGradient: string;
  bgColor: string;
  gradients: gradientType[];
};

type stateType = {
  meshReducer: initialStateType;
};

const g1 = generateGradient();
const g2 = generateGradient();
const g3 = generateGradient();
const g4 = generateGradient();

const initialState: initialStateType = {
  selected: g1.id,
  controller: false,
  randomGradient: JSON.stringify(generateGradient()),
  bgColor: useHexadecimal(),
  gradients: [g1, g2, g3, g4],
};

const meshSlice = createSlice({
  name: "mesh",
  initialState,
  reducers: {
    updateRandomGradient: (state) => {
      state.randomGradient = JSON.stringify(generateGradient());
    },
    addGradient: (state) => {
      const newGradient = JSON.parse(state.randomGradient);
      const updatedGradient = { ...newGradient, id: crypto.randomUUID() };
      state.gradients.push(updatedGradient);
    },
    reverseGradients: (state) => {
      state.gradients.reverse();
    },
    deleteGradient: (state, action) => {
      const filteredGradient = state.gradients.filter(
        (gradient) => gradient.id !== action.payload.deleteId,
      );
      state.gradients = filteredGradient;
    },
    updateBgColor: (state, action) => {
      state.bgColor = action.payload.bgValue;
    },
    updateController: (state, action) => {
      state.controller = action.payload.controllerValue;
    },
    updateSelected: (state, action) => {
      state.selected = action.payload.selectedId;
    },
    updateShape: (state, action) => {
      const { shapevalue } = action.payload;
      const updatedGradients = state.gradients.map((gradient) => {
        if (gradient.id === state.selected) {
          return { ...gradient, shape: shapevalue };
        } else {
          return gradient;
        }
      });
      state.gradients = updatedGradients;
    },
    updateSize: (state, action) => {
      const { sizevalue } = action.payload;
      const updatedGradients = state.gradients.map((gradient) => {
        if (gradient.id === state.selected) {
          return { ...gradient, size: sizevalue };
        } else {
          return gradient;
        }
      });
      state.gradients = updatedGradients;
    },
    updatePositionX: (state, action) => {
      const { xvalue } = action.payload;
      const updatedGradients = state.gradients.map((gradient) => {
        if (gradient.id === state.selected) {
          return { ...gradient, positionX: Number(xvalue) };
        } else {
          return gradient;
        }
      });
      state.gradients = updatedGradients;
    },
    updatePositionY: (state, action) => {
      const { yvalue } = action.payload;
      const updatedGradients = state.gradients.map((gradient) => {
        if (gradient.id === state.selected) {
          return { ...gradient, positionY: Number(yvalue) };
        } else {
          return gradient;
        }
      });
      state.gradients = updatedGradients;
    },
    updateEndingPoint: (state, action) => {
      const { endingpointvalue } = action.payload;
      const updatedGradients = state.gradients.map((gradient) => {
        if (gradient.id === state.selected) {
          return { ...gradient, endingPoint: Number(endingpointvalue) };
        } else {
          return gradient;
        }
      });
      state.gradients = updatedGradients;
    },
    updateColor: (state, action) => {
      const { colorvalue } = action.payload;
      const updatedGradients = state.gradients.map((gradient) => {
        if (gradient.id === state.selected) {
          return { ...gradient, color: colorvalue };
        } else {
          return gradient;
        }
      });
      state.gradients = updatedGradients;
    },
  },
});

const meshReducer = meshSlice.reducer;
export default meshReducer;
export const meshSelector = (state: stateType) => state.meshReducer;
export const {
  updateRandomGradient,
  addGradient,
  reverseGradients,
  deleteGradient,
  updateBgColor,
  updateController,
  updateSelected,
  updatePositionX,
  updatePositionY,
  updateShape,
  updateSize,
  updateEndingPoint,
  updateColor,
} = meshSlice.actions;
