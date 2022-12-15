import Trending from "../components/Trending-folder/trending";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Btn from "../components/button-folder/Button";
import { GoPencil } from 'react-icons/go';


describe("trending topic list", () => {
    it('should render a button', () => {
        const onClickButton = jest.fn();
        render(<Btn
            customstyle=""
            variant={"longNormal"}
            value={"Edit profile"}
            cta={onClickButton}
            icon={<div>< GoPencil /></div>}
        />)

        const Button = screen.getByRole('button', { name: /Edit profile/i })
        fireEvent.click(Button);
        expect(onClickButton).toHaveBeenCalled();
        expect(Button).toHaveTextContent("Edit profile");
    });
});