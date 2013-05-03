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
	else if(~info.url.indexOf("oitapps/")) redirect = "http://oitapps.auburn.edu/" + info.url.substring(info.url.indexOf("oitapps/") + "oitapps/".length);
	else if(~info.url.indexOf("dev/")) redirect = "http://cwsdev.auburn.edu/" + info.url.substring(info.url.indexOf("dev/") + "dev/".length);
	else if(~info.url.indexOf("cwsdev/")) redirect = "http://cwsdev.auburn.edu/" + info.url.substring(info.url.indexOf("cwsdev/") + "cwsdev/".length);
	else if(~info.url.indexOf("oitappsdev/")) redirect = "http://oitappsdev.auburn.edu/" + info.url.substring(info.url.indexOf("oitappsdev/") + "oitappsdev/".length);
	else if(~info.url.indexOf("test/")) redirect = "http://cwstest.auburn.edu/" + info.url.substring(info.url.indexOf("test/") + "test/".length);
	else if(~info.url.indexOf("cwstest/")) redirect = "http://cwstest.auburn.edu/" + info.url.substring(info.url.indexOf("cwstest/") + "cwstest/".length);
	else if(~info.url.indexOf("oitappstest/")) redirect = "http://oitappstest.auburn.edu/" + info.url.substring(info.url.indexOf("oitappstest/") + "oitappstest/".length);
	else if(~info.url.indexOf("migr/")) redirect = "http://cwsmigr.auburn.edu/" + info.url.substring(info.url.indexOf("migr/") + "migr/".length);
	else if(~info.url.indexOf("cwsmigr/")) redirect = "http://cwsmigr.auburn.edu/" + info.url.substring(info.url.indexOf("cwsmigr/") + "cwsmigr/".length);
	else if(~info.url.indexOf("oitappsmigr/")) redirect = "http://oitappsmigr.auburn.edu/" + info.url.substring(info.url.indexOf("oitappsmigr/") + "oitappsmigr/".length);
	
	/* We should make an ajax request to see if the targeted location actually exists. */
	
    return {redirectUrl: redirect};
  },
  {
    urls: [
	  "http://fp.auburn.edu/*",
      "*://fp/*",
	  "*://cws/*",
	  "*://oitapps/*",
	  "*://dev/*",
	  "*://cwsdev/*",
	  "*://oitappsdev/*",
	  "*://test/*",
	  "*://cwstest/*",
	  "*://oitappstest/*",
	  "*://migr/*",
	  "*://cwsmigr/*",
	  "*://oitappsmigr/*"
    ]
  },
  ["blocking"]);
