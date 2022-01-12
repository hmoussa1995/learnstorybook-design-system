import React, {useState} from "react";
import SolidLowContrastButton from './SolidLowContrastButton';
import './SolidLowContrastButton.scss';
export default {
  title: "Button/SolidLowContrast-dark",
};

export const SolidLowContrast = () => {
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
        <div className="button-variant-section">
          <SolidLowContrastButton
            theme={selectedTheme}
            size="large"
            label="Low Contrast B"
            className="margin-around"
          />
          <SolidLowContrastButton
            theme={selectedTheme}
            size="default"
            label="Low Contrast B"
            className="margin-around"
          />
          <SolidLowContrastButton
            theme={selectedTheme}
            size="small"
            label="Low Contrast B"
            className="margin-around"
          />
          <SolidLowContrastButton
            theme={selectedTheme}
            size="xsmall"
            label="Low Contrast B"
            className="margin-around"
          />
        </div>
        <div className="button-variant-section">
          <SolidLowContrastButton
            theme={selectedTheme}
            hasIcon={false}
            size="large"
            label="Low Contrast B"
            className="margin-around"
          />
          <SolidLowContrastButton
            theme={selectedTheme}
            hasIcon={false}
            size="default"
            label="Low Contrast B"
            className="margin-around"
          />
          <SolidLowContrastButton
            theme={selectedTheme}
            hasIcon={false}
            size="small"
            label="Low Contrast B"
            className="margin-around"
          />
          <SolidLowContrastButton
            theme={selectedTheme}
            hasIcon={false}
            size="xsmall"
            label="Low Contrast B"
            className="margin-around"
          />
        </div>
        <div className="button-variant-section">
          <SolidLowContrastButton
            theme={selectedTheme}
            size="large"
            className="margin-around"
          />
          <SolidLowContrastButton
            theme={selectedTheme}
            size="default"
            className="margin-around"
          />
          <SolidLowContrastButton
            theme={selectedTheme}
            size="small"
            className="margin-around"
          />
          <SolidLowContrastButton
            theme={selectedTheme}
            size="xsmall"
            className="margin-around"
          />
        </div>
      </div>
    </div>
  );};
