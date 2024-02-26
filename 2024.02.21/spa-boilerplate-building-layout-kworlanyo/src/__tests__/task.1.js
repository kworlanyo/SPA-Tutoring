import React from 'react';
import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import App from '../App';

// This file is a historical artifact from Create React App and needs refactoring

afterEach(cleanup);

describe("App", () => {
    it("Top Level `App` component should render", () => {
        render(<App />);
        const app = screen.getAllByText(/bob/i)[0];
        expect(app).toBeInTheDocument();
    });
});
describe("Image", () => {
    it("Card should contain Bob Dylan image", () => {
        const { container } = render(<App />);
        const image = container.querySelector("img");
        expect(image).toBeInTheDocument();
        expect(image.getAttribute("src")).toMatch(/bob/i);
    });
});
describe("Link", () => {
    it("Card should have Wikipedia link", () => {
        const { container } = render(<App />);
        const anchor = container.querySelector("a");
        expect(anchor).toBeInTheDocument();
        expect(anchor.getAttribute("href")).toMatch(/wikipedia/i);
    });
});
describe("Title", () => {
    it("Card should have 'Bob Dylan' as title", () => {
        const { container } = render(<App />);
        const title = container.querySelector("h1,h2,h3,h4,h5");
        expect(title).toBeInTheDocument();
        expect(title.textContent).toMatch(/dylan/i);
    });
});