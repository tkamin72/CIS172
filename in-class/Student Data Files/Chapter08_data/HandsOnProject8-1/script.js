/*
    JavaScript 6th Edition
    Chapter 8
    Hands-on Project 8-1

    Author: Trevor Kamin
    Date:  3-26-2019 

      Filename: script.js
*/

"use strict";

var newAccountArray = [];
var newAccountSubmission;

function createID()
{
	var fname = document.getElementById("fnameinput");
	var lname = document.getElementById("lnameinput");
	var zip = document.getElementById("zipinput");
	var account = accountidbox;
	var fields = document.querySelectorAll("input");
	var acctid;
	var firstInit;
	var lastInit;

	if (fname.value.length > 0 && lname.value.length > 0 && zip.value.length > 0)
	{
		firstInit = fname.value.charAt(0).toUpperCase();
		lastInit = lname.value.charAt(0).toUpperCase();
		acctid = firstInit + lastInit + zip.value;
		account.value = acctid;
		newAccountArray = [];

		for (var i = 0; i < fields.length - 1; i++)
		{
			newAccountArray.push(fields[i].value);
		}
	}
}

function createString()
{
	newAccountSubmission = JSON.stringigy(newAccountObject);
}

function createEventListeners()
{
	var fname = document.getElementById("fnameinput");
	var lname = document.getElementById("lnameinput");
	var zip = document.getElementById("zipinput");
	if (fname.addEventListener)
	{
		fname.addEventListener("change", createID, false);
		lname.addEventListener("change", createID, false);
		zip.addEventListener("change", createID, false);
	}
	else if (fname.attachEvent)
	{
		fname.attachEvent("onchange", createID);
		lname.attachEvent("onchange", createID);
		zip.attachEvent("onchange", createID);
	}
}

if (window.addEventListener)
{
	window.addEventListener("load", createEventListeners, false);
}
else if (window.attachEvent)
{
	window.attachEvent("onload", createEventListeners);
}
