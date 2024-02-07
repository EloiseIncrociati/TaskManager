import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

//configure our redux store, here we can add Middleware provider parameter with redux-persist to keep data
export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});