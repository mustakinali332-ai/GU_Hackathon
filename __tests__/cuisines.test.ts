import { cuisineHighlights } from "@/data/cuisines";

describe("Northeast Ethnic Cuisines Suite", () => {
  test("should showcase authentic culinary traditions for all 8 states", () => {
    expect(cuisineHighlights).toHaveLength(8);
  });

  test("each cuisine card must have authentic platter image and key ingredients", () => {
    cuisineHighlights.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.state).toBeTruthy();
      expect(item.dishName).toBeTruthy();
      expect(item.flavorProfile).toBeTruthy();
      expect(item.image).toMatch(/^\/images\/cuisines\//);
      expect(item.keyIngredients.length).toBeGreaterThanOrEqual(3);
      expect(item.cookingStyle).toBeTruthy();
    });
  });

  test("Assam thali should highlight Masor Tenga and Omita Khar", () => {
    const assamFood = cuisineHighlights.find((c) => c.stateSlug === "assam");
    expect(assamFood).toBeDefined();
    expect(assamFood?.dishName).toContain("Masor Tenga");
    expect(assamFood?.keyIngredients).toContain("Freshwater Rohu Fish");
  });
});
