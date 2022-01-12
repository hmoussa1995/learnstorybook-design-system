import React from "react";

import { SolidHighContrastProps } from "../SolidHighContrastButton-light/SolidHighContrast.types";

import '../SolidHighContrastButton-light/SolidHighContrast.scss';
import { Button } from '@hmoussa1995/react-button-lib-github';

const SolidHighContrast: React.FC<SolidHighContrastProps> = ({
  theme,
  size,
  label,
  hasIcon,
  className,
}) => (
  // <div
  //   data-testid="test-component"
  //   className={`test-component test-component-${theme}`}
  // >
  <div className={className}>
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
  </div>
);

export default SolidHighContrast;
