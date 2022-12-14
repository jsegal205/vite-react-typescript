import { render, screen } from "@testing-library/react";
import Landing from "./index";

describe("<Landing>", () => {
  it("renders Landing header", () => {
    render(<Landing />);
    const linkElement = screen.getByText(/Landing/i);
    expect(linkElement).toBeInTheDocument();
  });
});
