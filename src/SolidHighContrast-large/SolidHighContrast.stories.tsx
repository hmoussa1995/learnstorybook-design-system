import React from "react";
import SolidHighContrastButton from './SolidHighContrast';
import '../SolidHighContrastButton/SolidHighContrast.scss';

export default {
  title: "Button/SolidHighContrast-Sizes",
};

export const SolidHighContrastLarge = () => (
  <div>
    <div className="light sub-container">
      {/* light theme with label with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="light" size="large" label="High Contrast B" className="margin-around" />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme="light"
          hasIcon="false"
          size="large"
          label="High Contrast B"
          className="margin-around"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="light" size="large" className="margin-around" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      {/* dark theme button with label and with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="dark" size="large" label="High Contrast B" className="margin-around" />
      </div>
      {/* dark theme button with label without icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme="dark"
          hasIcon={false}
          size="large"
          label="High Contrast B"
          className="margin-around"
        />
      </div>
      {/* dark theme button without label WITH icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="dark" size="large" className="margin-around" />
      </div>
    </div>
  </div>
);