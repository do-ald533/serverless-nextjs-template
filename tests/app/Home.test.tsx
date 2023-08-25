import "@testing-library/jest-dom";
import { describe, expect, it, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Home from "../../src/app/page";

describe("HelloWorld component", () => {
	afterEach(() => {
		cleanup();
	});
	it("renders the correct text", () => {
		render(<Home />);
		const headline = screen.getByText(/Hello world/);
		console.log(headline);
		expect(headline).toBeInTheDocument();
	});
});
