import { safariPackages, getSafariBySlug } from "@/data/safaris";

describe("Safari Packages Data & Logic Suite", () => {
  test("should load all registered safari packages", () => {
    expect(safariPackages).toBeDefined();
    expect(safariPackages.length).toBeGreaterThanOrEqual(7);
  });

  test("each safari package must have required pricing, timings, and rules", () => {
    safariPackages.forEach((safari) => {
      expect(safari.id).toBeTruthy();
      expect(safari.slug).toBeTruthy();
      expect(safari.parkName).toBeTruthy();
      expect(safari.pricePerVehicle).toBeGreaterThan(0);
      expect(safari.entryFeeIndian).toBeGreaterThanOrEqual(0);
      expect(safari.entryFeeForeign).toBeGreaterThan(0);
      expect(safari.timings.length).toBeGreaterThan(0);
      expect(safari.inclusions.length).toBeGreaterThan(0);
      expect(safari.rules.length).toBeGreaterThan(0);
    });
  });

  test("Pobitora elephant safari should be properly marked 48 km from Guwahati", () => {
    const pobitora = getSafariBySlug("pobitora-wildlife-sanctuary-elephant-safari");
    expect(pobitora).toBeDefined();
    expect(pobitora?.parkName).toBe("Pobitora Wildlife Sanctuary");
    expect(pobitora?.distanceFromGuwahati).toContain("48 km");
    expect(pobitora?.image).toBe("/images/safaris/pobitora-elephant.jpg");
  });

  test("Kaziranga elephant & gypsy safaris must have authentic local images", () => {
    const kazirangaElephant = getSafariBySlug("kaziranga-national-park-elephant-safari");
    const kazirangaGypsy = getSafariBySlug("kaziranga-national-park-jeep-safari");

    expect(kazirangaElephant).toBeDefined();
    expect(kazirangaElephant?.image).toBe("/images/safaris/kaziranga-elephant.jpg");

    expect(kazirangaGypsy).toBeDefined();
    expect(kazirangaGypsy?.image).toBe("/images/safaris/kaziranga-gypsy.jpg");
  });

  test("returns undefined for non-existent safari slug", () => {
    const result = getSafariBySlug("non-existent-safari-slug-12345");
    expect(result).toBeUndefined();
  });
});
