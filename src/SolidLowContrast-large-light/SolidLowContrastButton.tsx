import React from "react";

import { SolidLowContrastButtonProps } from '../SolidLowContrastButton-light/SolidLowContrastButton.types';

import '../SolidLowContrastButton-light/SolidLowContrastButton.scss';
import { Button } from '@hmoussa1995/react-button-lib-github';

const SolidLowContrast: React.FC<SolidLowContrastButtonProps> = ({
  theme,
  size,
  label,
  hasIcon,
}) => (
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
);

export default SolidLowContrast;
