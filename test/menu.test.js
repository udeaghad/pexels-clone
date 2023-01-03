import MenuDropdown from "./../components/menu-folder/menu";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
// import { shallow } from "enzyme"


describe("dropdown list", () => {
  it("renders a dropdown list", () => {
    const menuList = [
      {
        title: "Discorver Photos,",
        cta: "/"
      },
      {
        title: "Popular Searches,",
        cta: "/"
      },

      {
        title: "Leaderboard,",
        cta: "/"
      },

      {
        title: "Challenges,",
        cta: "/"
      },
      {
        title: "Free Videos,",
        cta: "/"
      },
      {
        title: "Pexel Blog,",
        cta: "/"
      }

    ];
    render(<MenuDropdown dropdown={menuList} />);
    // check if all components are rendered


    expect(screen.getByTestId("dropdown-list")).toHaveTextContent("Discorver Photos");
    expect(screen.getByTestId("dropdown-list")).toHaveTextContent("Popular Searches");
    expect(screen.getByTestId("dropdown-list")).toHaveTextContent("Leaderboard");
    expect(screen.getByTestId("dropdown-list")).toHaveTextContent("Challenges");
    expect(screen.getByTestId("dropdown-list")).toHaveTextContent("Free Videos");
    expect(screen.getByTestId("dropdown-list")).toHaveTextContent("Pexel Blog");

  });
});

describe("dropdown list new", () => {
  it("renders a dropdown list", () => {
    const menuList = [
      {
        title: "Discorver Photos,",
        cta: "/"
      },
      {
        title: "Popular Searches,",
        cta: "/"
      },

      {
        title: "Leaderboard,",
        cta: "/"
      },

      {
        title: "Challenges,",
        cta: "/"
      },
      {
        title: "Free Videos,",
        cta: "/"
      },
      {
        title: "Pexel Blog,",
        cta: "/"
      }

    ];
    render(<MenuDropdown dropdown={menuList} />);
    // check if all components are rendered


    expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();
  });
});
