import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../../components/Search/Search";

describe("It search for an input field with text search for free photos", () => {
  it("displays search for free photos", () => {
    render(
      <Search
        type="text"
        placeholder="Search for free photos"
        inputStyling="text-slate-600 border-none "
      />
    );

    expect(screen.getByTestId("search for free photos")).toBeInTheDocument();
  });
});
