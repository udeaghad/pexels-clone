
import Trending from "../components/Trending-folder/trending";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("trending topic list", () => {
    it("renders the trending topic list", () => {
        const menuList = [
            {
                title: "Discorver Photos,",
                cta: "/"
            },
            {
                title: "Popular Searches,",
                cta: "/"
            },

            {
                title: "Leaderboard,",
                cta: "/"
            },

            {
                title: "Challenges,",
                cta: "/"
            },
            {
                title: "Free Videos,",
                cta: "/"
            },
            {
                title: "Pexel Blog,",
                cta: "/"
            }

        ];
        render(<Trending TrendingTags={menuList} Trendings={"Trending:"}
            more="/" />);
        // check if all components are rendered


        expect(screen.getByTestId("trending-topics")).toHaveTextContent("Discorver Photos");
        expect(screen.getByTestId("trending-topics")).toHaveTextContent("Popular Searches");
        expect(screen.getByTestId("trending-topics")).toHaveTextContent("Leaderboard");
        expect(screen.getByTestId("trending-topics")).toHaveTextContent("Challenges");
        expect(screen.getByTestId("trending-topics")).toHaveTextContent("Free Videos");
        expect(screen.getByTestId("trending-topics")).toHaveTextContent("Pexel Blog");



    });
});





describe("trending tag list", () => {
    it("renders a trending tag list", () => {
        const menuList = [
            {
                title: "Discorver Photos,",
                cta: "/"
            },
            {
                title: "Popular Searches,",
                cta: "/"
            },

            {
                title: "Leaderboard,",
                cta: "/"
            },

            {
                title: "Challenges,",
                cta: "/"
            },
            {
                title: "Free Videos,",
                cta: "/"
            },
            {
                title: "Pexel Blog,",
                cta: "/"
            }

        ];
        render(<Trending TrendingTags={menuList} Trendings={"Trending:"}
            more="/" />);
        // check if all components are rendered


        expect(screen.getByTestId("trending-topics")).toBeInTheDocument();
    });
});