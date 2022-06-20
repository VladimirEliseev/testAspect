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
    return state;
  } else {
    const prop = stateInputPath.slice(stateInputPath.lastIndexOf(".") + 1);
    let results = [],
      re = /\[([^\]]+)\]/g,
      text;
    while ((text = re.exec(stateInputPath))) {
      results.push(+text[1]);
    }
    let index = 0;
    const newState = recurcion(state, index, results, stateInputValue, prop);
    return [...state];
  }
}

function recurcion(array, index, results, stateInputValue, prop) {
  const content = array.content ? array.content : array;
  return content.map((value, i) => {
    if (index === results.length - 1 && i === results[index]) {
      if (stateInputValue[0] === "{") {
        const object = new Function("return (" + stateInputValue + ")")();
        if (!Array.isArray(value.content)) value.content = [];
        value.content.push(object);
      } else if (!isNaN(Number(stateInputValue))) {
        value.props[prop] = Number(stateInputValue);
      } else if (stateInputValue === "false" || stateInputValue === "true") {
        value.props[prop] = JSON.parse(stateInputValue);
      } else {
        value.props[prop] = stateInputValue;
      }
      return { ...value };
    } else if (index === results.length - 1 && i !== results[index]) {
      return { ...value };
    } else if (index < results.length - 1 && value.type === "panel") {
      index++;
      const val = recurcion(value, index, results, stateInputValue, prop);
      return { ...val[0] };
    }
  });
}
