import { createStore } from "redux";
import { reducer } from "./reducer.js";

export const defaultValue = [
  {
    type: "panel",
    props: {
      width: 500,
      height: 200,
      visible: true,
    },
  },
  {
    type: "label",
    props: {
      caption: "test",
      visible: true,
    },
  },
  {
    type: "button",
    props: {
      width: 100,
      height: 50,
      visible: true,
    },
  },
];

export const UPDATE_CONTENT = "UPDATE_CONTENT";

const store = createStore(reducer, defaultValue);

export default store;
