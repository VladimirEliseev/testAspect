import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Content } from "../src/components/content.component";
import { UpdateContent } from "../src/components/update-content.component";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <UpdateContent />
        <Content />
      </Provider>
    </div>
  );
};

export default App;
