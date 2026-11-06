import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

describe("AnimatedThemeToggler Component", () => {
  it("renders theme toggle button with accessible label", () => {
    render(<AnimatedThemeToggler aria-label="Toggle tema" />);
    const button = screen.getByRole("button", { name: /toggle tema/i });
    expect(button).toBeDefined();
  });

  it("handles click and toggles theme safely when document.startViewTransition is undefined", () => {
    render(<AnimatedThemeToggler aria-label="Toggle tema" />);
    const button = screen.getByRole("button", { name: /toggle tema/i });

    // Click triggers internal applyTheme fallback
    fireEvent.click(button);
    expect(button).toBeDefined();
  });

  it("calls onThemeChange when controlled", () => {
    let changedTheme = "";
    render(
      <AnimatedThemeToggler
        theme="dark"
        onThemeChange={(newTheme) => {
          changedTheme = newTheme;
        }}
        aria-label="Toggle tema"
      />
    );
    const button = screen.getByRole("button", { name: /toggle tema/i });
    fireEvent.click(button);
    expect(changedTheme).toBe("light");
  });
});
