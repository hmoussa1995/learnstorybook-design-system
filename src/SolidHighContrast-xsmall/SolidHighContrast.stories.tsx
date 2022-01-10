import React from "react";
import SolidHighContrastButton from './SolidHighContrast';
import '../SolidHighContrastButton/SolidHighContrast.scss';

export default {
  title: "Button/SolidHighContrast-Sizes",
};

export const SolidHighContrastXsmall = () => (
  <div>
    <div className="light sub-container">
      {/* light theme with label with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="light" size="xsmall" label="High Contrast B" className="margin-around" />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme="light"
          hasIcon="false"
          size="xsmall"
          label="High Contrast B"
          className="margin-around"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="light" size="xsmall" className="margin-around" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      {/* dark theme button with label and with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="dark" size="xsmall" label="High Contrast B" className="margin-around" />
      </div>
      {/* dark theme button with label without icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme="dark"
          hasIcon={false}
          size="xsmall"
          label="High Contrast B"
          className="margin-around"
        />
      </div>
      {/* dark theme button without label WITH icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="dark" size="xsmall" className="margin-around" />
      </div>
    </div>
  </div>
);