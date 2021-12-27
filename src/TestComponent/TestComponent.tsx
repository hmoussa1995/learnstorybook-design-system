import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";
import { Button } from '@hmoussa1995/react-button-lib-github';

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <Button
      id={'solidButton'}
      label={'Button Label Solid H'}
      name={'Solid-High-Contrast'}
      icon="add_circle"
      iconPosition="left"
      theme={theme}
      size="large"
    />
  </div>
);

export default TestComponent;
