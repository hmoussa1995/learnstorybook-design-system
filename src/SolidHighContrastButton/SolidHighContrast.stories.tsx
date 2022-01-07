import React from "react";
import SolidHighContrastButton from './SolidHighContrast';
import './SolidHighContrast.scss';

export default {
  title: "Button/SolidHighContrast",
};

export const SolidHighContrast = () => (
  <div>
    <div className="light sub-container">
      {/* light theme with label with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="light" size="large" label="High Contrast B" />
        <SolidHighContrastButton theme="light" size="default" label="High Contrast B" />
        <SolidHighContrastButton theme="light" size="small" label="High Contrast B" />
        <SolidHighContrastButton theme="light" size="xsmall" label="High Contrast B" />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme="light"
          hasIcon="false"
          size="large"
          label="High Contrast B"
        />
        <SolidHighContrastButton
          theme="light"
          hasIcon="false"
          size="default"
          label="High Contrast B"
        />
        <SolidHighContrastButton
          theme="light"
          hasIcon="false"
          size="small"
          label="High Contrast B"
        />
        <SolidHighContrastButton
          theme="light"
          hasIcon="false"
          size="xsmall"
          label="High Contrast B"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="light" size="large" />
        <SolidHighContrastButton theme="light" size="default" />
        <SolidHighContrastButton theme="light" size="small" />
        <SolidHighContrastButton theme="light" size="xsmall" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      {/* dark theme button with label and with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="dark" size="large" label="High Contrast B" />
        <SolidHighContrastButton theme="dark" size="default" label="High Contrast B" />
        <SolidHighContrastButton theme="dark" size="small" label="High Contrast B" />
        <SolidHighContrastButton theme="dark" size="xsmall" label="High Contrast B" />
      </div>
      {/* dark theme button with label without icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme="dark"
          hasIcon={false}
          size="large"
          label="High Contrast B"
        />
        <SolidHighContrastButton
          theme="dark"
          hasIcon={false}
          size="default"
          label="High Contrast B"
        />
        <SolidHighContrastButton
          theme="dark"
          hasIcon={false}
          size="small"
          label="High Contrast B"
        />
        <SolidHighContrastButton
          theme="dark"
          hasIcon={false}
          size="xsmall"
          label="High Contrast B"
        />
      </div>
      {/* dark theme button without label WITH icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="dark" size="large" />
        <SolidHighContrastButton theme="dark" size="default" />
        <SolidHighContrastButton theme="dark" size="small" />
        <SolidHighContrastButton theme="dark" size="xsmall" />
      </div>
    </div>
  </div>
);