import React from "react";
import { render } from "@testing-library/react";
import Footer from "./footer.component";

describe("footer component test suite", () => {
  it("should match the snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
