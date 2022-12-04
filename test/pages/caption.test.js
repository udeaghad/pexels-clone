import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Caption from '../../Components/caption'

 
   describe("Caption", () => {
      it("desplays stock photos", () => {
        render(<Caption/>);

        expect(screen.getByTestId("stockPhotos")).toBeInTheDocument();
      });
    });