import { attractions } from "@/data/attractions";

describe("Top Attractions Suite", () => {
  test("should load rich collection of Northeast attractions", () => {
    expect(attractions.length).toBeGreaterThanOrEqual(10);
  });

  test("each attraction should have valid rating, timings, and authentic image path", () => {
    attractions.forEach((attr) => {
      expect(attr.id).toBeTruthy();
      expect(attr.name).toBeTruthy();
      expect(attr.stateId).toBeTruthy();
      expect(attr.rating).toBeGreaterThanOrEqual(4.0);
      expect(attr.bestTime).toBeTruthy();
      expect(attr.image).toBeTruthy();
    });
  });

  test("Kaziranga should be categorized as wildlife with authentic photo", () => {
    const kzk = attractions.find((a) => a.id === "kaziranga");
    expect(kzk).toBeDefined();
    expect(kzk?.type).toBe("wildlife");
    expect(kzk?.image).toBe("/images/attractions/kaziranga.jpg");
    expect(kzk?.rating).toBe(4.9);
  });

  test("Kamakhya Temple should be categorized as temple atop Nilachal hill", () => {
    const kamakhya = attractions.find((a) => a.id === "kamakhya");
    expect(kamakhya).toBeDefined();
    expect(kamakhya?.type).toBe("temple");
    expect(kamakhya?.image).toBe("/images/attractions/kamakhya.jpg");
  });
});
