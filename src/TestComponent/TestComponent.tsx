import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";
import { Button } from '@hmoussa1995/react-button-lib-github';

const TestComponent: React.FC<TestComponentProps> = ({
  theme,
  size,
  label,
  hasIcon,
}) => (
  // <div
  //   data-testid="test-component"
  //   className={`test-component test-component-${theme}`}
  // >
  <Button
    id={'solidButton'}
    label={label ? label : ''}
    name={'Solid-High-Contrast'}
    // icon="add_circle"
    hasIcon={hasIcon}
    iconPosition="left"
    theme={theme}
    size={size}
  />
  // </div>
);

export default TestComponent;
