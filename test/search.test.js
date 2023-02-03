import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search/Search";
import { IoSearchOutline } from "react-icons/io5";

describe("It searches for input field with text search for free photos", () => {
    it("displays search for free photos", () => {
        render( <
            Search type = "text"
            placeholder = "Search for free photos"
            inputstyling = "text-slate-600 border-none "
            icon = { < IoSearchOutline / > }
            />
        );
        expect(screen.getByTestId("searchforfreephotos")).toBeInTheDocument();
    });
});

describe("icon button should have correct icon ", () => {
    it("dispalys icon button", () => {
        render( <
            Search type = "text"
            placeholder = "Search for free photos"
            inputstyling = "text-slate-600 border-none "
            icon = { < IoSearchOutline / > }
            />
        );
        expect(screen.getByTestId("icondisplay")).toBeInTheDocument();
    });
});

describe("input field value search for free photos", () => {
    it("searches for input field", () => {
        render( <
            Search type = "text"
            placeholder = "Search for free photos"
            inputstyling = "text-slate-600 border-none "
            icon = { < IoSearchOutline / > }
            />
        );
        expect(screen.getByRole("search-input")).toHaveAttribute(
            "placeholder",
            "Search for free photos"
        );
    });
});

describe("checks when icon is supplied", () => {
    it("displays icon when supplied", () => {
        render( <
            Search type = "text"
            placeholder = "Search for free photos"
            inputstyling = "text-slate-600 border-none "
            icon = { < IoSearchOutline / > }
            />
        );
        expect(screen.getByTestId("icondisplay")).toBeInTheDocument();
    });
});

describe("checks that a click will show dropdown", () => {
    it("tests for onclick that shows dropdown", () => {
        render( <
            Search type = "text"
            placeholder = "Search for free photos"
            inputstyling = "text-slate-600 border-none "
            icon = { < IoSearchOutline / > }
            />
        );
        const dropDropClick = screen.getByTestId("dropdropclick");
        fireEvent.click(dropDropClick);
        expect(screen.getByTestId("dropdown-container")).toBeInTheDocument();
    });
});

describe("checks that a click outside the box will close the dropdown", () => {});