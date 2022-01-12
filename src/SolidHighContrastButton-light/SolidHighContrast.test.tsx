import React from "react";
import { render } from "@testing-library/react";

import SolidHighContrast from "./SolidHighContrast";
import { SolidHighContrastProps } from "./SolidHighContrast.types";

describe("Solid High Contrarst Button Component", () => {
  let props: SolidHighContrastProps;

  beforeEach(() => {
    props = {
      theme: "light",
      size: "large"
    };
  });

  const renderComponent = () => render(<SolidHighContrast {...props} />);

  it("should have light className with default props", () => {
    const { getByTestId } = renderComponent();

    const solidHighContrast = getByTestId("solid-high-contrast-component");

    expect(solidHighContrast).toHaveClass("solid-high-contrast-component-light");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "dark";
    const { getByTestId } = renderComponent();

    const solidHighContrast = getByTestId("solid-high-contrast-component");

    expect(solidHighContrast).toHaveClass("solid-high-contrast-component-dark");
  });
});