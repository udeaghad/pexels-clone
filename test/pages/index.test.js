import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Logo from '../../Components/logo'

  describe("Logo", () => {
    it("should display a logo", () => {
      render(<Logo/>);

      expect(screen.getByTestId("displayLogo")).toBeInTheDocument();
    });
  })