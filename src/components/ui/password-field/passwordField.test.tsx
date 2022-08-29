import React from "react";
import { render } from "@testing-library/react";
import PasswordField from "./passwordField";

describe("password field test suite", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<PasswordField />);
    expect(asFragment()).toMatchSnapshot();
  });
});
