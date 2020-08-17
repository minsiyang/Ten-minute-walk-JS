describe("Walk", function () {
  var walk;

  beforeEach(function () {
    walk = new Walk();
  });

  it("should return false when give array length is less than 10", function () {
    expect(walk.isTenMinuteWalk(['w', 's'])).toBeFalse();
  });

  it("should return false when array length is 10, but 'n' numbers is not equal to 's' numbers, and 'e' numbers not matching 'w' ", function () {
    expect(walk.isTenMinuteWalk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n'])).toBeFalse();
  })

  it("should return false when array length is 10, but 'w' numbers is not equal to 'e' numbers", function () {
    expect(walk.isTenMinuteWalk(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w'])).toBeFalse();
  })

  it("should return true when array length is 10, but 'w' numnber is equal to 'e' numbers", function () {
    expect(walk.isTenMinuteWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toBeTruthy();
  })
});
