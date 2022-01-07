import React from "react";
import SolidLowContrastButton from '../SolidLowContrastButton/SolidLowContrastButton';
import '../SolidLowContrastButton/SolidLowContrastButton.scss';
export default {
  title: "Button/SolidLowContrast-Sizes",
};

export const SolidLowContrastSmall = () => (
  <div>
    <div className="light sub-container">
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="light"
          size="small"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="small"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="light" size="small" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="dark"
          size="small"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="small"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="dark" size="small" />
      </div>
    </div>
  </div>
);
