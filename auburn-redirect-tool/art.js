/* art.js
 * Auburn Redirect Tool (ART)
 * Enables shortlinks. Forces secure fp requests.
 * Copyright © 2013 Jake Harris (javakatdesign@gmail.com) and Clay Miller (clay@smockle.com)
 */

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
	var redirect;

	/* We read the requested URL and redirect to the proper location based on that. */
	if (~info.url.indexOf("http://fp.auburn.edu")) redirect = "https://fp.auburn.edu" + info.url.substring(info.url.indexOf("http://fp.auburn.edu") + "http://fp.auburn.edu".length);
	if(~info.url.indexOf("fp/")) redirect = "https://fp.auburn.edu/" + info.url.substring(info.url.indexOf("fp/") + "fp/".length);
	else if(~info.url.indexOf("cws/")) redirect = "http://cws.auburn.edu/" + info.url.substring(info.url.indexOf("cws/") + "cws/".length);
	else if(~info.url.indexOf("dev/")) redirect = "http://cwsdev.auburn.edu/" + info.url.substring(info.url.indexOf("dev/") + "dev/".length);
	else if(~info.url.indexOf("test/")) redirect = "http://cwstest.auburn.edu/" + info.url.substring(info.url.indexOf("test/") + "test/".length);
	else if(~info.url.indexOf("migr/")) redirect = "http://cwsmigr.auburn.edu/" + info.url.substring(info.url.indexOf("migr/") + "migr/".length);
	
	/* We should make an ajax request to see if the targeted location actually exists. */
	
    return {redirectUrl: redirect};
  },
  {
    urls: [
	  "http://fp.auburn.edu/*",
      "*://fp/*",
	  "*://cws/*",
	  "*://dev/*",
	  "*://test/*",
	  "*://migr/*"
    ]
  },
  ["blocking"]);
