import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import App from "./App";

describe("App", () => {
  describe("Smoketest", () => {
    test("The App Renders", () => {
      render(<App />);
      const headline = screen.getByText(/Music Theory Practice/i);
      expect(headline).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    test("Initial state", () => {
      render(<App />);
      const accidentalsCount = screen.getByText(/Total Accidentals/i);
      expect(accidentalsCount).toBeinDocument();
    });
  });
});
