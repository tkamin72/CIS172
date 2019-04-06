"use strict";
 
var list = []; // step 4 p611
 
function generateList()  // step 5 p611
{
	var listItems = document.getElementsByTagName("li"); // was missing period after document, testing again at 8:08pm
	for (var i = listItems.length - 1; i >= 0; i--)
	{
		document.getElementsByTagName("ol")[0].removeChild(listItems[i]); // unexpected identifier is the error I get from the console 8:09pm. Missing period, again. Testing, again. 8:10pm
	}
	for (var i = 0; i < list.length; i++)
	{
		var newItem = "<span class='first'>first</span>" + list[i]; // newItem appears to be spelled the same way with proper camel case 8:15pm
		var newListItem = document.createElement("li"); // newListItem appears to be spelled the same way with proper camel case as well 8:16pm
		newListItem.innerHTML = newItem;
		document.getElementsByTagName("ol")[0].appendChild(newListItem);
		var firstButtons = document.querySelectorAll(".first"); // all appearances of firstButtons appear to be spelled properly with camel case 8:17pm
		var lastFirstButton = firstButtons[firstButtons.length -1];  // all seems good with lastFirstButton 8:18pm
		if (lastFirstButton.addEventListener)
		{
			lastFirstButton.addEventListener("click", moveToTop, false); // all seems good with moveToTop 8:19pm
		}
		else if (lastFirstButton.attachEvent)
		{
			lastFirstButton.attachEvent("onclick", moveToTop);
		}
	}
}

function addItem() // step 6 p612
{ // all three spots with addItem seem right 8:20pm
	var newItem = document.getElementById("newItem");
	list.push(newItem.value);
	newItem.focus();
	newItem.value = "";
	generateList();
}

function moveToTop(evt) // step 7 p613
{
	if (evt === undefined)
	{ // get caller element in IE8
		evt = window.event;
	}
	var callerElement = evt.target || evt.srcElement;
	var listItems = document.getElementsByTagName("li"); // all cases of listItems seem to have proper spelling and camel case 8:07pm
	var parentItem = callerElement.parentNode;
	for (var i = 0; i < list.length; i++)
	{
		if (parentItem.innerHTML.search(list[i]) !== -1)
		{
			var itemToMove = list.splice(i, 1);
			list.unshift(itemToMove);
		}
	}
	generateList();
}

function createEventListener() // step 8 p613
{
	var addButton = document.getElementById("button");
	if (addButton.addEventListener)
	{
		addButton.addEventListener("click", addItem, false);
	}
	else if (addButton.attachEvent)
	{
		addButton.attachEvent("onclick", addItem);
	}
}

if (window.addEventListener)
{
	window.addEventListener("load", createEventListener, false);
}
else if (window.attachEvent)
{
	window.attachEvent("onload", createEventListener); // no semicolon to end this statement. Oops 8:23pm. Testing, again.
}

