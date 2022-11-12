

"use strict";

/* replace homepage title */
function homeReplace(id, content) {
  var container = document.getElementById(id);
  container.innerHTML = content;
};

var containerId = "change";
var strings = ["a Product designer", "🇬🇧🇨🇦", "designing in Figma", "a former journalist", "a fan of dogs"];
var count = 0;
var timerId = setInterval(cycle, 1200);
function cycle() {
  if (count < strings.length) {
    homeReplace(containerId, strings[count]);
    count++;
  } else {
    count = 0;
  }
};

var backgroundDefault = "#fff";
var background1 = '#fed876';


