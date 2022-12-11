import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Caption from '../../Components/Caption/Caption'

 
   describe("Caption", () => {
      it("desplays stock photos", () => {
        render(<Caption/>);

        expect(screen.getByTestId("stockPhotos")).toBeInTheDocument();
      });
    });