
/* replace homepage title */
  function homeReplace(id, content) {
    var container = document.getElementById(id);
    container.innerHTML = content;
  };

  var containerId = "change";
  var strings = ["a Product designer", "lære dansk 🧠", "designing in Figma", "a UX writer", "a fan of dogs"];
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
