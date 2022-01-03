import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: "Button",
};

export const SolidHighContrast = () => (
  <div>
    <div className="light" style={{ display: 'flex' }}>
      <div>
        <TestComponent theme="light" size="large" label="High Contrast B" />
        <TestComponent theme="light" size="small" label="High Contrast B" />
        <TestComponent theme="light" size="xsmall" label="High Contrast B" />
      </div>
      <div>
        <TestComponent theme="light" size="large" />
        <TestComponent theme="light" size="small" />
        <TestComponent theme="light" size="xsmall" />
      </div>
    </div>
    <br />
    <div className="dark" style={{ display: 'flex' }}>
      <div>
        <TestComponent theme="dark" size="large" label="High Contrast B" />
        <TestComponent theme="dark" size="small" label="High Contrast B" />
        <TestComponent theme="dark" size="xsmall" label="High Contrast B" />
      </div>
      <div>
        <TestComponent theme="dark" size="large" />
        <TestComponent theme="dark" size="small" />
        <TestComponent theme="dark" size="xsmall" />
      </div>
    // </div>
  </div>
);