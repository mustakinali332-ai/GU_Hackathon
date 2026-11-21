import { states } from "@/data/states";

describe("Northeast States Data Suite", () => {
  test("should include all 8 Northeast sister states", () => {
    expect(states).toHaveLength(8);
    const stateNames = states.map((s) => s.name);
    expect(stateNames).toContain("Assam");
    expect(stateNames).toContain("Arunachal Pradesh");
    expect(stateNames).toContain("Manipur");
    expect(stateNames).toContain("Meghalaya");
    expect(stateNames).toContain("Mizoram");
    expect(stateNames).toContain("Nagaland");
    expect(stateNames).toContain("Sikkim");
    expect(stateNames).toContain("Tripura");
  });

  test("each state must have authentic local images and capital details", () => {
    states.forEach((state) => {
      expect(state.id).toBeTruthy();
      expect(state.slug).toBeTruthy();
      expect(state.capital).toBeTruthy();
      expect(state.image).toMatch(/^\/images\/states\//);
      expect(state.highlights.length).toBeGreaterThanOrEqual(3);
      expect(state.avgBudgetPerDay).toBeGreaterThan(0);
    });
  });

  test("Assam must have Dispur as capital and valid languages", () => {
    const assam = states.find((s) => s.slug === "assam");
    expect(assam).toBeDefined();
    expect(assam?.capital).toBe("Dispur");
    expect(assam?.language).toContain("Assamese");
  });
});
