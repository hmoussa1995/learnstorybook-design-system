import React, { useState } from 'react';
import SolidHighContrastButton from './SolidHighContrast';
import '../SolidHighContrastButton-light/SolidHighContrast.scss';

export default {
  title: "Button/SolidHighContrast-All-dark",
};

export const SolidHighContrastXsmall = () => {
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const handleChange = (theme) => {
    // do the rest here
    setSelectedTheme(theme);
  };
  return (
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
            size="xsmall"
            label="High Contrast B"
            className="margin-around"
          />
        </div>
        {/* light theme without label with icon */}
        <div className="button-variant-section">
          <SolidHighContrastButton
            theme={selectedTheme}
            size="xsmall"
            className="margin-around"
          />
        </div>
      </div>
    </div>
  );};