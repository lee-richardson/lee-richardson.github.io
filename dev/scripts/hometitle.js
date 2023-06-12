"use strict";

/* replace homepage title */
function homeReplace(id, content) {
  var container = document.getElementById(id);
  container.innerHTML = content; 
};

var containerId = "change";
var strings = ["designing strategically", "lærer dansk", "helping brands grow", "solving problems", "designing for people", "building products"];
var count = 0;
var timerId = setInterval(cycle, 2500);
function cycle() {
  if (count < strings.length) {
    homeReplace(containerId, strings[count]);
    count++;
  } else {
    count = 0;
  }
};

//change background colour on hover

const imgs = document.querySelectorAll('.workImg');
const bodyel = document.querySelector(".body");
const menu = document.querySelector(".menuContainer");

imgs.forEach(img => {
  img.addEventListener('mouseover', (event) => {
    if (event.target.matches('.workimgset1')) {
      bodyel.style.background = '#D4DAE4';
      menu.style.background = '#D4DAE4';
    } else {
      (event.target.matches('.workimgset2')) 
        bodyel.style.background = '#E5DADA';
        menu.style.background = '#E5DADA';
    } 
  },);
});


imgs.forEach(img => {
  img.addEventListener('mouseover', (event) => {
    if (event.target.matches('.workimgset3')) {
      bodyel.style.background = '#CCC9D4';
      menu.style.background = '#CCC9D4';
    } 
  },);
});

imgs.forEach(img => {
  img.addEventListener('mouseover', (event) => {
    if (event.target.matches('.workimgset4')) {
      bodyel.style.background = '#BDCCD1';
      menu.style.background = '#BDCCD1';
    } 
  },);
});

imgs.forEach(img => {
  img.addEventListener('mouseout', (event) => {
    if (event.target.matches('.workImg')) {
      bodyel.style.background = '#ffffff';
      menu.style.background = '#ffffff';
    }
  });
});
