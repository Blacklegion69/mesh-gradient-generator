import { configureStore } from "@reduxjs/toolkit";
import meshReducer from "@/features/mesh/meshSlice";

const store = configureStore({
  reducer: {
    meshReducer,
  },
});

export default store;
