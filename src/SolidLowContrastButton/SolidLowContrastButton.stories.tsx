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
          className="margin-around"
        />
        <SolidLowContrastButton
          theme="light"
          size="default"
          label="Low Contrast B"
          className="margin-around"
        />
        <SolidLowContrastButton
          theme="light"
          size="small"
          label="Low Contrast B"
          className="margin-around"
        />
        <SolidLowContrastButton
          theme="light"
          size="xsmall"
          label="Low Contrast B"
          className="margin-around"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="large"
          label="Low Contrast B"
          className="margin-around"
        />
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="default"
          label="Low Contrast B"
          className="margin-around"
        />
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="small"
          label="Low Contrast B"
          className="margin-around"
        />
        <SolidLowContrastButton
          theme="light"
          hasIcon={false}
          size="xsmall"
          label="Low Contrast B"
          className="margin-around"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="light" size="large" className="margin-around" />
        <SolidLowContrastButton theme="light" size="default" className="margin-around" />
        <SolidLowContrastButton theme="light" size="small" className="margin-around" />
        <SolidLowContrastButton theme="light" size="xsmall" className="margin-around" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="dark"
          size="large" className="margin-around"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          size="default" className="margin-around"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          size="small" className="margin-around"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          size="xsmall" className="margin-around"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="large" className="margin-around"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="default" className="margin-around"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="small" className="margin-around"
          label="Low Contrast B"
        />
        <SolidLowContrastButton
          theme="dark"
          hasIcon={false}
          size="xsmall" className="margin-around"
          label="Low Contrast B"
        />
      </div>
      <div className="button-variant-section">
        <SolidLowContrastButton theme="dark" size="large" className="margin-around" />
        <SolidLowContrastButton theme="dark" size="default" className="margin-around" />
        <SolidLowContrastButton theme="dark" size="small" className="margin-around" />
        <SolidLowContrastButton theme="dark" size="xsmall" className="margin-around" />
      </div>
    </div>
  </div>
);
