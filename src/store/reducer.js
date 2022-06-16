import { UPDATE_CONTENT } from "./store.js";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CONTENT:
      return updateContent(state, action);
    default:
      return state;
  }
};

function updateContent(state, action) {
  const { stateInputValue, stateInputPath } = action.content;
  if (stateInputValue === "" || stateInputPath === "") {
    alert("Введите значения в оба поля");
  } else {
    const prop = stateInputPath.slice(stateInputPath.lastIndexOf(".") + 1);
    const index = stateInputPath.slice(
      stateInputPath.indexOf("[") + 1,
      stateInputPath.indexOf("]")
    );
    console.log(index);
    const newState = [...state];
    if (stateInputValue[0] === "{") {
      let string = stateInputValue;
      const object = new Function("return (" + string + ")")();
      newState[index].content = [];
      newState[index].content.push(object);
    } else if (!isNaN(Number(stateInputValue))) {
      newState[index].props[prop] = Number(stateInputValue);
    } else if (stateInputValue === "false" || stateInputValue === "true") {
      newState[index].props[prop] = JSON.parse(stateInputValue);
    } else {
      newState[index].props[prop] = stateInputValue;
    }
    return newState;
  }
}
