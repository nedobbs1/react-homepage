import { calculatePace } from "./calculate-pace";

describe("calculatePace", () => {
  it("should calculate the pace for one hour", () => {
    const pace = calculatePace(3600, 10);

    expect(pace.hours).toBe(0);
    expect(pace.minutes).toBe(6);
    expect(pace.seconds).toBe(0);
  });

  it("should calculate the pace for 2 hours at 3 miles", () => {
    const pace = calculatePace(3600 * 2, 3);

    expect(pace.hours).toBe(0);
    expect(pace.minutes).toBe(40);
    expect(pace.seconds).toBe(0);
  });

  it("should calculate the pace for 7:37:12 hours at 23.2 miles", () => {
    const hours = 3600 * 7;
    const mins = 60 * 37;
    const secs = 12;
    const pace = calculatePace(hours + mins + secs, 23.2);

    expect(pace.hours).toBe(0);
    expect(pace.minutes).toBe(19);
    expect(pace.seconds).toBe(42);
  });
});
