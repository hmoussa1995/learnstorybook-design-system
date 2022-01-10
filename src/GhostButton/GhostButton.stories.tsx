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
        <GhostButton name="Ghost" theme="light" size="large" label="Ghost" className="margin-around"/>
        <GhostButton name="Ghost" theme="light" size="default" label="Ghost" className="margin-around" />
        <GhostButton name="Ghost" theme="light" size="small" label="Ghost" className="margin-around" />
        <GhostButton name="Ghost" theme="light" size="xsmall" label="Ghost" className="margin-around" />
      </div>
      {/* light theme without label without icon */}
      <div className="button-variant-section">
        <GhostButton
          theme="light"
          hasIcon="false"
          size="large" className="margin-around"
          label="Ghost"
        />
        <GhostButton
          theme="light"
          hasIcon="false"
          size="default" className="margin-around"
          label="Ghost"
        />
        <GhostButton
          theme="light"
          hasIcon="false"
          size="small" className="margin-around"
          label="Ghost"
        />
        <GhostButton
          theme="light"
          hasIcon="false"
          size="xsmall" className="margin-around"
          label="Ghost"
        />
      </div>
      {/* light theme without label with icon */}
      <div className="button-variant-section">
        <GhostButton theme="light" size="large" className="margin-around" />
        <GhostButton theme="light" size="default" className="margin-around" />
        <GhostButton theme="light" size="small" className="margin-around" />
        <GhostButton theme="light" size="xsmall" className="margin-around" />
      </div>
    </div>
    <br />
    <div className="dark sub-container">
      {/* dark theme button with label and with icon */}
      <div className="button-variant-section">
        <GhostButton theme="dark" size="large" className="margin-around" label="Ghost" />
        <GhostButton theme="dark" size="default" className="margin-around" label="Ghost" />
        <GhostButton theme="dark" size="small" className="margin-around" label="Ghost" />
        <GhostButton theme="dark" size="xsmall" className="margin-around" label="Ghost" />
      </div>
      {/* dark theme button with label without icon */}
      <div className="button-variant-section">
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="large" className="margin-around"
          label="Ghost"
        />
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="default" className="margin-around"
          label="Ghost"
        />
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="small" className="margin-around"
          label="Ghost"
        />
        <GhostButton
          theme="dark"
          hasIcon={false}
          size="xsmall" className="margin-around"
          label="Ghost"
        />
      </div>
      {/* dark theme button without label WITH icon */}
      <div className="button-variant-section">
        <GhostButton theme="dark" size="large" className="margin-around" />
        <GhostButton theme="dark" size="default" className="margin-around" />
        <GhostButton theme="dark" size="small" className="margin-around" />
        <GhostButton theme="dark" size="xsmall" className="margin-around" />
      </div>
    </div>
  </div>
);