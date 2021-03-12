import { calculateTime } from "./calculate-time";

describe("calculateTime", () => {
  it("should calculate the time elapsed for 10 miles at 00:06:00 pace", () => {
    const time = calculateTime(360, 10);

    expect(time.hours).toBe(1);
    expect(time.minutes).toBe(0);
    expect(time.seconds).toBe(0);
  });
  it("should calculate the time elapsed for 1 mile at 00:05:30 pace", () => {
    const time = calculateTime(330, 1);

    expect(time.hours).toBe(0);
    expect(time.minutes).toBe(5);
    expect(time.seconds).toBe(30);
  });

  it("should calculate the time elapsed for 0.5 miles at 00:03:35 pace", () => {
    const time = calculateTime(215, 0.5);

    expect(time.hours).toBe(0);
    expect(time.minutes).toBe(1);
    expect(time.seconds).toBe(47);
  });

  it("should calculate the time elapsed for 69.69 miles at 01:31:54 pace", () => {
    const time = calculateTime(5514, 69.69);

    expect(time.hours).toBe(106);
    expect(time.minutes).toBe(44);
    expect(time.seconds).toBe(30);
  });
});
