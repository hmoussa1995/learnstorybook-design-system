import React from "react";
import Outline from './Outline';
import './Outline.scss';
export default {
  title: "Button/Outline",
  // component:Outline
};

export const OutlineButton = () => (
  <div>
    <div
      className="light sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="light" size="large" className="margin-around" label="Outline B" />
        <Outline theme="light" size="default" className="margin-around" label="Outline B" />
        <Outline theme="light" size="small" className="margin-around" label="Outline B" />
        <Outline theme="light" size="xsmall" className="margin-around" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline theme="light" hasIcon={false} size="large" className="margin-around" label="Outline B" />
        <Outline
          theme="light"
          hasIcon={false}
          size="default" className="margin-around"
          label="Outline B"
        />
        <Outline theme="light" hasIcon={false} size="small" className="margin-around" label="Outline B" />
        <Outline
          theme="light"
          hasIcon={false}
          size="xsmall" className="margin-around"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="light" size="large" className="margin-around" />
        <Outline theme="light" size="default" className="margin-around" />
        <Outline theme="light" size="small" className="margin-around" />
        <Outline theme="light" size="xsmall" className="margin-around" />
      </div>
    </div>
    <br />
    <div
      className="dark sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="dark" size="large" className="margin-around" label="Outline B" />
        <Outline theme="dark" size="default" className="margin-around" label="Outline B" />
        <Outline theme="dark" size="small" className="margin-around" label="Outline B" />
        <Outline theme="dark" size="xsmall" className="margin-around" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline theme="dark" hasIcon={false} size="large" className="margin-around" label="Outline B" />
        <Outline
          theme="dark"
          hasIcon={false}
          size="default" className="margin-around"
          label="Outline B"
        />
        <Outline theme="dark" hasIcon={false} size="small" className="margin-around" label="Outline B" />
        <Outline theme="dark" hasIcon={false} size="xsmall" className="margin-around" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline theme="dark" size="large" className="margin-around" />
        <Outline theme="dark" size="default" className="margin-around" />
        <Outline theme="dark" size="small" className="margin-around" />
        <Outline theme="dark" size="xsmall" className="margin-around" />
      </div>
    </div>
  </div>
);
