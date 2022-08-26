import React from "react";
import { render } from "@testing-library/react";
import PasswordField from "./PasswordField";

describe("password field test suite", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<PasswordField />);
    expect(asFragment()).toMatchSnapshot();
  });
});
