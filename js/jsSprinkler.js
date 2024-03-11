
var zone_tracker = 'true';
var y = 'test';

var timer; 
var isRunning = false; 
var duration = 0; 

//for ZONE 1: 
function startTimer() {
    var display = document.getElementById("timerDisplay");
    var seconds = duration;

    function updateTimer() {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        display.innerHTML = minutes + "m " + remainingSeconds + "s";

        if (seconds === 0) {
            clearInterval(timer);
            isRunning = false;
            document.getElementById("zonebuttontext1").innerHTML = "Start";
            display.innerHTML = "";
            
        } else {
            seconds--;
        }
    }

    updateTimer();
    timer = setInterval(updateTimer, 1000); // Update the timer every second
}

function zoneChange1() {
  if (isRunning) {
      clearInterval(timer);
      isRunning = false;
      document.getElementById("zonebuttontext1").innerHTML = "Start";
      var currentTime = new Date().toLocaleString();
      document.getElementById("lastActivated").innerHTML = currentTime;
      saveLastActivated(currentTime); // Save the last activated time
      document.getElementById("timerDisplay").innerHTML = "";
  } else {
      var timeStamps = document.getElementById("timeStamps");
      duration = parseInt(timeStamps.options[timeStamps.selectedIndex].value) * 60;
      document.getElementById("zonebuttontext1").innerHTML = "Stop";
      document.getElementById("lastActivated").innerHTML = "Currently ON"; // Clear last activated time
      isRunning = true;
      startTimer();
  }

  var image = document.getElementById('sprinkleZone1');
  if (zone_tracker == 'true') {
      image.src = 'images/Zone4.png';
      zone_tracker = 'false';
  } else {
      image.src = 'images/Zone1.png';
      zone_tracker = 'true';
  }
}

// Function to save the last activated time to local storage
function saveLastActivated(time) {
  localStorage.setItem("lastActivatedTime", time);
}

function loadLastActivated() {
  var lastActivatedTime = localStorage.getItem("lastActivatedTime");
  if (lastActivatedTime) {
      document.getElementById("lastActivated").innerHTML =  lastActivatedTime;
  }
}

//for ZONE 2: 
function zoneChange2() {
  if (isRunning) {
      clearInterval(timer);
      isRunning = false;
      document.getElementById("zonebuttontext2").innerHTML = "Start";
      var currentTime = new Date().toLocaleString();
      document.getElementById("lastActivated2").innerHTML = currentTime;
      saveLastActivated2(currentTime);
      document.getElementById("timerDisplay2").innerHTML = "";
  } else {
      var timeStamps = document.getElementById("timeStamps2");
      duration = parseInt(timeStamps.options[timeStamps.selectedIndex].value) * 60;
      document.getElementById("zonebuttontext2").innerHTML = "Stop";
      document.getElementById("lastActivated2").innerHTML = "Currently ON";
      isRunning = true;
      startTimer2();
  }
 
    var image = document.getElementById('sprinkleZone2');
    if (zone_tracker == 'true') {
        image.src = 'images/Zone5.png';
        zone_tracker = 'false';
    } else {
        image.src = 'images/Zone2.png';
        zone_tracker = 'true';
    }
}


function startTimer2() {
  var display = document.getElementById("timerDisplay2");
  var seconds = duration;

  function updateTimer2() {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;

      display.innerHTML = minutes + "m " + remainingSeconds + "s";

      if (seconds === 0) {
          clearInterval(timer);
          isRunning = false;
          document.getElementById("zonebuttontext2").innerHTML = "Start";
          display.innerHTML = "";
      } else {
          seconds--;
      }
  }

  updateTimer2();
  timer = setInterval(updateTimer2, 1000); // Update the timer every second
}

function saveLastActivated2(time) {
  localStorage.setItem("lastActivatedTime2", time);
}

function loadLastActivated2() {
  var lastActivatedTime = localStorage.getItem("lastActivatedTime2");
  if (lastActivatedTime) {
      document.getElementById("lastActivated2").innerHTML =  lastActivatedTime;
  }
}


//for ZONE 3: 
function zoneChange3() {
  if (isRunning) {
      clearInterval(timer);
      isRunning = false;
      document.getElementById("zonebuttontext3").innerHTML = "Start";
      var currentTime = new Date().toLocaleString();
      document.getElementById("lastActivated3").innerHTML = currentTime;
      saveLastActivated3(currentTime);
      document.getElementById("timerDisplay3").innerHTML = "";
  } else {
      var timeStamps = document.getElementById("timeStamps3");
      duration = parseInt(timeStamps.options[timeStamps.selectedIndex].value) * 60;
      document.getElementById("zonebuttontext3").innerHTML = "Stop";
      document.getElementById("lastActivated3").innerHTML = "Currently ON";
      isRunning = true;
      startTimer3();
  }
 
  var image = document.getElementById('sprinkleZone3');
  if (zone_tracker == 'true') {
      image.src = 'images/Zone6.png';
      zone_tracker = 'false';
  } else {
      image.src = 'images/Zone3.png';
      zone_tracker = 'true';
  }
}


function startTimer3() {
  var display = document.getElementById("timerDisplay3");
  var seconds = duration;

  function updateTimer3() {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;

      display.innerHTML = minutes + "m " + remainingSeconds + "s";

      if (seconds === 0) {
          clearInterval(timer);
          isRunning = false;
          document.getElementById("zonebuttontext3").innerHTML = "Start";
          display.innerHTML = "";
      } else {
          seconds--;
      }
  }

  updateTimer3();
  timer = setInterval(updateTimer3, 1000); 
}

