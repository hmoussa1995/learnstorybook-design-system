import React from "react";

import { GhostButtonProps } from "./GhostButton.types";

import "./GhostButton.scss";
import { Button } from '@hmoussa1995/react-button-lib-github';

const GhostButton: React.FC<GhostButtonProps> = ({
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
    name={'Ghost'}
    // icon="add_circle"
    hasIcon={hasIcon}
    iconPosition="left"
    theme={theme}
    size={size}
  />
  // </div>
);

export default GhostButton;
