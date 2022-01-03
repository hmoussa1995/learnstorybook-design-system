import React from "react";
import { render } from "@testing-library/react";

import SolidLowContrast from './SolidLowContrastButton';
import { SolidLowContrastButtonProps } from './SolidLowContrastButton.types';

describe("Test Component", () => {
  let props: SolidLowContrastButtonProps;

  beforeEach(() => {
    props = {
      theme: "light"
    };
  });

  const renderComponent = () => render(<SolidLowContrast {...props} />);

  it("should have light className with default props", () => {
    const { getByTestId } = renderComponent();

    const SolidLowContrast = getByTestId('test-component');

    expect(SolidLowContrast).toHaveClass('test-component-light');
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "dark";
    const { getByTestId } = renderComponent();

    const SolidLowContrast = getByTestId('test-component');

    expect(SolidLowContrast).toHaveClass('test-component-dark');
  });
});