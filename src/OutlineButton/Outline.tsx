import React from "react";

import { OutlineProps } from "./Outline.types";

import "./Outline.scss";
import { Button } from '@hmoussa1995/react-button-lib-github';

const Outline: React.FC<OutlineProps> = ({ theme, size, label }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <Button
      id={'solidButton'}
      label={label ? label : ''}
      name={'Outline'}
      icon="add_circle"
      iconPosition="left"
      theme={theme}
      size={size}
    />
  </div>
);

export default Outline;
