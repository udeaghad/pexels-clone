import MenuDropdown from "./../components/menu-folder/menu";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";



describe("dropdown list", () => {
  it("renders a dropdown list", () => {
    const menuList = [
      "Discorver Photos",
      "Popular Searches",
      "Leaderboard",
      "Challenges",
      "Free Videos",
      "Pexel Blog",
    ];
    render(<MenuDropdown dropdown={menuList} />);
    // check if all components are rendered


    expect(screen.getByTestId("no")).toHaveTextContent("Discorver Photos");

  });
});


describe("dropdown list", () => {
  it("renders a dropdown list", () => {
    const menuList = [
      "Discorver Photos",
      "Popular Searches",
      "Leaderboard",
      "Challenges",
      "Free Videos",
      "Pexel Blog",
    ];
    render(<MenuDropdown dropdown={menuList} />);
    // check if all components are rendered


    expect(screen.getByTestId("no")).toHaveTextContent("Popular Searches");

  });
});

describe("dropdown list", () => {
  it("renders a dropdown list", () => {
    const menuList = [
      "Discorver Photos",
      "Popular Searches",
      "Leaderboard",
      "Challenges",
      "Free Videos",
      "Pexel Blog",
    ];
    render(<MenuDropdown dropdown={menuList} />);
    // check if all components are rendered


    expect(screen.getByTestId("no")).toHaveTextContent("Leaderboard");

  });
});

describe("dropdown list", () => {
  it("renders a dropdown list", () => {
    const menuList = [
      "Discorver Photos",
      "Popular Searches",
      "Leaderboard",
      "Challenges",
      "Free Videos",
      "Pexel Blog",
    ];
    render(<MenuDropdown dropdown={menuList} />);
    // check if all components are rendered


    expect(screen.getByTestId("no")).toHaveTextContent("Challenges");

  });
});

describe("dropdown list", () => {
  it("renders a dropdown list", () => {
    const menuList = [
      "Discorver Photos",
      "Popular Searches",
      "Leaderboard",
      "Challenges",
      "Free Videos",
      "Pexel Blog",
    ];
    render(<MenuDropdown dropdown={menuList} />);
    // check if all components are rendered


    expect(screen.getByTestId("no")).toHaveTextContent("Free Videos");

  });
});

describe("dropdown list", () => {
  it("renders a dropdown list", () => {
    const menuList = [
      "Discorver Photos",
      "Popular Searches",
      "Leaderboard",
      "Challenges",
      "Free Videos",
      "Pexel Blog",
    ];
    render(<MenuDropdown dropdown={menuList} />);
    // check if all components are rendered


    expect(screen.getByTestId("no")).toHaveTextContent("Pexel Blog");

  });
});

describe("dropdown list new", () => {
  it("renders a dropdown list", () => {
    const menuList = [
      "Discorver Photos",
      "Popular Searches",
      "Leaderboard",
      "Challenges",
      "Free Videos",
      "Pexel Blog",
    ];
    render(<MenuDropdown dropdown={menuList} />);
    // check if all components are rendered


    expect(screen.getByTestId("no")).toBeInTheDocument();
  });
});