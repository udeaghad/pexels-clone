import Tabmenu from "../components/Tabmenu/Tabmenu";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("tab menu list", () => {
    it("tabmenu should contain Home,Videos,Leaderboard,Challenges", () => {
        const tablist = [
            {
              id: 1,
              text: "Home",
              link: "/home",
            },
            {
              id: 2,
              text: "Videos",
              link: "/videos",
            },
            {
              id: 3,
              text: "Leaderboard",
              link: "/leaderboard",
            },
            {
              id: 4,
              text: "Challenges",
              link: "/challenges",
            },
          ];

        render( <Tabmenu tablist={tablist}/>);
       


        expect(screen.getByTestId("tabmenutext")).toHaveTextContent("Home");
        expect(screen.getByTestId("tabmenutext")).toHaveTextContent("Video");
        expect(screen.getByTestId("tabmenutext")).toHaveTextContent("Leaderboard");
        expect(screen.getByTestId("tabmenutext")).toHaveTextContent("Challenges");
        



    });

    it("should have an active class when currentRoute props is parsed", async () => {

        const tablist = [
            {
              id: 1,
              text: "Home",
              link: "/home",
            },
            {
              id: 2,
              text: "Videos",
              link: "/videos",
            },
            {
              id: 3,
              text: "Leaderboard",
              link: "/leaderboard", 
            },
            {
              id: 4,
              text: "Challenges",
              link: "/challenges",
            },
          ];
          render( <Tabmenu tablist={tablist} currentRoute="/home"/>);
          const boxes = await screen.findAllByText(/Home/i)
          expect(boxes[0]).toHaveClass('isactive');
          
         // const activeClass = screen.getElementsByClassName('bg-black');
          

    });


    it("should have an inactive class when currentRoute props is omited ", async () => {
        const tablist = [
            {
              id: 1,
              text: "Home",
              link: "/home",
            },
          ];
          render( <Tabmenu tablist={tablist} />);
          const boxes = await screen.findAllByText(/Home/i)
          expect(boxes[0]).toHaveClass('isinactive');
          
         // const activeClass = screen.getElementsByClassName('bg-black');
          

    });
});







