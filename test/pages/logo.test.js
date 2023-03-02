import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Logo from '../../components/Logo/Logo'


describe("Test to see if the logo component does what it was designed for .", () => {

   
    it("confirm if an image is displayed on the page", () => {
        render(<Logo 
            image="/pexel.png"
            alt="logo"
            link="/"
            mobileImage="/mobileImage.png" />);
        expect(screen.getByRole("displayLogo")).toBeInTheDocument(); 
    });
   

describe("Tests the string passed to alt attribute and alt props ", () => {

    it(" confirms the string passed to the alt attribute is equivelent to the string passed to the component alt props ", () => {
        render(<Logo
            image="/pexel.png"
            alt="logo"
            link="/" 
            mobileImage="/mobileImage.png"/>);
        const testAlt = document.querySelector("img")
        expect(testAlt.alt).toContain("logo")
    });
});    

describe("Tests the link src ", () => {

    it(" checks the link provided to the src is correct", () => {
        render(<Logo
            image="/pexel.png"
            alt="logo"
            link="/"
            mobileImage="/mobileImage.png" />)
        const testSrc = document.querySelector("img")
        expect(testSrc.src).toContain("pexel.png")
        
    });
});

describe("Tests the value of the link href", () => {

    it("tests that the link href value is correct ", () => {
        render(<Logo
            image="/pexel.png"
            alt="logo"
            link="/home" 
            mobileImage="/mobileImage.png" />)
        const testLink = document.querySelector("a")    
        expect(testLink.href).toContain("home")
    });

});   


});