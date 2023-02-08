import Notification from "../components/Notification/Notification";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
// import { shallow } from "enzyme"

describe("this test covers all of the functionality of notification componet ", () => {
  // check that the notification button is in the document
  it(" shoule check that the notification button is in the document", () => {
    render(<Notification tooltiptext="just a message" />);
    const selectNotificationButton = screen.getByRole("hoverbutton");
    expect(selectNotificationButton).toBeInTheDocument();
  });

  // check that on hover the notification pop menu is displayed

  it(" should check that when notification button is hovered dropdown should be in the document and when the hover is out dropdown should not be in the document", async () => {
    const {container} = render(<Notification tooltiptext="just a message" />)
    
    //render(<Notification />);
    const user = userEvent;
    const selectNotificationButton = screen.getByRole("hoverbutton");

    // hover on button to display dropdown area
    await user.hover(selectNotificationButton);

    const noticicationPopupMenu = screen.getByRole("popupmenu");
    expect(noticicationPopupMenu).toBeInTheDocument();
    const test = screen.getByRole("hoverbutton");
   
    await  user.unhover(test)
    const noticicationPopupMenu1 = screen.queryByText("menuitem",{name:/New File/i});
    expect(noticicationPopupMenu1).not.toBeInTheDocument();
  });

  it(" should check that when notification button is hovered dropdown should be in the document and when the hover is out dropdown should not be in the document", async () => {
    const {container} = render(<Notification tooltiptext="just a message"/>)
    const user = userEvent;
    const selectNotificationButton = screen.getByRole("hoverbutton");

    // hover on button to display dropdown area
    await user.hover(selectNotificationButton);
    //check that notificaation message is displayed
    const getNotificationDetailsSection = screen.getAllByRole("region",{name:/notification details/i});
    expect(getNotificationDetailsSection).toHaveLength(2);
    // check that the image with the alt kingsley achumie is in the document 
    const getNotificationImage = screen.getByRole("img",{name:/kingsley achumie/i});
    expect(getNotificationImage).toBeInTheDocument();
    // check that the notification message is displayed 
    const getNotificationMessage = screen.getByText(/i looked at your pix/i);
    expect(getNotificationMessage).toBeInTheDocument();
    // check that the date of the  notification message is displayed 
    const getNotificationDate = screen.getByText(/2 months ago/i);
    expect(getNotificationDate).toBeInTheDocument();
     
  });


  

  

  

  // check that on hover of the information icon that a description displays on the document
  // check that when hover on notification icon button that a tooltic displays and when hover is out the tooltip is out 
 
  // check that an image is displayed in the notification component for each notification details
  it(" check that an image is displayed in the notification component for each notification details", async () => {
    const {container} = render(<Notification />)
    const user = userEvent;
    const selectNotificationButton = screen.getByRole("hoverbutton");

    // hover on button to display dropdown area
    await user.hover(selectNotificationButton);
    //check that the noticication popup has a title with word notification displayed in the document
    const noticicationHeader = screen.getByRole("heading",{name:/Notification/i});
    expect(noticicationHeader).toBeInTheDocument();
    // check the availability of infomation icon in the document
    const noticicationInfoIcon = screen.getByRole("infoicon");
    expect(noticicationInfoIcon).toBeInTheDocument();

    
    
     
  });

  //check that each notification has a details / description

  // check that each notification details has a time or date of publication
});
