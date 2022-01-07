import React from "react";
import Outline from './Outline';
import '../OutlineButton/Outline.scss';
export default {
  title: "Button/Outline-Sizes",
  // component:Outline
};

export const OutlineLarge = () => (
  <div>
    <div
      className="light sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="light" size="large" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline
          theme="light"
          hasIcon={false}
          size="large"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="light" size="large" />
      </div>
    </div>
    <br />
    <div
      className="dark sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="dark" size="large" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline
          theme="dark"
          hasIcon={false}
          size="large"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="dark" size="large" />
      </div>
    </div>
  </div>
);
