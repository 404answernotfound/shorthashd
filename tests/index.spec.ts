import { shortHash } from "../src/index";

describe("shortHash", () => {
  it("should generate a short hash of a string", () => {
    const result = shortHash("test");
    expect(result).toBeDefined();
    expect(typeof result).toBe("string");
  });

  it("should throw an error for an invalid base", () => {
    expect(() => shortHash("test", 1)).toThrow(RangeError);
    expect(() => shortHash("test", 37)).toThrow(RangeError);
  });

  it("should return different hashes for different strings", () => {
    const hash1 = shortHash("test1");
    const hash2 = shortHash("test2");
    expect(hash1).not.toEqual(hash2);
  });
});
