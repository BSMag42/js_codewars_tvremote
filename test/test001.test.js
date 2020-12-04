const {
  tvremote
} = require("../src/remote");

describe("tv remote returns 36 for word 'codewars'", () => {
    test("returns number of clicks", () => {
      expect(tvremote("codewars")).toBe(36);
    });
});

describe("individual letter movements", () => {
  test("e to w is 12" , () => {
    expect(tvremote("ew")).toBe(12);
  });

  test("c to w is 4", () => {
    expect(tvremote("cw")).toBe(8);
  });

});

describe("words from code wars letter movements", () => {
    test("does" , () => {
      expect(tvremote("does")).toBe(16);
    });

    test("does" , () => {
      expect(tvremote("your")).toBe(23);
    });    
    
    test("does" , () => {
      expect(tvremote("solution")).toBe(33);
    });    
    
    test("does" , () => {
      expect(tvremote("work")).toBe(20);
    });    
    
    test("does" , () => {
      expect(tvremote("for")).toBe(12);
    });    
    
    test("does" , () => {
      expect(tvremote("these")).toBe(27);
    });    
    
    test("does" , () => {
      expect(tvremote("words")).toBe(25);
    });

});
