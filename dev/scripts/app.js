
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
    if(count < strings.length) {
      homeReplace(containerId,strings[count]);
      count++;
    } else {
      count=0;
    }
  };
// 


// svg coffee rotate

// var coffee = document.querySelector(".coffee");
// window.addEventListener("scroll", function() {
//     coffee.style.transform = "rotate("+window.pageYOffset/2+"deg)";
// });