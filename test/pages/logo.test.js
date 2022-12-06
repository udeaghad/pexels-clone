import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Logo from '../../Components/logo'


describe("Test to see if the logo component does what it was designed for .", () => {

   
    it("confirm if an image is displayed on the page", () => {
        render(<Logo 
            image="/pexel.png"
            alt="logo"
            link="/" />);
        expect(screen.getByTestId("displayLogo")).toBeInTheDocument(); 
    });
   

    it(" confirms the string parsed to the alt attribute is equivelent to the string parsed to the component alt props ", () => {
        render(<Logo
            image="/pexel.png"
            alt="logo"
            link="/" />);
        const testAlt = document.querySelector("img")
        expect(testAlt.alt).toContain("logo")
    });

    it(" checks the link provided to the src is correct", () => {
        render(<Logo
            image="/pexel.png"
            alt="logo"
            link="/" />)
        const testSrc = document.querySelector("img")
        expect(testSrc.src).toContain("pexel.png")
        
    });

    it("tests that the link href value is correct ", () => {
        render(<Logo
            image="/pexel.png"
            alt="logo"
            link="/home"  />)
        const testLink = document.querySelector("a")    
        expect(testLink.href).toContain("home")
    })



});