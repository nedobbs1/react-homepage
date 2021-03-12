import { convertTimeToSeconds } from "./time-to-seconds-conversion";

describe("convertTimeToSeconds", () => {
  it("should convert elapsed time or pace time to total seconds", () => {
    const time = convertTimeToSeconds(1, 1, 1);

    expect(time).toBe(3661);
  });

  it("should convert 02:45:31 time to total seconds", () => {
    const time = convertTimeToSeconds(2, 45, 31);

    expect(time).toBe(9931);
  });
});
