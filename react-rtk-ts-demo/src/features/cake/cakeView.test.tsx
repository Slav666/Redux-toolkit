import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CakeView from "./cakeView";
import { Provider } from "react-redux";
import store from "../../app/store";
describe("Shop stock", () => {
  it("Heading is present", () => {
    render(
      <Provider store={store}>
        <CakeView />
      </Provider>
    );
    const pageHeading = screen.getByRole("heading");
    expect(pageHeading).toBeInTheDocument();
  });

  it("number of cake reduce by 1 when user clicks order cake button", () => {
    render(
      <Provider store={store}>
        <CakeView />
      </Provider>
    );
    const buttonElement = screen.getByRole("button", { name: "order cake" });
    const pageHeadingValue = screen.getByTitle("cake");
    expect(pageHeadingValue).toHaveTextContent("20");
    fireEvent.click(buttonElement);
    expect(pageHeadingValue).toHaveTextContent("19");
  });
  it("number of cake increase by 2 when user  clicks restore cake button twice", () => {
    render(
      <Provider store={store}>
        <CakeView />
      </Provider>
    );
    const buttonElement = screen.getByRole("button", { name: "restore cake" });
    const pageHeadingValue = screen.getByTitle("cake");
    expect(pageHeadingValue).toHaveTextContent("19");
    fireEvent.click(buttonElement);
    expect(pageHeadingValue).toHaveTextContent("20");
    fireEvent.click(buttonElement);
    expect(pageHeadingValue).toHaveTextContent("21");
  });
});
