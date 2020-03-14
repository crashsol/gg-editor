import React from "react";
import { RegisterEdge } from "gg-editor";

class CustomEdge extends React.Component {
  render() {
    const config = {
      getStyle(item: any) {
        const model = item.getModel();
        const { color, size } = model;

        console.log(model)
        return {
          stroke: color || "#A3B1BF",
          lineWidth: size || 5,
          startArrow: false,
          endArrow: false,
        };
      }
    };

    return (
      <RegisterEdge name="custom-edge" config={config} extend={"flow-smooth"} />
    );
  }
}

export default CustomEdge;
