import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const UpdateContent = () => {
  const dispatch = useDispatch();
  const [stateInputPath, setStateInputPath] = useState("");
  const [stateInputValue, setStateInputValue] = useState("");

  const setChange = () => {
    dispatch({
      type: "UPDATE_CONTENT",
      content: { stateInputPath, stateInputValue },
    });
  };

  return (
    <div className="wrapperMenu">
      <div className="wrapperInputPath">
        <label htmlFor="inputPath">Путь</label>
        <input
          type="text"
          id="inputPath"
          onChange={(e) => {
            setStateInputPath(e.target.value);
          }}
        />
      </div>
      <div className="wrapperInputNewValue">
        <label htmlFor="inputNewValue">Новое значение</label>
        <input
          type="text"
          id="inputNewValue"
          onChange={(e) => {
            setStateInputValue(e.target.value);
          }}
        />
      </div>
      <button id="btnApply" onClick={setChange}>
        Применить
      </button>
    </div>
  );
};
