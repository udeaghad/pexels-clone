import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mediaQuery from "css-mediaquery";
import { findAllByRole, getByRole, logRoles } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import MenuDropdown from "../components/MenuDropdown/MenuDropdown";


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

describe("this test covers all of the functionality of menu componet ", () => {
  // check that the notification button is in the document
  it(" shoule check that the explore menu button is in the document", async() => {
    render(<MenuDropdown />);
    const menuButton = screen.getByRole('button',{name:/explore/i});
    expect(menuButton).toBeInTheDocument()
    // check that on hover of the explore button that the dropdown with menu dontent displays 
    await userEvent.hover(menuButton)
    const getLinks = screen.getAllByRole("link"); 
    expect(getLinks).toHaveLength(6);
    await userEvent.unhover(menuButton)
    const noLinks = screen.queryAllByRole("link"); 
    expect(noLinks).not.toHaveLength(6);
    
    
  });
});
