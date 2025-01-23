import { expect } from "vitest";
import { it } from "vitest";
import { describe } from "vitest";

describe("something truthy and falsy", () => {
  it("to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
