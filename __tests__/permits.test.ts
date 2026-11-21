import { permitsData } from "@/data/permits";

describe("Inner Line Permit (ILP) System Suite", () => {
  test("should have permit rules for Northeast border states", () => {
    expect(permitsData.length).toBeGreaterThanOrEqual(4);
  });

  test("Arunachal Pradesh, Nagaland, and Mizoram must mandate ILP for Indian citizens", () => {
    const arunachal = permitsData.find((p) => p.stateId === "arunachal-pradesh");
    const nagaland = permitsData.find((p) => p.stateId === "nagaland");
    const mizoram = permitsData.find((p) => p.stateId === "mizoram");

    expect(arunachal?.indianCitizens.required).toBe(true);
    expect(nagaland?.indianCitizens.required).toBe(true);
    expect(mizoram?.indianCitizens.required).toBe(true);

    expect(arunachal?.indianCitizens.officialPortal).toBeTruthy();
  });

  test("each permit record must list entry checkpoints and pro tips", () => {
    permitsData.forEach((permit) => {
      expect(permit.entryCheckpoints.length).toBeGreaterThan(0);
      expect(permit.proTips.length).toBeGreaterThan(0);
    });
  });
});
