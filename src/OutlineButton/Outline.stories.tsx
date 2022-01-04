import React from "react";
import Outline from './Outline';
import './Outline.scss';
export default {
  title: "Button",
};

export const OutlineButton = () => (
  <div>
    <div
      className="light sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="light" size="large" label="Outline B" />
        <Outline theme="light" size="default" label="Outline B" />
        <Outline theme="light" size="small" label="Outline B" />
        <Outline theme="light" size="xsmall" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline theme="light" hasIcon={false} size="large" label="Outline B" />
        <Outline
          theme="light"
          hasIcon={false}
          size="default"
          label="Outline B"
        />
        <Outline theme="light" hasIcon={false} size="small" label="Outline B" />
        <Outline
          theme="light"
          hasIcon={false}
          size="xsmall"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="light" size="large" />
        <Outline theme="light" size="default" />
        <Outline theme="light" size="small" />
        <Outline theme="light" size="xsmall" />
      </div>
    </div>
    <br />
    <div
      className="dark sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="dark" size="large" label="Outline B" />
        <Outline theme="dark" size="default" label="Outline B" />
        <Outline theme="dark" size="small" label="Outline B" />
        <Outline theme="dark" size="xsmall" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline theme="dark" hasIcon={false} size="large" label="Outline B" />
        <Outline
          theme="dark"
          hasIcon={false}
          size="default"
          label="Outline B"
        />
        <Outline theme="dark" hasIcon={false} size="small" label="Outline B" />
        <Outline theme="dark" hasIcon={false} size="xsmall" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline theme="dark" size="large" />
        <Outline theme="dark" size="default" />
        <Outline theme="dark" size="small" />
        <Outline theme="dark" size="xsmall" />
      </div>
    </div>
  </div>
);
