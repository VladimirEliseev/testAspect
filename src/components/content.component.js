import React from "react";
import { useSelector } from "react-redux";

export const Content = () => {
  const content = useSelector((state) => state);
  console.log(content);
  return (
    <div className="wrapperContent">
      <div id="content">
        {content?.map((item) => {
          if (item.type === "panel") {
            return (
              <div
                key="panel1"
                style={{
                  width: item.props.width,
                  height: item.props.height,
                  visibility:
                    item.props.visible == false ? "hidden" : "visible",
                  border: "3px solid red",
                }}
              >
                {content[0].content &&
                  content[0].content.map((item) => {
                    return (
                      <span
                        key="span2"
                        style={{
                          visibility:
                            item.props.visible === false ? "hidden" : "visible",
                        }}
                      >
                        {item.props.caption}
                      </span>
                    );
                  })}
              </div>
            );
          } else if (item.type === "label") {
            return (
              <span
                key="span1"
                style={{
                  visibility:
                    item.props.visible === false ? "hidden" : "visible",
                }}
              >
                {item.props.caption}
              </span>
            );
          } else if (item.type === "button") {
            return (
              <button
                key="button1"
                style={{
                  width: item.props.width,
                  height: item.props.height,
                  visibility:
                    item.props.visible == false ? "hidden" : "visible",
                }}
              >
                ок
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};
