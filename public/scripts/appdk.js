(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/* replace homepage title */
function homeReplace(id, content) {
  var container = document.getElementById(id);
  container.innerHTML = content;
};

var containerId = "change";
var strings = ["er en produktdesigner.", "er en front-end-udvikler.", "er tidligere journalist.", "arbejder i Figma.", "er udpræget hundemenneske.", "sværger til Android.", "er en expat 🇬🇧🇨🇦 bosat i København."];
var count = 0;
var timerId = setInterval(cycle, 1700);
function cycle() {
  if (count < strings.length) {
    homeReplace(containerId, strings[count]);
    count++;
  } else {
    count = 0;
  }
};
// 


// svg coffee rotate

var coffee = document.querySelector(".coffee");
window.addEventListener("scroll", function () {
  coffee.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBO0FBQ0UsU0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCLE9BQXpCLEVBQWtDO0FBQ2hDLE1BQUksWUFBWSxTQUFTLGNBQVQsQ0FBd0IsRUFBeEIsQ0FBaEI7QUFDQSxZQUFVLFNBQVYsR0FBc0IsT0FBdEI7QUFDRDs7QUFFRCxJQUFJLGNBQWMsUUFBbEI7QUFDQSxJQUFJLFVBQVUsQ0FBRSxzQkFBRixFQUEwQixFQUExQixFQUE4QixvQkFBOUIsRUFBb0QsYUFBcEQsQ0FBZDtBQUNBLElBQUksUUFBUSxDQUFaO0FBQ0EsSUFBSSxVQUFVLFlBQVksS0FBWixFQUFtQixJQUFuQixDQUFkO0FBQ0EsU0FBUyxLQUFULEdBQWlCO0FBQ2YsTUFBRyxRQUFRLFFBQVEsTUFBbkIsRUFBMkI7QUFDekIsZ0JBQVksV0FBWixFQUF3QixRQUFRLEtBQVIsQ0FBeEI7QUFDQTtBQUNELEdBSEQsTUFHTztBQUNMLFlBQU0sQ0FBTjtBQUNEO0FBQ0Y7QUFDSDs7O0FBR0E7O0FBRUEsSUFBSSxTQUFTLFNBQVMsYUFBVCxDQUF1QixTQUF2QixDQUFiO0FBQ0EsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXO0FBQ3pDLFNBQU8sS0FBUCxDQUFhLFNBQWIsR0FBeUIsWUFBVSxPQUFPLFdBQVAsR0FBbUIsQ0FBN0IsR0FBK0IsTUFBeEQ7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG4vKiByZXBsYWNlIGhvbWVwYWdlIHRpdGxlICovXG4gIGZ1bmN0aW9uIGhvbWVSZXBsYWNlKGlkLCBjb250ZW50KSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gY29udGVudDtcbiAgfTtcblxuICB2YXIgY29udGFpbmVySWQgPSBcImNoYW5nZVwiO1xuICB2YXIgc3RyaW5ncyA9IFsgXCJmcm9udC1lbmQgZGV2ZWxvcGVyLlwiLCBcIlwiLCBcImZvcm1lciBqb3VybmFsaXN0LlwiLCBcImRvZyBwZXJzb24uXCJdO1xuICB2YXIgY291bnQgPSAwO1xuICB2YXIgdGltZXJJZCA9IHNldEludGVydmFsKGN5Y2xlLCAxNzAwKTtcbiAgZnVuY3Rpb24gY3ljbGUoKSB7XG4gICAgaWYoY291bnQgPCBzdHJpbmdzLmxlbmd0aCkge1xuICAgICAgaG9tZVJlcGxhY2UoY29udGFpbmVySWQsc3RyaW5nc1tjb3VudF0pO1xuICAgICAgY291bnQrKztcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQ9MDtcbiAgICB9XG4gIH07XG4vLyBcblxuXG4vLyBzdmcgY29mZmVlIHJvdGF0ZVxuXG52YXIgY29mZmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2ZmZWVcIik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcbiAgICBjb2ZmZWUuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoXCIrd2luZG93LnBhZ2VZT2Zmc2V0LzIrXCJkZWcpXCI7XG59KTsiXX0=
