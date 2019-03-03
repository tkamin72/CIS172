/*  JavaScript 6th Edition
*   Chapter 3
*   Chapter Case
*   Tipton Turbines
*   Variables and Functions
*   Author: Trevor Kamin
*   Date: 2-5-19
*   Filename: tt.js
*/

// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var opponents = ["Lightning", "Combines", "Combines", "Combines", "Lightning", "Lightning", "Lightning", "Lightning", "Barn Raisers", "Barn Raisers", "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters", "Sodbusters", "(off)", "River Riders", "River Riders", "River Riders", "Big Dippers", "Big Dippers", "Big Dippers", "(off)", "Sodbusters", "Sodbusters", "Sodbusters", "Combines", "Combines", "Combines", "(off)", "(off)"];
var gameLocation = ["away", "away", "away", "away", "home", "home", "home", "home", "home", "home", "home", "away", "away", "away", "away", "", "away", "away", "away", "away", "away", "away", "", "home", "home", "home", "home", "home", "home", "", ""];
var sec1Head = document.getElementById("section1");
var sec2Head = document.getElementById("section2");
var sec3Head = document.getElementById("section3");
sec1Head.innerHTML = newSections[0]; //"world"
sec2Head.innerHTML = newSections[1]; //"local"
sec3Head.innerHTML = newSections[2]; //"opinion"