function saveLastActivated3(time) {
  localStorage.setItem("lastActivatedTime3", time);
}

function loadLastActivated3() {
  var lastActivatedTime = localStorage.getItem("lastActivatedTime3");
  if (lastActivatedTime) {
      document.getElementById("lastActivated3").innerHTML =  lastActivatedTime;
  }
}


//for ZONE 4: 
function zoneChange4() {

  if (isRunning) {
      clearInterval(timer);
      isRunning = false;

      document.getElementById("zonebuttontext4").innerHTML = "Start";
      var currentTime4 = new Date().toLocaleString();
      document.getElementById("lastActivated4").innerHTML = currentTime4;
      saveLastActivated4(currentTime4);
      document.getElementById("timerDisplay4").innerHTML = "";

      document.getElementById("zonebuttontext3").innerHTML = "Start";
      var currentTime3 = new Date().toLocaleString();
      document.getElementById("lastActivated3").innerHTML = currentTime3;
      saveLastActivated3(currentTime3);
      document.getElementById("timerDisplay3").innerHTML = "";

      document.getElementById("zonebuttontext2").innerHTML = "Start";
      var currentTime2 = new Date().toLocaleString();
      document.getElementById("lastActivated2").innerHTML = currentTime2;
      saveLastActivated2(currentTime2);
      document.getElementById("timerDisplay2").innerHTML = "";

      document.getElementById("zonebuttontext1").innerHTML = "Start";
      var currentTime = new Date().toLocaleString();
      document.getElementById("lastActivated").innerHTML = currentTime;
      saveLastActivated(currentTime);
      document.getElementById("timerDisplay").innerHTML = "";

      document.getElementById("timerDisplay4").style.display = "none";

      // Hide timers for other zones
      document.getElementById("timerDisplay3").style.display = "none";
      document.getElementById("timerDisplay2").style.display = "none";
      document.getElementById("timerDisplay").style.display = "none";


  } else {

    document.getElementById("timerDisplay4").style.display = "block";
    document.getElementById("timerDisplay3").style.display = "block";
    document.getElementById("timerDisplay2").style.display = "block";
    document.getElementById("timerDisplay").style.display = "block";


    var timeStamps1 = document.getElementById("timeStamps");
    duration = parseInt(timeStamps1.options[timeStamps1.selectedIndex].value) * 60;
    document.getElementById("zonebuttontext1").innerHTML = "Stop";
    document.getElementById("lastActivated").innerHTML = "Currently ON"; 
    isRunning = true;
    startTimer();

    var timeStamps2 = document.getElementById("timeStamps2");
      duration = parseInt(timeStamps2.options[timeStamps2.selectedIndex].value) * 60;
      document.getElementById("zonebuttontext2").innerHTML = "Stop";
      document.getElementById("lastActivated2").innerHTML = "Currently ON";
      // isRunning = true;
      startTimer2();

      var timeStamps3 = document.getElementById("timeStamps3");
      duration = parseInt(timeStamps3.options[timeStamps3.selectedIndex].value) * 60;
      document.getElementById("zonebuttontext3").innerHTML = "Stop";
      document.getElementById("lastActivated3").innerHTML = "Currently ON";
      // isRunning = true;
      startTimer3();

      var timeStamps4 = document.getElementById("timeStamps4");
      duration = parseInt(timeStamps4.options[timeStamps4.selectedIndex].value) * 60;
      document.getElementById("zonebuttontext4").innerHTML = "Stop";
      document.getElementById("lastActivated4").innerHTML = "Currently ON";
      // isRunning = true;
      startTimer4();
    
  }

  var image = document.getElementById('sprinkleZone1');
  var image2 = document.getElementById('sprinkleZone2');
  var image3 = document.getElementById('sprinkleZone3');
  var image4 = document.getElementById('sprinkleZone4');

  if (zone_tracker == 'true') {
      image.src = 'images/Zone4.png';
      image2.src = 'images/Zone5.png';
      image3.src = 'images/Zone6.png';
      image4.src = 'images/AllZoneRed.png'; 
      zone_tracker = 'false';
  } else {
      image.src = 'images/Zone1.png';
      image2.src = 'images/Zone2.png';
      image3.src = 'images/Zone3.png';
      image4.src = 'images/AllZone.png'; 
      zone_tracker = 'true';
  }
}

function startTimer4() {
  var display = document.getElementById("timerDisplay4");
  var seconds = duration;

  function updateTimer4() {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;

      display.innerHTML = minutes + "m " + remainingSeconds + "s";

      if (seconds === 0) {
          clearInterval(timer);
          isRunning = false;
          document.getElementById("zonebuttontext4").innerHTML = "Start";
          display.innerHTML = "";
     
      } else {
          seconds--;
      }
  }

  updateTimer4();
  timer = setInterval(updateTimer4, 1000); // Update the timer every second
}


function saveLastActivated4(time) {
  localStorage.setItem("lastActivatedTime4", time);
}

function loadLastActivated4() {
  var lastActivatedTime = localStorage.getItem("lastActivatedTime4");
  if (lastActivatedTime) {
      document.getElementById("lastActivated4").innerHTML =  lastActivatedTime;
  }
}


loadLastActivated();
loadLastActivated2();
loadLastActivated3();
loadLastActivated4();

