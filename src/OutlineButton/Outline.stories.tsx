import React from "react";
import Outline from './Outline';

export default {
  title: "Button",
};

export const OutlineButton = () => (
  <div>
    <div className="light" style={{ display: 'flex' }}>
      <div>
        <Outline
          theme="light"
          size="large"
          label="Outline B"
        />
        <Outline
          theme="light"
          size="small"
          label="Outline B"
        />
        <Outline
          theme="light"
          size="xsmall"
          label="Outline B"
        />
      </div>
      <div>
        <Outline theme="light" size="large" />
        <Outline theme="light" size="small" />
        <Outline theme="light" size="xsmall" />
      </div>
    </div>
    <br />
    <div className="dark" style={{ display: 'flex' }}>
      <div>
        <Outline
          theme="dark"
          size="large"
          label="Outline B"
        />
        <Outline
          theme="dark"
          size="small"
          label="Outline B"
        />
        <Outline
          theme="dark"
          size="xsmall"
          label="Outline B"
        />
      </div>
      <div>
        <Outline theme="dark" size="large" />
        <Outline theme="dark" size="small" />
        <Outline theme="dark" size="xsmall" />
      </div>
    </div>
  </div>
);
