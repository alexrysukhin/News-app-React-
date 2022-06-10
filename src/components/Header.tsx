import React from "react";
import { Col, Row } from "antd";

import "./Header.scss";

export const Header = () => {
  return (
    <header className="container" style={{ padding: "5px 0" }}>
      <div style={{ margin: "0 auto", width: "1200px" }}>
        <Row>
          <Col className="logo" span={8}>
            <h2>News App</h2>
          </Col>
          <Col style={{ border: "1px solid red" }} span={8}>
            <input />
          </Col>
          <Col style={{ border: "1px solid red" }} span={8}>
            Byrger
          </Col>
        </Row>
      </div>
    </header>
  );
};
