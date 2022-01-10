import React from "react";
import SolidHighContrastButton from './SolidHighContrast';
import './SolidHighContrast.scss';

export default {
  title: 'Button/SolidHighContrast',
  component:SolidHighContrastButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => (
  //👇 Your template goes here

// export const SolidHighContrast = () => (
  <div>
    <div className="light sub-container">
      {/* light theme with label with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="light" size="large" label="High Contrast B" className="margin-around" />
        <SolidHighContrastButton theme="light" size="default" label="High Contrast B" className="margin-around" />
        <SolidHighContrastButton theme="light" size="small" label="High Contrast B" className="margin-around" />
        <SolidHighContrastButton theme="light" size="xsmall" label="High Contrast B" className="margin-around" />
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
        <SolidHighContrastButton
          theme="light"
          hasIcon="false"
          size="default"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme="light"
          hasIcon="false"
          size="small"
          label="High Contrast B"
          className="margin-around"
        />
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
        <SolidHighContrastButton theme="light" size="large" className="margin-around" />
        <SolidHighContrastButton theme="light" size="default" className="margin-around" />
        <SolidHighContrastButton theme="light" size="small" className="margin-around" />
        <SolidHighContrastButton theme="light" size="xsmall" className="margin-around" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      {/* dark theme button with label and with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton theme="dark" size="large" label="High Contrast B" className="margin-around" />
        <SolidHighContrastButton theme="dark" size="default" label="High Contrast B" className="margin-around" />
        <SolidHighContrastButton theme="dark" size="small" label="High Contrast B" className="margin-around" />
        <SolidHighContrastButton theme="dark" size="xsmall" label="High Contrast B" className="margin-around" />
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
        <SolidHighContrastButton
          theme="dark"
          hasIcon={false}
          size="default"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme="dark"
          hasIcon={false}
          size="small"
          label="High Contrast B"
          className="margin-around"
        />
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
        <SolidHighContrastButton theme="dark" size="large" className="margin-around" />
        <SolidHighContrastButton theme="dark" size="default" className="margin-around" />
        <SolidHighContrastButton theme="dark" size="small" className="margin-around" />
        <SolidHighContrastButton theme="dark" size="xsmall" className="margin-around" />
      </div>
    </div>
  </div>
  );
// );


export const SolidHighContrast = Template.bind({});
SolidHighContrast.args = {
  variant: 'primary',
};