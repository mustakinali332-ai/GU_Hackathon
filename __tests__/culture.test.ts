import { cultureHighlights } from "@/data/culture";

describe("Northeast Living Culture Suite", () => {
  test("should include cultural heritage records for all 8 states", () => {
    expect(cultureHighlights).toHaveLength(8);
  });

  test("each culture record should define traditionName, category, and highlights", () => {
    cultureHighlights.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.state).toBeTruthy();
      expect(item.traditionName).toBeTruthy();
      expect(item.category).toBeTruthy();
      expect(item.highlights.length).toBeGreaterThanOrEqual(3);
      expect(item.image).toBeTruthy();
    });
  });

  test("Nagaland should showcase Hornbill Festival", () => {
    const nagaland = cultureHighlights.find((c) => c.stateSlug === "nagaland");
    expect(nagaland).toBeDefined();
    expect(nagaland?.traditionName).toContain("Hornbill Festival");
  });
});
