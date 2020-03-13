
import React from "react";
import { withPropsAPI } from "gg-editor";
import { Button } from "antd";

class Save extends React.Component {
  constructor(props: any) {
    super(props)
  }
  handleClick = () => {
    const { propsAPI } = this.props as any;
    console.log(propsAPI.save());
  };
  render() {
    return (
      <div style={{ marginLeft: 8 }}>
        <Button type='primary' onClick={this.handleClick}>保存</Button>
      </div>
    );
  }
}

export default withPropsAPI(Save);
