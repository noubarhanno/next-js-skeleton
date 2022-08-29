import React from "react";
import { render } from "@testing-library/react";
import Lender from "./lender";

describe("Lender test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<Lender />);
    expect(container).toMatchSnapshot();
  });
});
