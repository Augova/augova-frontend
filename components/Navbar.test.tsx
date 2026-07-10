import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders all nav links and the Book Demo CTA", () => {
    render(<Navbar />);
    // Each link is rendered twice by design: once in the desktop nav, once in the
    // mobile menu duplicate. jsdom doesn't hide the "hidden" one from the a11y tree.
    expect(screen.getAllByRole("link", { name: "AI Receptionist" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "How It Works" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Industries" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "About Us" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Contact Us" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Book Demo" }).length).toBeGreaterThan(0);
  });

  it("mobile menu is closed by default and opens on hamburger click", () => {
    render(<Navbar />);
    const mobileNav = screen.getByTestId("mobile-menu");
    expect(mobileNav).toHaveClass("hidden");

    fireEvent.click(screen.getByRole("button", { name: /toggle menu/i }));
    expect(mobileNav).not.toHaveClass("hidden");
  });

  it("Book Demo stays visible outside the collapsible mobile menu", () => {
    render(<Navbar />);
    const topBarCta = screen.getAllByRole("link", { name: "Book Demo" })[0];
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu.contains(topBarCta)).toBe(false);
  });
});
