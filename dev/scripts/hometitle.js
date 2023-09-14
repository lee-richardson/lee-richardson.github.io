// "use strict";

// /* replace homepage title */
// function homeReplace(id, content) {
//   var container = document.getElementById(id);
//   container.innerHTML = content; 
// };

// var containerId = "change";
// var strings = ["designing strategically", "lærer dansk", "helping brands grow", "solving problems", "designing for people", "building products"];
// var count = 0;
// var timerId = setInterval(cycle, 2000);
// function cycle() {
//   if (count < strings.length) {
//     homeReplace(containerId, strings[count]);
//     count++;
//   } else {
//     count = 0;
//   }
// };

// //change background colour on hover

// const imgs = document.querySelectorAll('.workImg');
// const bodyel = document.querySelector(".body");
// const menuel = document.querySelector(".menu");

// imgs.forEach(img => {
//   img.addEventListener('mouseover', (event) => {
//     if (event.target.matches('.workimgset1')) {
//       bodyel.style.background = '#E2A9C4';
//       menuel.style.background = '#E2A9C4';
//     } else {
//       (event.target.matches('.workimgset2')) 
//         bodyel.style.background = '#A8CEC8';
//         menuel.style.background = '#A8CEC8';
//     } 
//   },);
// });


// imgs.forEach(img => {
//   img.addEventListener('mouseover', (event) => {
//     if (event.target.matches('.workimgset3')) {
//       bodyel.style.background = '#E4E480';
//       menuel.style.background = '#E4E480';
//     } 
//   },);
// });

// imgs.forEach(img => {
//   img.addEventListener('mouseover', (event) => {
//     if (event.target.matches('.workimgset4')) {
//       bodyel.style.background = '#8DC4E1';
//       menuel.style.background = '#8DC4E1';
//     } 
//   },);
// });

// imgs.forEach(img => {
//   img.addEventListener('mouseover', (event) => {
//     if (event.target.matches('.workimgset5')) {
//       bodyel.style.background = '#EBB29A';
//       menuel.style.background = '#EBB29A';
//     } 
//   },);
// });


// imgs.forEach(img => {
//   img.addEventListener('mouseover', (event) => {
//     if (event.target.matches('.workimgset6')) {
//       bodyel.style.background = '#E0DCC7';
//       menuel.style.background = '#E0DCC7';
//     } 
//   },);
// });

// imgs.forEach(img => {
//   img.addEventListener('mouseout', (event) => {
    
//     if (event.target.matches('.workImg')) {
//       bodyel.style.background = '#FCFBF4';
//       menuel.style.background = '#FCFBF4';
//     }
//   });
// });


// // if (document.body.classList.contains('.aboutpage')) {
// //   document.getElementById('aboutmenu').style.background = '#000';
// //   document.getElementById('aboutmenu').style.color = '#B2CAB7';
// // }