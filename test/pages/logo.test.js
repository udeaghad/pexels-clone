import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Logo from '../../Components/logo'


describe("Logo", () => {

    describe("Logo", () => {
        it("should display a logo", () => {
            render(<Logo 
                image="/pexel.png"
                alt="logo"
                link="/" />);
            expect(screen.getByTestId("displayLogo")).toBeInTheDocument();
        });
    });

    it(" confirms the alt", () => {
        render(<Logo
            image="/pexel.png"
            alt="logo"
            link="/" />);
        const testAlt = document.querySelector("img")
        expect(testAlt.alt).toContain("logo")
    });

    it(" checks the src", () => {
        render(<Logo
            image="/pexel.png"
            alt="logo"
            link="/" />)
        const testSrc = document.querySelector("img")
        expect(testSrc.src).toContain("pexel.png")
        
    });

    it("tests the link", () => {
        render(<Logo
            image="/pexel.png"
            alt="logo"
            link="/home"  />)
        const testLink = document.querySelector("a")    
        expect(testLink.href).toContain("home")
    })



});