import React from "react";
import { render } from "@testing-library/react";

import Outline from "./Outline";
import { OutlineProps } from "./Outline.types";

describe("Test Component", () => {
  let props: OutlineProps;

  beforeEach(() => {
    props = {
      theme: "light"
    };
  });

  const renderComponent = () => render(<Outline {...props} />);

  it("should have light className with default props", () => {
    const { getByTestId } = renderComponent();

    const Outline = getByTestId("test-component");

    expect(Outline).toHaveClass("test-component-light");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "dark";
    const { getByTestId } = renderComponent();

    const Outline = getByTestId("test-component");

    expect(Outline).toHaveClass("test-component-dark");
  });
});