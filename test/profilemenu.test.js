import Profilemenu from "../components/Profilemenu/Profilemenu";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
// import { shallow } from "enzyme"

describe("this test covers all of the functionality of Profilemenu componet ", () => {
  // check that the Profilemenu button is in the document
  it(" shoule check that the profile button is in the document", () => {
    render(<Profilemenu  />);
    const selectProfilemenuButton = screen.getByRole("hoverbutton");
    expect(selectProfilemenuButton).toBeInTheDocument();
  });

  // check that on hover the profile pop menu is displayed

  it(" should check that when profile button is hovered dropdown should be in the document and when the hover is out dropdown should not be in the document", async () => {
    const {container} = render(<Profilemenu  />)
    
    //render(<Profilemenu />);
    const user = userEvent;
    const selectProfilemenuButton = screen.getByRole("hoverbutton");

    // hover on button to display dropdown area
    await user.hover(selectProfilemenuButton);

    const noticicationPopupMenu = screen.getByRole("popupmenu");
    expect(noticicationPopupMenu).toBeInTheDocument();
    const getHoverbutton = screen.getByRole("hoverbutton");
   
    await  user.unhover(getHoverbutton)
    const noticicationPopupMenu1 = screen.queryByText("menuitem",{name:/logout/i});
    expect(noticicationPopupMenu1).not.toBeInTheDocument();
  });

  it("Confirm that all menu list are in the document", async () => {
    const {container} = render(<Profilemenu />)
    const user = userEvent;
    const selectProfilemenuButton = screen.getByRole("hoverbutton");

    // hover on button to display dropdown area
    await user.hover(selectProfilemenuButton);
    //check that profile menu is displayed
    const getProfilemenuDetailsSection = screen.getAllByRole("region",{name:/profilemenu details/i});
    expect(getProfilemenuDetailsSection).toHaveLength(6);
     
  });

  
});
