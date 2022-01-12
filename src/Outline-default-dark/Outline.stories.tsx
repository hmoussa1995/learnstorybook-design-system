import React, { useState } from 'react';
import Outline from './Outline';
import '../OutlineButton-light/Outline.scss';
export default {
  title: 'Button/Outline-All-dark',
  // component:Outline
};

export const OutlineDefault = () => {
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
          <Outline
            theme={selectedTheme}
            size="default"
            className="margin-around"
            label="Outline B"
          />
        </div>
        <div className="button-variant-section">
          <Outline
            theme={selectedTheme}
            hasIcon={false}
            size="default"
            className="margin-around"
            label="Outline B"
          />
        </div>
        <div className="button-variant-section">
          <Outline
            theme={selectedTheme}
            size="default"
            className="margin-around"
          />
        </div>
      </div>
    </div>
  );
};
