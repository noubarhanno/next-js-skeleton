import React from "react";
import { render } from "@testing-library/react";
import Register from "./register";

describe("Register test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<Register />);
    expect(container).toMatchSnapshot();
  });
});
