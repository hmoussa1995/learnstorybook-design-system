import React from "react";

import { OutlineProps } from "../OutlineButton-light/Outline.types";

import '../OutlineButton-light/Outline.scss';
import { Button } from '@hmoussa1995/react-button-lib-github';

const Outline: React.FC<OutlineProps> = ({ theme, size, label, hasIcon }) => (
    <Button
      id={'solidButton'}
      label={label ? label : ''}
      name={'Outline'}
      icon="add_circle"
      iconPosition="left"
      theme={theme}
      hasIcon={hasIcon}
      size={size}
    />
);

export default Outline;
