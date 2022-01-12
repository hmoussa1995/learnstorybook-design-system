import React, { useState } from 'react';
import GhostButton from "./GhostButton";
import './GhostButton.scss';

export default {
  title: "Button/Ghost-light",
};

export const GhostButtonStory = () => {
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
        {/* light theme with label with icon */}
        <div className="button-variant-section">
          <GhostButton
            name="Ghost"
            theme={selectedTheme}
            size="large"
            label="Ghost"
            className="margin-around"
          />
          <GhostButton
            name="Ghost"
            theme={selectedTheme}
            size="default"
            label="Ghost"
            className="margin-around"
          />
          <GhostButton
            name="Ghost"
            theme={selectedTheme}
            size="small"
            label="Ghost"
            className="margin-around"
          />
          <GhostButton
            name="Ghost"
            theme={selectedTheme}
            size="xsmall"
            label="Ghost"
            className="margin-around"
          />
        </div>
        {/* light theme without label without icon */}
        <div className="button-variant-section">
          <GhostButton
            theme={selectedTheme}
            hasIcon="false"
            size="large"
            className="margin-around"
            label="Ghost"
          />
          <GhostButton
            theme={selectedTheme}
            hasIcon="false"
            size="default"
            className="margin-around"
            label="Ghost"
          />
          <GhostButton
            theme={selectedTheme}
            hasIcon="false"
            size="small"
            className="margin-around"
            label="Ghost"
          />
          <GhostButton
            theme={selectedTheme}
            hasIcon="false"
            size="xsmall"
            className="margin-around"
            label="Ghost"
          />
        </div>
        {/* light theme without label with icon */}
        <div className="button-variant-section">
          <GhostButton theme={selectedTheme} size="large" className="margin-around" />
          <GhostButton theme={selectedTheme} size="default" className="margin-around" />
          <GhostButton theme={selectedTheme} size="small" className="margin-around" />
          <GhostButton theme={selectedTheme} size="xsmall" className="margin-around" />
        </div>
      </div>
    </div>
  );};