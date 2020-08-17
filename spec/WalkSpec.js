describe("Walk", function () {
  var walk;

  beforeEach(function () {
    walk = new Walk();
  });

  it("should return false when give array length is less than 10", function () {
    expect(walk.isTenMinuteWalk(['w', 's'])).toBeFalse();
  });

  it("should return false when array length is 10, but 'n' numbers is not match 's', and 'e' numbers not matching 'w' ", function () {
    expect(walk.isTenMinuteWalk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n'])).toBeFalse();
  })
});
