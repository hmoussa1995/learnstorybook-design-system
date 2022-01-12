import React from "react";
import GhostButton from "../GhostButton-light/GhostButton";
import '../GhostButton-light/GhostButton';

export default {
  title: "Button/Ghost-Sizes",
};

export const GhostButtonLarge = () => (
  <div>
    <div className="light sub-container">
      {/* light theme with label with icon */}
      <div className="button-variant-section">
        <GhostButton name="Ghost" theme="light" size="large" label="Ghost" />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <GhostButton
          theme="light"
          hasIcon="false"
          size="large"
          label="Ghost"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <GhostButton theme="light" size="large" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      {/* dark theme button with label and with icon */}
      <div className="button-variant-section">
        <GhostButton theme="dark" size="large" label="Ghost" />
      </div>
      {/* dark theme button with label without icon */}
      <div className="button-variant-section">
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="large"
          label="Ghost"
        />
      </div>
      {/* dark theme button without label WITH icon */}
      <div className="button-variant-section">
        <GhostButton theme="dark" size="large" />
      </div>
    </div>
  </div>
);