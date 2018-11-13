YouTube Url to Code
=========

This library takes a YouTube video url and extracts the video code.

[![Build Status](https://travis-ci.org/joachimdalen/youtube-url-to-code.svg?branch=master)](https://travis-ci.org/joachimdalen/youtube-url-to-code)
## Installation

  `npm install @joachimdalen/youtube-url-to-code`

## Usage

   ```javascript
    var ytCodeParser = require('@joachimdalen/youtube-url-to-code');
    var code = ytCodeParser("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
   ```
  
  
  Output should be `dQw4w9WgXcQ`


## Tests

  `npm test`

## Contributing
 Add unit tests for any new or changed functionality.