import React from "react";
import { render } from "@testing-library/react";

import GhostButton from "./GhostButton";
import { GhostButtonProps } from "./GhostButton.types";

describe("Ghost Button Component", () => {
  let props: GhostButtonProps;

  beforeEach(() => {
    props = {
      theme: "light",
      size: "large"
    };
  });

  const renderComponent = () => render(<GhostButton {...props} />);

  it("should have light className with default props", () => {
    const { getByTestId } = renderComponent();

    const ghostButton = getByTestId("test-component");

    expect(ghostButton).toHaveClass("test-component-light");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "dark";
    const { getByTestId } = renderComponent();

    const ghostButton = getByTestId("test-component");

    expect(ghostButton).toHaveClass("test-component-dark");
  });
});