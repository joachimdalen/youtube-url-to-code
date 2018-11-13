"use strict";
const parse = require("url").parse;
/**
 * Extracts the video code from a YouTube url.
 * @param {string} url
 * @return {string}
 */
module.exports = function(url) {
  var parsed = parse(url, true);
  if (parsed !== parsed.query.v) {
    return parsed.query.v;
  }
  return null;
};
