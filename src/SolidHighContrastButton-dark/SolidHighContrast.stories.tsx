import React, { useState } from 'react';
import SolidHighContrastButton from './SolidHighContrast';
import './SolidHighContrast.scss';

export default {
  title: 'Button/SolidHighContrast-dark',
  component:SolidHighContrastButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => {
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const handleChange = (theme) => {
    // do the rest here
    setSelectedTheme(theme);
  };
return (
  //👇 Your template goes here

  // export const SolidHighContrast = () => (
  <div className={`${selectedTheme}-bg`}>
    {/* <input
      type="radio"
      name="theme-toggle"
      onChange={() => handleChange('light')}
    />
    <label className={`${selectedTheme}-theme-textcolor`}>Light</label>
    <input
      type="radio"
      name="theme-toggle"
      onChange={() => handleChange('dark')}
    />
    <label className={`${selectedTheme}-theme-textcolor`}>Dark</label> */}
    <div className="light sub-container">
      {/* light theme with label with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme={selectedTheme}
          size="large"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="default"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="small"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="xsmall"
          label="High Contrast B"
          className="margin-around"
        />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme={selectedTheme}
          hasIcon="false"
          size="large"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          hasIcon="false"
          size="default"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          hasIcon="false"
          size="small"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          hasIcon="false"
          size="xsmall"
          label="High Contrast B"
          className="margin-around"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme={selectedTheme}
          size="large"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="default"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="small"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="xsmall"
          className="margin-around"
        />
      </div>
    </div>
    <br />
    {/* <div className="dark sub-container">
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme={selectedTheme}
          size="large"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="default"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="small"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="xsmall"
          label="High Contrast B"
          className="margin-around"
        />
      </div>
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme={selectedTheme}
          hasIcon={false}
          size="large"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          hasIcon={false}
          size="default"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          hasIcon={false}
          size="small"
          label="High Contrast B"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          hasIcon={false}
          size="xsmall"
          label="High Contrast B"
          className="margin-around"
        />
      </div>
      <div className="button-variant-section">
        <SolidHighContrastButton
          theme={selectedTheme}
          size="large"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="default"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="small"
          className="margin-around"
        />
        <SolidHighContrastButton
          theme={selectedTheme}
          size="xsmall"
          className="margin-around"
        />
      </div>
    </div> */}
  </div>
);};
// );


export const SolidHighContrast = Template.bind({});
SolidHighContrast.args = {
  variant: 'primary',
};