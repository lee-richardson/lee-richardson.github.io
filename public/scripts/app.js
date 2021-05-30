(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/* replace homepage title */
function homeReplace(id, content) {
  var container = document.getElementById(id);
  container.innerHTML = content;
};

var containerId = "change";
var strings = ["a product designer.", "a front-end developer.", "a former journalist.", "designing in Figma.", "a fan of dogs.", "an Android user.", "an expat 🇬🇧🇨🇦 in CPH."];
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

// var coffee = document.querySelector(".coffee");
// window.addEventListener("scroll", function() {
//     coffee.style.transform = "rotate("+window.pageYOffset/2+"deg)";
// });

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBO0FBQ0UsU0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCLE9BQXpCLEVBQWtDO0FBQ2hDLE1BQUksWUFBWSxTQUFTLGNBQVQsQ0FBd0IsRUFBeEIsQ0FBaEI7QUFDQSxZQUFVLFNBQVYsR0FBc0IsT0FBdEI7QUFDRDs7QUFFRCxJQUFJLGNBQWMsUUFBbEI7QUFDQSxJQUFJLFVBQVUsQ0FBQyxxQkFBRCxFQUF3Qix3QkFBeEIsRUFBa0Qsc0JBQWxELEVBQTBFLHFCQUExRSxFQUFpRyxnQkFBakcsRUFBbUgsa0JBQW5ILEVBQXVJLDJCQUF2SSxDQUFkO0FBQ0EsSUFBSSxRQUFRLENBQVo7QUFDQSxJQUFJLFVBQVUsWUFBWSxLQUFaLEVBQW1CLElBQW5CLENBQWQ7QUFDQSxTQUFTLEtBQVQsR0FBaUI7QUFDZixNQUFHLFFBQVEsUUFBUSxNQUFuQixFQUEyQjtBQUN6QixnQkFBWSxXQUFaLEVBQXdCLFFBQVEsS0FBUixDQUF4QjtBQUNBO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsWUFBTSxDQUFOO0FBQ0Q7QUFDRjtBQUNIOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuLyogcmVwbGFjZSBob21lcGFnZSB0aXRsZSAqL1xuICBmdW5jdGlvbiBob21lUmVwbGFjZShpZCwgY29udGVudCkge1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gIH07XG5cbiAgdmFyIGNvbnRhaW5lcklkID0gXCJjaGFuZ2VcIjtcbiAgdmFyIHN0cmluZ3MgPSBbXCJhIHByb2R1Y3QgZGVzaWduZXIuXCIsIFwiYSBmcm9udC1lbmQgZGV2ZWxvcGVyLlwiLCBcImEgZm9ybWVyIGpvdXJuYWxpc3QuXCIsIFwiZGVzaWduaW5nIGluIEZpZ21hLlwiLCBcImEgZmFuIG9mIGRvZ3MuXCIsIFwiYW4gQW5kcm9pZCB1c2VyLlwiLCBcImFuIGV4cGF0IPCfh6zwn4en8J+HqPCfh6YgaW4gQ1BILlwiXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgdmFyIHRpbWVySWQgPSBzZXRJbnRlcnZhbChjeWNsZSwgMTcwMCk7XG4gIGZ1bmN0aW9uIGN5Y2xlKCkge1xuICAgIGlmKGNvdW50IDwgc3RyaW5ncy5sZW5ndGgpIHtcbiAgICAgIGhvbWVSZXBsYWNlKGNvbnRhaW5lcklkLHN0cmluZ3NbY291bnRdKTtcbiAgICAgIGNvdW50Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50PTA7XG4gICAgfVxuICB9O1xuLy8gXG5cblxuLy8gc3ZnIGNvZmZlZSByb3RhdGVcblxuLy8gdmFyIGNvZmZlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29mZmVlXCIpO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgY29mZmVlLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiK3dpbmRvdy5wYWdlWU9mZnNldC8yK1wiZGVnKVwiO1xuLy8gfSk7Il19
