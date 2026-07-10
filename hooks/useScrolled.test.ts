import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useScrolled } from "./useScrolled";

describe("useScrolled", () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  it("returns false when at the top of the page", () => {
    const { result } = renderHook(() => useScrolled(64));
    expect(result.current).toBe(false);
  });

  it("returns true once scrolled past the threshold", () => {
    const { result } = renderHook(() => useScrolled(64));
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBe(true);
  });

  it("returns false again after scrolling back above the threshold", () => {
    const { result } = renderHook(() => useScrolled(64));
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });
    act(() => {
      window.scrollY = 0;
      window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBe(false);
  });
});
