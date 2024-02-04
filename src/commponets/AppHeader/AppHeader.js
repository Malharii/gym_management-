import { Space, Typography } from "antd";
import { SolutionOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";

function AppHeader() {
  return (
    <div className="AppHeader">
      <SolutionOutlined style={{ fontSize: 20 }} />
      <Typography.Title>gym manegment</Typography.Title>
      <Space>
        <PhoneOutlined style={{ fontSize: 20 }} />
      </Space>
    </div>
  );
}

export default AppHeader;
