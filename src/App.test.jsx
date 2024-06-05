import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";

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
      expect(accidentalsCount).toBeInTheDocument();
    });

    test("A user can toggle to challenge mode and back", () => {
      render(<App />);
      const challengeButton = screen.getByText(/Challenge/i);
      expect(challengeButton).toBeInTheDocument();
      fireEvent.click(challengeButton);
      const header = screen.getByText(/Remaining Notes: /i);
      expect(header).toBeInTheDocument();
      const reviewButton = screen.getByText(/Review/i);
      expect(reviewButton).toBeInTheDocument();
      fireEvent.click(reviewButton);
      expect(header).not.toBeInTheDocument();
    });
  });
});
