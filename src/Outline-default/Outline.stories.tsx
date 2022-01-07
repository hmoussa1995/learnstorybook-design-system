import React from "react";
import Outline from './Outline';
import '../OutlineButton/Outline.scss';
export default {
  title: "Button/Outline-Sizes",
  // component:Outline
};

export const OutlineDefault = () => (
  <div>
    <div
      className="light sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="light" size="default" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline
          theme="light"
          hasIcon={false}
          size="default"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="light" size="default" />
      </div>
    </div>
    <br />
    <div
      className="dark sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="dark" size="default" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline
          theme="dark"
          hasIcon={false}
          size="default"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="dark" size="default" />
      </div>
    </div>
  </div>
);
