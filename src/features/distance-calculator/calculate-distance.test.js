import { calculateDistance } from "./calculate-distance";

describe("calculateDistance", () => {
  it("should calculate the distance traveled for 01:00:00 elapsed time at a 00:06:00 pace", () => {
    const distance = calculateDistance(3600, 360);

    expect(distance).toBe("10.0");
  });

  it("should calculate the distance traveled for 00:20:00 elapsed time at a 00:06:27 pace", () => {
    const distance = calculateDistance(1200, 387);

    expect(distance).toBe("3.1");
  });

  it("should calculate the distance traveled for 00:00:31 elapsed time at a 01:01:01 pace", () => {
    const distance = calculateDistance(31, 3661);

    expect(distance).toBe("0.0");
  });

  it("should calculate the distance traveled for 23:47:53 elapsed time at a 00:12:24 pace", () => {
    const distance = calculateDistance(85673, 744);

    expect(distance).toBe("115.2");
  });
});
