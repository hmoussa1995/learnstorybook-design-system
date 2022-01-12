import React, {useState} from "react";
import GhostButton from "../GhostButton-light/GhostButton";
import '../GhostButton-light/GhostButton';

export default {
  title: "Button/Ghost-All-dark",
};

export const GhostButtonXsmall = () => {
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const handleChange = (theme) => {
    // do the rest here
    setSelectedTheme(theme);
  };
  return(
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
        <GhostButton name="Ghost" theme={selectedTheme} className="margin-around" size="xsmall" label="Ghost" />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <GhostButton
          theme={selectedTheme} className="margin-around"
          hasIcon="false"
          size="xsmall"
          label="Ghost"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <GhostButton theme={selectedTheme} className="margin-around" size="xsmall" />
      </div>
    </div>
  </div>
)};