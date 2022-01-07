import React from "react";
import GhostButton from "./GhostButton";
import './GhostButton.scss';

export default {
  title: "Button/Ghost",
};

export const GhostButtonStory = () => (
  <div>
    <div className="light sub-container">
      {/* light theme with label with icon */}
      <div className="button-variant-section">
        <GhostButton name="Ghost" theme="light" size="large" label="Ghost" />
        <GhostButton name="Ghost" theme="light" size="default" label="Ghost" />
        <GhostButton name="Ghost" theme="light" size="small" label="Ghost" />
        <GhostButton name="Ghost" theme="light" size="xsmall" label="Ghost" />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <GhostButton
          theme="light"
          hasIcon="false"
          size="large"
          label="Ghost"
        />
        <GhostButton
          theme="light"
          hasIcon="false"
          size="default"
          label="Ghost"
        />
        <GhostButton
          theme="light"
          hasIcon="false"
          size="small"
          label="Ghost"
        />
        <GhostButton
          theme="light"
          hasIcon="false"
          size="xsmall"
          label="Ghost"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <GhostButton theme="light" size="large" />
        <GhostButton theme="light" size="default" />
        <GhostButton theme="light" size="small" />
        <GhostButton theme="light" size="xsmall" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      {/* dark theme button with label and with icon */}
      <div className="button-variant-section">
        <GhostButton theme="dark" size="large" label="Ghost" />
        <GhostButton theme="dark" size="default" label="Ghost" />
        <GhostButton theme="dark" size="small" label="Ghost" />
        <GhostButton theme="dark" size="xsmall" label="Ghost" />
      </div>
      {/* dark theme button with label without icon */}
      <div className="button-variant-section">
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="large"
          label="Ghost"
        />
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="default"
          label="Ghost"
        />
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="small"
          label="Ghost"
        />
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="xsmall"
          label="Ghost"
        />
      </div>
      {/* dark theme button without label WITH icon */}
      <div className="button-variant-section">
        <GhostButton theme="dark" size="large" />
        <GhostButton theme="dark" size="default" />
        <GhostButton theme="dark" size="small" />
        <GhostButton theme="dark" size="xsmall" />
      </div>
    </div>
  </div>
);