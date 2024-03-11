
var zone_tracker = 'true';
var y = 'test';

var timer; // Timer variable
var isRunning = false; // Indicates if the sprinkler is running
var duration = 0; // Duration of the sprinkler in seconds
var startButtonCounter = 0;
var startButtonCounter2 = 0;
var startButtonCounter3 = 0;
var startButtonCounter4 = 0;

function animal1() {
  if (isRunning) {
      clearInterval(timer);
      isRunning = false;
      document.getElementById("zonebuttontext1").innerHTML = "Feed";
      var currentTime = new Date().toLocaleString();
      document.getElementById("lastActivated").innerHTML = currentTime;
      saveLastActivated(currentTime); // Save the last activated time
      document.getElementById("timerDisplay").innerHTML = "";
  } else {
        if (startButtonCounter >= 3) {
        alert("You are overfeeding the animal! Please stop.");
      } else {
      var timeStamps = document.getElementById("timeStamps");
      duration = parseInt(timeStamps.options[timeStamps.selectedIndex].value) * 60;
      document.getElementById("zonebuttontext1").innerHTML = "Stop";
      document.getElementById("lastActivated").innerHTML = "Currently Feeding"; // Clear last activated time
      isRunning = true;
      displayFeedMessage1("Do not overfeed the animal!");
      startButtonCounter++;
      }
  }
}

// Function to save the last activated time to local storage
function saveLastActivated(time) {
  localStorage.setItem("lastActivatedTime", time);
}

// Function to load the last activated time from local storage
function loadLastActivated() {
  var lastActivatedTime = localStorage.getItem("lastActivatedTime");
  if (lastActivatedTime) {
      document.getElementById("lastActivated").innerHTML =  lastActivatedTime;
  }
}


//for animal 2: 
function animal2() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("zonebuttontext2").innerHTML = "Feed";
        var currentTime = new Date().toLocaleString();
        document.getElementById("lastActivated2").innerHTML = currentTime;
        saveLastActivated2(currentTime);
        document.getElementById("timerDisplay2").innerHTML = "";
    } else {
        if (startButtonCounter2 >= 3) {
            alert("You are overfeeding the animal! Please stop.");
          } else {
        var timeStamps = document.getElementById("timeStamps2");
        duration = parseInt(timeStamps.options[timeStamps.selectedIndex].value) * 60;
        document.getElementById("zonebuttontext2").innerHTML = "Stop";
        document.getElementById("lastActivated2").innerHTML = "Currently Feeding";
        isRunning = true;
        displayFeedMessage2("Do not overfeed the animal!");
        startButtonCounter2++;
          }
    }
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

//for animal3:
function animal3() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("zonebuttontext3").innerHTML = "Feed";
        var currentTime = new Date().toLocaleString();
        document.getElementById("lastActivated3").innerHTML = currentTime;
        saveLastActivated3(currentTime);
        document.getElementById("timerDisplay3").innerHTML = "";
    } else {
        if (startButtonCounter3 >= 3) {
            alert("You are overfeeding the animal! Please stop.");
          } else {
        var timeStamps = document.getElementById("timeStamps3");
        duration = parseInt(timeStamps.options[timeStamps.selectedIndex].value) * 60;
        document.getElementById("zonebuttontext3").innerHTML = "Stop";
        document.getElementById("lastActivated3").innerHTML = "Currently Feeding";
        isRunning = true;
        displayFeedMessage3("Do not overfeed the animal!"); 
        startButtonCounter3++;
    }
    }
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
  

//for animal4: 
function animal4() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("zonebuttontext4").innerHTML = "Feed";
        var currentTime = new Date().toLocaleString();
        document.getElementById("lastActivated4").innerHTML = currentTime;
        saveLastActivated4(currentTime);
        document.getElementById("timerDisplay4").innerHTML = "";
    } else {
        if (startButtonCounter4 >= 3) {
            alert("You are overfeeding the animal! Please stop.");
          } else {
        var timeStamps = document.getElementById("timeStamps4");
        duration = parseInt(timeStamps.options[timeStamps.selectedIndex].value) * 60;
        document.getElementById("zonebuttontext4").innerHTML = "Stop";
        document.getElementById("lastActivated4").innerHTML = "Currently Feeding";
        isRunning = true;
        displayFeedMessage4("Do not overfeed the animal!");
        startButtonCounter4++;
    }
    }
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
  

function displayFeedMessage1(message) {
    var feedMessage = document.getElementById("feedMessage1");
    feedMessage.innerHTML = message;
    feedMessage.style.display = "block";

    setTimeout(function () {
        feedMessage.style.display = "none";
    }, 5000);
}

function displayFeedMessage2(message) {
    var feedMessage = document.getElementById("feedMessage2");
    feedMessage.innerHTML = message;
    feedMessage.style.display = "block";

    setTimeout(function () {
        feedMessage.style.display = "none";
    }, 5000);
}


function displayFeedMessage3(message) {
    var feedMessage = document.getElementById("feedMessage3");
    feedMessage.innerHTML = message;
    feedMessage.style.display = "block";

    // Hide the message after 5 seconds
    setTimeout(function () {
        feedMessage.style.display = "none";
    }, 5000);
}

function displayFeedMessage4(message) {
    var feedMessage = document.getElementById("feedMessage4");
    feedMessage.innerHTML = message;
    feedMessage.style.display = "none"; // Initially hide the message

    // Show the message after 7 seconds
    var showTimeout = setTimeout(function () {
        feedMessage.style.display = "block";
    }, 7000); // 7 seconds

    // Add an event listener to the "Stop" button to hide the message
    document.getElementById("zonebuttontext4").addEventListener("click", function () {
        clearTimeout(showTimeout); // Clear the timeout to prevent the message from showing
        feedMessage.style.display = "none"; // Hide the message
    });
}

function displayFeedMessage3(message) {
    var feedMessage = document.getElementById("feedMessage3");
    feedMessage.innerHTML = message;
    feedMessage.style.display = "none"; // Initially hide the message

    // Show the message after 7 seconds
    var showTimeout = setTimeout(function () {
        feedMessage.style.display = "block";
    }, 7000); // 7 seconds

    // Add an event listener to the "Stop" button to hide the message
    document.getElementById("zonebuttontext3").addEventListener("click", function () {
        clearTimeout(showTimeout); // Clear the timeout to prevent the message from showing
        feedMessage.style.display = "none"; // Hide the message
    });
}

function displayFeedMessage2(message) {
    var feedMessage = document.getElementById("feedMessage2");
    feedMessage.innerHTML = message;
    feedMessage.style.display = "none"; // Initially hide the message

    // Show the message after 7 seconds
    var showTimeout = setTimeout(function () {
        feedMessage.style.display = "block";
    }, 7000); // 7 seconds

    // Add an event listener to the "Stop" button to hide the message
    document.getElementById("zonebuttontext2").addEventListener("click", function () {
        clearTimeout(showTimeout); // Clear the timeout to prevent the message from showing
        feedMessage.style.display = "none"; // Hide the message
    });
}

function displayFeedMessage1(message) {
    var feedMessage = document.getElementById("feedMessage1");
    feedMessage.innerHTML = message;
    feedMessage.style.display = "none"; // Initially hide the message

    // Show the message after 7 seconds
    var showTimeout = setTimeout(function () {
        feedMessage.style.display = "block";
    }, 7000); // 7 seconds

    // Add an event listener to the "Stop" button to hide the message
    document.getElementById("zonebuttontext1").addEventListener("click", function () {
        clearTimeout(showTimeout); // Clear the timeout to prevent the message from showing
        feedMessage.style.display = "none"; // Hide the message
    });
}