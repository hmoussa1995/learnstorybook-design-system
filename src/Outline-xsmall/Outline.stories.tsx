import React from "react";
import Outline from './Outline';
import '../OutlineButton/Outline.scss';
export default {
  title: "Button/Outline-Sizes",
  // component:Outline
};

export const OutlineXsmall = () => (
  <div>
    <div
      className="light sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="light" size="xsmall" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline
          theme="light"
          hasIcon={false}
          size="xsmall"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="light" size="xsmall" />
      </div>
    </div>
    <br />
    <div
      className="dark sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="dark" size="xsmall" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline
          theme="dark"
          hasIcon={false}
          size="xsmall"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="dark" size="xsmall" />
      </div>
    </div>
  </div>
);
