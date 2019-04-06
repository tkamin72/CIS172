"use strict";

function populateInfo() // step 6 p666
{
	if(location.search)
	{
		var greeting = location.search;
		greeting = greeting.replace("+", " "); // console error showed that greeting was spelled gretting. Fixed 2:07pm 12/3
		greeting = greeting.substring(greeting.lastIndexOf("=") + 1);
		document.getElementById("greetingtext").innerHTML = decodeURIComponent(greeting);
	}
}

if(window.addEventListener)
{
	window.addEventListener("load", populateInfo, false);
}
else if(window.attachEvent)
{
	window.attachEvent("onload", populateInfo);
}

// initially didn't work because I forgot to change the index to call preview.html and not preview.htm