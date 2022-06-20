import React from "react";
import shortid from "shortid";

export const Content = ({ content }) => {
  return (
    <div>
      {content?.map((item) => {
        switch (item.type) {
          case "panel":
            return (
              <div
                key={"panel" + shortid.generate()}
                style={{
                  width: item.props.width,
                  height: item.props.height,
                  visibility:
                    item.props.visible == false ? "hidden" : "visible",
                  border: "3px solid red",
                }}
              >
                {item.content && <Content content={item.content} />}
              </div>
            );
          case "label":
            return (
              <span
                key={"label" + shortid.generate()}
                style={{
                  visibility:
                    item.props.visible === false ? "hidden" : "visible",
                }}
              >
                {item.props.caption}
              </span>
            );
          case "button":
            return (
              <button
                key={"button" + shortid.generate()}
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
  );
};
