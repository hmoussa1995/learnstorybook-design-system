import React, { useState } from 'react';
import SolidHighContrastButton from './SolidHighContrast';
import './SolidHighContrast.scss';

export default {
  title: 'Button/SolidHighContrast-light-main',
  component: SolidHighContrastButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => {
  const [selectedTheme, setSelectedTheme] = useState('light');
  const handleChange = (theme) => {
    // do the rest here
    setSelectedTheme(theme);
  };
  return (
    <div className={`${selectedTheme}-bg`}>
      <div className="light sub-container">
        <div className="button-variant-section">
          <SolidHighContrastButton
            theme={selectedTheme}
            size="large"
            label="High Contrast"
            className="margin-around"
          />
        </div>
    </div>
    </div>
  );
};
// );

export const SolidHighContrast = Template.bind({});
SolidHighContrast.args = {
  variant: 'primary',
};
