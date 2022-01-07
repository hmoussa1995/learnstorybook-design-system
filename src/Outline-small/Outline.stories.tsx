import React from "react";
import Outline from './Outline';
import '../OutlineButton/Outline.scss';
export default {
  title: "Button/Outline-Sizes",
  // component:Outline
};

export const OutlinSmall = () => (
  <div>
    <div
      className="light sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="light" size="small" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline
          theme="light"
          hasIcon={false}
          size="small"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="light" size="small" />
      </div>
    </div>
    <br />
    <div
      className="dark sub-container"
    >
      <div className="button-variant-section">
        <Outline theme="dark" size="small" label="Outline B" />
      </div>
      <div className="button-variant-section">
        <Outline
          theme="dark"
          hasIcon={false}
          size="small"
          label="Outline B"
        />
      </div>
      <div className="button-variant-section">
        <Outline theme="dark" size="small" />
      </div>
    </div>
  </div>
);
