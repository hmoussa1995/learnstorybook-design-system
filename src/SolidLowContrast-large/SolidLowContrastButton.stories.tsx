import React from "react";
import SolidLowContrastButton from '../SolidLowContrastButton/SolidLowContrastButton';
import '../SolidLowContrastButton/SolidLowContrastButton.scss';
export default {
  title: "Button/SolidLowContrast-Sizes",
};

export const SolidLowContrastLarge = () => (
  <div>
    <div className="light sub-container">
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="light"
          size="large"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="large"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="light" size="large" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="dark"
          size="large"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="large"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="dark" size="large" />
      </div>
    </div>
  </div>
);
