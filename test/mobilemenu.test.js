import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mediaQuery from "css-mediaquery";
import { findAllByRole, getByRole, logRoles } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import MenuDropdown from "../components/MenuDropdown/MenuDropdown";

import Mobilemenu from "../components/Mobilemenu/Mobilemenu";


/**
 *  logic help in creating a responsive window
 * @function
 * @param {integer} width
 * @returns {function}
 */
function createMatchMedia(width) {
  return (query) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

/**
 * this function is called to make a screen responsive
 * @param {string} width
 */
function resizeScreenSize(width) {
  window.matchMedia = createMatchMedia(width);
}

describe("this test covers all of the functionality of mobile menu component ", () => {
  
  it("it should check for the menu icon", async() => {
    render(<Mobilemenu />)
    let icon = screen.getByRole("menuicon");
    expect(icon).toBeInTheDocument()
  });

  // this would check that when the menu button is clicked on it would show a dropdown which would contain all of the menu on a mobile view
  it("it should show a dropdown which would display menu list itmes", async() => {
    render(<Mobilemenu />)
    let icon = screen.getByRole("menuicon");
    await userEvent.click(icon)
    let dropdown = screen.queryByRole("menudropdown");
    expect(dropdown).toBeInTheDocument();
  });

  // this would check that when the menu close button is clicked on it would remove the display from the screen
  it("it would remove menu dropdown when clicked on", async() => {
    render(<Mobilemenu />)
    let icon = screen.getByRole("menuicon");
    await userEvent.click(icon)
    let dropdown = screen.queryByRole("menudropdown");
    expect(dropdown).toBeInTheDocument();
    let cancleButton = screen.queryByRole("close");
    expect(cancleButton).toBeInTheDocument();
    await userEvent.click(cancleButton)
    expect(cancleButton).not.toBeInTheDocument();
  });

  it("",()=>{
    
  })
});
