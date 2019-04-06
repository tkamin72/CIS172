"use strict";

function processCookie() // step 6 p668
{
	document.cookie = "username" + document.getElementById("usernameinput").value;
}

function populateInfo() // step 7 p668
{
	if(document.cookie)
	{
		var uname = document.cookie;
		uname = uname.substring(uname.lastIndexOf("=") + 1);
		document.getElementById("usernameinput").value = uname;
	}
}

function handleSubmit(evt) // step 8 p668
{
	if(evt.preventDefault)
	{
		evt.preventDefault();
	}
	else
	{
		evt.returnValue = false;
	}
	processCookie();
	document.getElementsByTagName("form")[0].submit();
}

function createEventListener() // step 9 p668-9
{
	var loginForm = document.getElementsByTagName("form")[0];
	if(loginForm.addEventListener)
	{
		loginForm.addEventListener("submit", handleSubmit, false);
	}
	else if(loginForm.attachEvent)
	{
		loginForm.attachEvent("onsubmit", handleSubmit);
	}
}

function setUpPage()
{
	populateInfo();
	createEventListener();
}

if(window.addEventListener)
{
	window.addEventListener("load", setUpPage, false);
}
else if(window.attachEvent)
{
	window.attachEvent("onload", setUpPage);
}