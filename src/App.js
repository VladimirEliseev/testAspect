import "./App.css";
import React from "react";
import { Content } from "../src/components/content.component";
import { useSelector } from "react-redux";
import { UpdateContent } from "../src/components/update-content.component";

const App = () => {
  const content = useSelector((state) => state);
  return (
    <div className="App">
      <UpdateContent />
      <div className="wrapperContent">
        <div className="content">
          <Content content={content} />
        </div>
      </div>
    </div>
  );
};

export default App;
