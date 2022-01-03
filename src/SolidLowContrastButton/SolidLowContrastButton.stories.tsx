import React from "react";
import SolidLowContrastButton from './SolidLowContrastButton';

export default {
  title: "Button",
};

export const SolidLowContrast = () => (
  <div>
    <div className="light" style={{ display: 'flex' }}>
      <div>
        <SolidLowContrastButton
          theme="light"
          size="large"
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
      <div>
        <SolidLowContrastButton theme="light" size="large" />
        <SolidLowContrastButton theme="light" size="small" />
        <SolidLowContrastButton theme="light" size="xsmall" />
      </div>
    </div>
    <br />
    <div className="dark" style={{ display: 'flex' }}>
      <div>
        <SolidLowContrastButton
          theme="dark"
          size="large"
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
      <div>
        <SolidLowContrastButton theme="dark" size="large" />
        <SolidLowContrastButton theme="dark" size="small" />
        <SolidLowContrastButton theme="dark" size="xsmall" />
      </div>
    </div>
  </div>
);
