import React from "react";
import { render } from "@testing-library/react";
import PageContainer from "./pageContainer.component";

describe("pageContainer component test suite", () => {
  it("should match the snapshot", () => {
    const { container } = render(<h1 />);
    expect(container).toMatchSnapshot();
  });
});
