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
      render(<MenuDropdown dropdown={menuList}  />);
      // check if all components are rendered
      
      
      expect(screen.getByTestId("yes")).toBeInTheDocument();
  
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
      render(<MenuDropdown dropdown={menuList}  />);
      // check if all components are rendered
      
      
      expect(screen.getByTestId("yes")).toBeInTheDocument();
    });
  });