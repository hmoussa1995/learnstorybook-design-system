import React, { useState } from 'react';
import SolidLowContrastButton from '../SolidLowContrastButton-light/SolidLowContrastButton';
import '../SolidLowContrastButton-light/SolidLowContrastButton.scss';
export default {
  title: 'Button/SolidLowContrast-All-light',
};

export const SolidLowContrastDefault = () => {
  const [selectedTheme, setSelectedTheme] = useState('light');
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
        <div className="button-variant-section">
          <SolidLowContrastButton
            theme={selectedTheme}
            size="default"
            label="Low Contrast B"
            className="margin-around"
          />
        </div>
        <div className="button-variant-section">
          <SolidLowContrastButton
            theme={selectedTheme}
            hasIcon={false}
            size="default"
            label="Low Contrast B"
            className="margin-around"
          />
        </div>
        <div className="button-variant-section">
          <SolidLowContrastButton
            theme={selectedTheme}
            size="default"
            className="margin-around"
          />
        </div>
      </div>
    </div>
  );
};
