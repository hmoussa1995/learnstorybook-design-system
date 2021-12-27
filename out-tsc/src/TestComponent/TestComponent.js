import React from "react";
import "./TestComponent.scss";
const TestComponent = ({ theme }) => (React.createElement("div", { "data-testid": "test-component", className: `test-component test-component-${theme}` },
    React.createElement("h1", { className: "heading" }, "I'm the test component"),
    React.createElement("h2", null, "Made with love by Harvey")));
export default TestComponent;
//# sourceMappingURL=TestComponent.js.map