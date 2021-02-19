var open = 0;

function closeStart() {
    var menu = document.getElementById("startMenu");
    var btn = document.getElementById("start");
    menu.style.visibility = "hidden"
    btn.style.backgroundColor = "rgb(204, 204, 204)";
    btn.style.borderTop = "2px solid white";
    btn.style.borderLeft = "2px solid white";
    btn.style.borderRight = "3px outset  rgb(27, 27, 27)";
    btn.style.borderBottom = "3px outset rgb(27, 27, 27)";
    open = 0;
}

function startOpen() {
    var menu = document.getElementById("startMenu");
    var btn = document.getElementById("start");
    if (open == 0) {
        menu.style.visibility = "visible";
        btn.style.backgroundColor = "rgb(180, 179, 179)";
        btn.style.borderTop = "4px inset rgb(54, 54, 54)";
        btn.style.borderLeft = "4px inset rgb(54,54, 54)";
        btn.style.borderRight = "3px inset  rgb(226, 226, 226)";
        btn.style.borderBottom = "3px inset rgb(226, 226, 226)";
        open = 1;
    }
    else {
        menu.style.visibility = "hidden"
        btn.style.backgroundColor = "rgb(204, 204, 204)";
        btn.style.borderTop = "2px solid white";
        btn.style.borderLeft = "2px solid white";
        btn.style.borderRight = "3px outset  rgb(27, 27, 27)";
        btn.style.borderBottom = "3px outset rgb(27, 27, 27)";
        open = 0;
    }
}

function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    hour = updateTime(hour);
    min = updateTime(min);
    document.getElementById("clock").innerText = hour + ":" + min; /* adding time to the div */
    var t = setTimeout(function () { currentTime() }, 1000); /* setting timer */
}
function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
