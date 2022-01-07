import React from "react";
import SolidLowContrastButton from '../SolidLowContrastButton/SolidLowContrastButton';
import '../SolidLowContrastButton/SolidLowContrastButton.scss';
export default {
  title: "Button/SolidLowContrast-Sizes",
};

export const SolidLowContrastXsmall = () => (
  <div>
    <div className="light sub-container">
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="light"
          size="xsmall"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="xsmall"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="light" size="xsmall" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="dark"
          size="xsmall"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="xsmall"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="dark" size="xsmall" />
      </div>
    </div>
  </div>
);
