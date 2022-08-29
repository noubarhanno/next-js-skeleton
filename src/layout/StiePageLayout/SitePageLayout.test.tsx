import React from "react";
import { render } from "@testing-library/react";
import SitePageLayout from "./SitePageLayout.component";

describe("pageContainer component test suite", () => {
  it("should match the snapshot", () => {
    const { container } = render(<SitePageLayout>Home Page</SitePageLayout>);
    expect(container).toMatchSnapshot();
  });
});
