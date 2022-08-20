import React from "react";
import { render } from "@testing-library/react";
import Header from "./header.component";

describe("header component test suite", () => {
  it("should match the snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
