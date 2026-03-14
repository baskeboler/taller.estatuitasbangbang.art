import { fireEvent, render, screen } from "@testing-library/react";
import TallerPorcelanaFriaWeb from "./taller_porcelana_fria_web.jsx";

function mockMatchMedia(matches) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

describe("TallerPorcelanaFriaWeb theme toggle", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("dark");
    mockMatchMedia(false);
  });

  afterEach(() => {
    document.documentElement.classList.remove("dark");
  });

  it("uses system preference when there is no saved theme", () => {
    mockMatchMedia(true);

    render(<TallerPorcelanaFriaWeb />);

    expect(document.documentElement).toHaveClass("dark");
    expect(window.localStorage.getItem("taller-theme")).toBe("dark");
    expect(
      screen.getByRole("button", { name: "Cambiar a modo claro" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("toggles theme and persists the selected value", () => {
    render(<TallerPorcelanaFriaWeb />);

    const toggle = screen.getByRole("button", {
      name: "Cambiar a modo oscuro",
    });

    fireEvent.click(toggle);

    expect(document.documentElement).toHaveClass("dark");
    expect(window.localStorage.getItem("taller-theme")).toBe("dark");
    expect(toggle).toHaveAttribute("aria-pressed", "true");
    expect(toggle).toHaveAccessibleName("Cambiar a modo claro");
  });

  it("prefers the saved theme over system preference", () => {
    window.localStorage.setItem("taller-theme", "light");
    mockMatchMedia(true);

    render(<TallerPorcelanaFriaWeb />);

    expect(document.documentElement).not.toHaveClass("dark");
    expect(
      screen.getByRole("button", { name: "Cambiar a modo oscuro" }),
    ).toHaveAttribute("aria-pressed", "false");
  });
});
