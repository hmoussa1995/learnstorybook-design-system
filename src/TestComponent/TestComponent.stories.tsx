import React from "react";
import TestComponent from "./TestComponent";
import './TestComponent.scss';

export default {
  title: "Button",
};

export const SolidHighContrast = () => (
  <div>
    <div className="light sub-container">
      {/* light theme with label with icon */}
      <div className="button-variant-section">
        <TestComponent theme="light" size="large" label="High Contrast B" />
        <TestComponent theme="light" size="default" label="High Contrast B" />
        <TestComponent theme="light" size="small" label="High Contrast B" />
        <TestComponent theme="light" size="xsmall" label="High Contrast B" />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <TestComponent
          theme="light"
          hasIcon="false"
          size="large"
          label="High Contrast B"
        />
        <TestComponent
          theme="light"
          hasIcon="false"
          size="default"
          label="High Contrast B"
        />
        <TestComponent
          theme="light"
          hasIcon="false"
          size="small"
          label="High Contrast B"
        />
        <TestComponent
          theme="light"
          hasIcon="false"
          size="xsmall"
          label="High Contrast B"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <TestComponent theme="light" size="large" />
        <TestComponent theme="light" size="default" />
        <TestComponent theme="light" size="small" />
        <TestComponent theme="light" size="xsmall" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      {/* dark theme button with label and with icon */}
      <div className="button-variant-section">
        <TestComponent theme="dark" size="large" label="High Contrast B" />
        <TestComponent theme="dark" size="default" label="High Contrast B" />
        <TestComponent theme="dark" size="small" label="High Contrast B" />
        <TestComponent theme="dark" size="xsmall" label="High Contrast B" />
      </div>
      {/* dark theme button with label without icon */}
      <div className="button-variant-section">
        <TestComponent
          theme="dark"
          hasIcon={false}
          size="large"
          label="High Contrast B"
        />
        <TestComponent
          theme="dark"
          hasIcon={false}
          size="default"
          label="High Contrast B"
        />
        <TestComponent
          theme="dark"
          hasIcon={false}
          size="small"
          label="High Contrast B"
        />
        <TestComponent
          theme="dark"
          hasIcon={false}
          size="xsmall"
          label="High Contrast B"
        />
      </div>
      {/* dark theme button without label WITH icon */}
      <div className="button-variant-section">
        <TestComponent theme="dark" size="large" />
        <TestComponent theme="dark" size="default" />
        <TestComponent theme="dark" size="small" />
        <TestComponent theme="dark" size="xsmall" />
      </div>
    </div>
  </div>
);