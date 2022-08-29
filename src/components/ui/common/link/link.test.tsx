import React from "react";
import { render } from "@testing-library/react";
import Link from "./link";

describe("Link test suite", () => {
  it("should match snopshot", () => {
    const { container } = render(<Link href="/" />);
    expect(container).toMatchSnapshot();
  });
});
