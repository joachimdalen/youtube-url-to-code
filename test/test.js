"use strict";

var expect = require("chai").expect;
var codeParser = require("../index");

describe("#youtubeUrlToCode", function() {
  it("should return null if url is missing code", function() {
    var result = codeParser("https://www.youtube.com/watch");
    expect(result).to.be.undefined;
  });
  it("should get code for regular url", function() {
    var result = codeParser("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    expect(result).to.equal("dQw4w9WgXcQ");
  });
  it("should get code for playlist url", function() {
    var result = codeParser(
      "https://www.youtube.com/watch?v=yNXDxUQ4c9U&index=6&list=PL3oW2tjiIxvQ98ZTLhBh5soCbE1mC3uAT"
    );
    expect(result).to.equal("yNXDxUQ4c9U");
  });
});
