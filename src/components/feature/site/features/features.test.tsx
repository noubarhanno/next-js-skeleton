import React from "react";
import { render } from "@testing-library/react";
import Features from "./features";

describe("Features test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<Features />);
    expect(container).toMatchSnapshot();
  });
});
