import React from "react";
import GhostButton from "../GhostButton/GhostButton";
import '../GhostButton/GhostButton';

export default {
  title: "Button/Ghost-Sizes",
};

export const GhostButtonDefault = () => (
  <div>
    <div className="light sub-container">
      {/* light theme with label with icon */}
      <div className="button-variant-section">
        <GhostButton name="Ghost" theme="light" size="default" label="Ghost" />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <GhostButton
          theme="light"
          hasIcon="false"
          size="default"
          label="Ghost"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <GhostButton theme="light" size="default" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      {/* dark theme button with label and with icon */}
      <div className="button-variant-section">
        <GhostButton theme="dark" size="default" label="Ghost" />
      </div>
      {/* dark theme button with label without icon */}
      <div className="button-variant-section">
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="default"
          label="Ghost"
        />
      </div>
      {/* dark theme button without label WITH icon */}
      <div className="button-variant-section">
        <GhostButton theme="dark" size="default" />
      </div>
    </div>
  </div>
);