import React from "react";
import SolidLowContrastButton from './SolidLowContrastButton';
import './SolidLowContrastButton.scss';
export default {
  title: "Button/SolidLowContrast",
};

export const SolidLowContrast = () => (
  <div>
    <div className="light sub-container">
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="light"
          size="large"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="light"
          size="default"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="light"
          size="small"
          label="Low Contrast B"
        />
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
          size="large"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="default"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="small"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="xsmall"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="light" size="large" />
        <SolidLowContrastButton theme="light" size="default" />
        <SolidLowContrastButton theme="light" size="small" />
        <SolidLowContrastButton theme="light" size="xsmall" />
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
        <SolidLowContrastButton
          theme="dark"
          size="default"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          size="small"
          label="Low Contrast B"
        />
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
          size="large"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="default"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="small"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="xsmall"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="dark" size="large" />
        <SolidLowContrastButton theme="dark" size="default" />
        <SolidLowContrastButton theme="dark" size="small" />
        <SolidLowContrastButton theme="dark" size="xsmall" />
      </div>
    </div>
  </div>
);
