var open = 0;
var taskTileList = [];
var i=0;
var half = 0;
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
        menu.style.transform = "translateY(0)";
        btn.style.backgroundColor = "rgb(180, 179, 179)";
        btn.style.borderTop = "4px inset rgb(54, 54, 54)";
        btn.style.borderLeft = "4px inset rgb(54,54, 54)";
        btn.style.borderRight = "3px inset  rgb(226, 226, 226)";
        btn.style.borderBottom = "3px inset rgb(226, 226, 226)";
        open = 1;
    }
    else {
        menu.style.visibility = "hidden"
        menu.style.transform = "translateY(100vh)";
        btn.style.backgroundColor = "rgb(204, 204, 204)";
        btn.style.borderTop = "2px solid white";
        btn.style.borderLeft = "2px solid white";
        btn.style.borderRight = "3px outset  rgb(27, 27, 27)";
        btn.style.borderBottom = "3px outset rgb(27, 27, 27)";
        open = 0;
    }
    console.log(document.getElementsByTagName("footer").z-indexedDB);
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


function getTaskIndex(s){
    for(var a=0;a<taskTileList.length;a++)
        if(taskTileList[a] == s)
            return a;
}

function appName(s){
    var appNames  = {
        'rBin': 'Recycle Bin',
        'myComp': 'My Computer',
        'docs': 'My Document',
        'browser': 'Internet Explorer'
    };
    return appNames[s];
}

function app(f, id){
    var win = document.getElementById(id);
    var taskList = document.getElementById("taskList");
    // var count = document.getElementById('taskList');
    if(f == 1){
        win.style.visibility = "visible";
        var li = document.createElement("li");
        li.id = id+"TaskTile";
        li.classList.add("taskTile");
        li.innerHTML = `<img src='icons/${id}.png' style = 'width: 22px'/> ${appName(id)}`;
        taskList.appendChild(li);
        taskTileList[i++] = id;
        console.log(taskTileList);
    }
    else{
        win.style.visibility = "hidden";
        taskList.removeChild(taskList.childNodes[getTaskIndex(id)]);
        taskTileList.splice(taskTileList.indexOf(id));
        i-=1;
        console.log(taskTileList);
    }
}

function mscBtn(id, f){
    var el = document.getElementById(id);
    var parElement = document.getElementById(el.parentElement.parentElement.parentElement.parentElement.id);
    if( f == 1){
        parElement.style.visibility = "hidden";
    }
    if( f==2){
        if( half == 0){
        parElement.style.width = "600px"
        parElement.style.height = "400px";
        half = 1;
        }
        else{
        parElement.style.width = "calc( 100% - 8px)";
        parElement.style.height = "calc( 100vh - 47.1px )";
        half = 0;
        }
    }
}