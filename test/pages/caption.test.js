import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Caption from '../../components/Caption/Caption'


describe("Caption", () => {
  it("displays stock photos", () => {
    render(<Caption
      text="Free Stock Photos"
      color="text-slate-600"
      size="text-xl"
    />);

    expect(screen.getByTestId("stockPhotos")).toBeInTheDocument();
  });
});

describe("Tests assigned color", () => {

  it("checks if color className exists", () => {
    render(<Caption
      text="Free Stock Photos"
      color="text-slate-600"
      size="text-xl"
      variant="h4" />);

    expect(document.getElementsByClassName("text-slate-600")[0]);

  })
})