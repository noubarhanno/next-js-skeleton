import React from "react";
import { render } from "@testing-library/react";
import PlatformPageLayout from "./PlatformPageLayout.component";

describe("pageContainer component test suite", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <PlatformPageLayout>Home Page</PlatformPageLayout>
    );
    expect(container).toMatchSnapshot();
  });
});
