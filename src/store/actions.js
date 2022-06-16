import UPDATE_CONTENT from "./store.js";

export const updateContent = (content) => ({
  type: UPDATE_CONTENT,
  payload: content,
});
