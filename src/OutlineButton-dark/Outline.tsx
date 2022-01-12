import React from "react";

import { OutlineProps } from "./Outline.types";

import "./Outline.scss";
import { Button } from '@hmoussa1995/react-button-lib-github';

const Outline: React.FC<OutlineProps> = ({ theme, size, label, hasIcon, className }) => (
    <div className={className}>
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
    </div>
);

export default Outline;
