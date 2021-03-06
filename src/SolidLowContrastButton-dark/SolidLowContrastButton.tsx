import React from "react";

import { SolidLowContrastButtonProps } from './SolidLowContrastButton.types';

import './SolidLowContrastButton.scss';
import { Button } from '@hmoussa1995/react-button-lib-github';

const SolidLowContrast: React.FC<SolidLowContrastButtonProps> = ({
  theme,
  size,
  label,
  hasIcon,
  className
}) => (
  <div className={className}>
    <Button
      id={'solidButton'}
      label={label ? label : ''}
      name={'Solid-Low-Contrast'}
      icon="add_circle"
      iconPosition="left"
      hasIcon={hasIcon}
      theme={theme}
      size={size}
      />
      </div>
);

export default SolidLowContrast;
