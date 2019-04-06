/**
    Trevor Kamin
    Chapter 5 
    Homework 1
*/

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;
var autoAdvance = setInterval(rightAdvance, 5000);

/*add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
   var filename;
   var currentFig;
   if (figureCount === 4) {
   for (var i = 1; i < 4; i++) {
      filename = "concertAds/concert" + photoOrder[i] + ".gif";
      currentFig = document.getElementsByTagName("img")[i - 1];
      currentFig.src = filename;
         }
   // end for statement for var i
}
//end if figureCount
else {
   for (var i = 0; i < 5; i++) {
      filename = "concertAds/concert" + photoOrder[i] + ".gif";
      currentFig = document.getElementsByTagName("img")[i];
      currentFig.src = filename;
      
   }
   //end for statement for var i
}
//end else statement
}
//end function populateFigures

/* stop automatic image switching and call rightAdvance() function */
function rightArrow() {
   clearInterval(autoAdvance);
   rightAdvance();
}
//end function rightArrow

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   clearInterval(autoAdvance);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

/* open center figure in separate window */
function zoomFig() {
   var propertyWidth = 960;
   var propertyHeight = 600;
   var winLeft = ((screen.width - propertyWidth) / 2);
   var winTop = ((screen.height - propertyHeight) / 2);
   var winOptions = "width=960,height=600";
   winOptions += ",left=" + winLeft;
   winOptions += ",top=" + winTop;
   var zoomWindow = window.open("zoom.html", "zoomwin", winOptions);
   zoomWindow.focus();
}

/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener("click", leftArrow, false);
   }
   //end if leftArrow.addEventListener
   else if (leftarrow.attachEvent) {
      leftArrow.attachEvent("onclick", leftArrow);
   }
   //end else if leftarrow.attachEvent
   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener("click", rightArrow, false);
   }
   // if rightarrow.addEventListener
   else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onclick", rightArrow);
   }
   //end else if rightarrow.attachEvent

   var showAllButton = document.querySelector("#fiveButton p");
   if (showAllButton.addEventListener) {
      showAllButton.addEventListener("click", previewFive, false);
   }
   //end if showAllButton
   else if (showAllButton.attachEvent) {
      showAllButton.attachEvent("onclick", previewFive);
   }
   //end else if showAllButton
}
//end function createEventListeners 

/* switch to 5-image layout */
function previewFive() {
   //create figure and img elements for fifth image
   var articleEl = document.getElementsByTagName("article")[0];
   var lastFigure = document.createElement("figure");
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";

   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";
   lastFigure.appendChild(lastImage);
   //articleEl.appendChild(lastFigure);
   articleEl.insertBefore(lastFigure, document.getElementById("rightarrow"));
   //clone figure element for fifth image and edit to be first image
   var firstFigure = lastFigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   //articleEl.appendChild(firstFigure);
   articleEl.insertBefore(firstFigure, document.getElementById("fig2"));
   figureCount = 5;
   //add appropriate src values to two new img elements
   document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
   document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";

   //change button to hide extra images
   var numberButton = document.querySelector("#fiveButton p");
   numberButton.innerHTML = "Show fewer images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewFive, false);
      numberButton.addEventListener("click", previewThree, false);
   }
   //end if statement numberButton.addEventListener
   else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewFive);
      numberButton.attachEvent("onclick", previewThree);
   }
   //end else if numberButton.attachEvent
}
//end function previewFive

/* switch to 3-image layout */
function previewThree() {
   var articleEl = document.getElementsByTagName("article")[0];
   var numberButton = document.querySelector("#fiveButton p");
   articleEl.removeChild(document.getElementById("fig1"));
   articleEl.removeChild(document.getElementById("fig5"));
   figureCount = 3;
   numberButton.innerHTML = "Show more images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewThree, false);
      numberButton.addEventListener("click", previewFive, false);
   }
   //end if statement numberButton.addEventListener
   else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewThree);
      numberButton.attachEvent("onclick", previewFive);
   }
   //end else if numberButton.attachEvent
}
//end function previewThree

   var mainFig = document.getElementsByTagName("img")[1];
   if (mainFig.addEventListener) {
      mainFig.addEventListener("click", zoomFig, false);
   }
   //end if mainFig.addEventListener

   else if (mainFig.attachEvent) {
      mainFig.attachEvent("onclick", zoomFig);
   }
   //end else if mainFig.attachEvent




/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}