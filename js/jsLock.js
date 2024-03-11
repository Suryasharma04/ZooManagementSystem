
var y = 'test';
var isUnlocked1 = false; 
var isLocked1 = false; 

var isUnlocked2 = false; 
var isLocked2 = false; 

var isUnlocked3 = false; 
var isLocked3 = false; 

var isUnlockedAll = false;

function change1() {
    var x = document.getElementById("buttontext1").innerHTML;
    if (y == "test") {
        document.getElementById("buttontext1").innerHTML = "Lock";
        y = "test2";
        isUnlocked1 = false;
        displayStatus1("Tiger is IN the cage");
    } else {
        document.getElementById("buttontext1").innerHTML = "Unlock";
        y = "test";
        isUnlocked1 = true;
        displayStatus1("Tiger is OUT of the cage");
    }
    updateUnlockedAll();
}


function change2() {
    var x = document.getElementById("buttontext2").innerHTML;
    if (y == "test") {
        document.getElementById("buttontext2").innerHTML = "Lock";
        y = "test2";
        isUnlocked2 = false;
        displayStatus2("Giraffe is IN the cage");
    } else {
        document.getElementById("buttontext2").innerHTML = "Unlock";
        y = "test";
        isUnlocked2 = true;
        displayStatus2("Giraffe is OUT of the cage");
    }
    updateUnlockedAll();
}


function change3() {
    var x = document.getElementById("buttontext3").innerHTML;
    if (y == "test") {
        document.getElementById("buttontext3").innerHTML = "Lock";
        y = "test2";
        isUnlocked3 = false;
        displayStatus3("Zebra is IN the cage");
    } 
    else {
        document.getElementById("buttontext3").innerHTML = "Unlock";
        displayStatus3("Zebra is OUT of the cage");
        y = "test";
        isUnlocked3 = true;
    }
    updateUnlockedAll();
}

function change4() {
    var x = document.getElementById("buttontext4");
    var a = document.getElementById("buttontext3");
    var b = document.getElementById("buttontext2");
    var c = document.getElementById("buttontext1");

    if (y == "test") {
        x.innerHTML = "Lock";
        a.innerHTML = "Lock";
        b.innerHTML = "Lock";
        c.innerHTML = "Lock";
        y = "test2";
        displayStatus1("Tiger is IN the cage");
        displayStatus2("Giraffe is IN the cage");
        displayStatus3("Zebra is IN the cage");
        displayStatus4("All Animals are IN the cage");
    }

    else {
        x.innerHTML = "Unlock";
        a.innerHTML = "Unlock";
        b.innerHTML = "Unlock";
        c.innerHTML = "Unlock";
        y = "test";
        displayStatus1("Tiger is OUT of the cage");
        displayStatus2("Giraffe is OUT of the cage");
        displayStatus3("Zebra is OUT of the cage");
        displayStatus4("All Animals are OUT of the cage");
    }
}
    
function displayStatus1(status) {
    var statusElement = document.getElementById("status1");
    if (statusElement) {
        statusElement.innerHTML = status;
    }
}

function displayStatus2(status) {
    var statusElement = document.getElementById("status2");
    if (statusElement) {
        statusElement.innerHTML = status;
    }
}

function displayStatus3(status) {
    var statusElement = document.getElementById("status3");
    if (statusElement) {
        statusElement.innerHTML = status;
    }
}

function displayStatus4(status) {
    var statusElement = document.getElementById("status4");
    if (statusElement) {
        statusElement.innerHTML = status;
    }
}

//np
function updateUnlockedAll() {
    isUnlockedAll = isUnlocked1 && isUnlocked2 && isUnlocked3;
    // If all animals are unlocked, update the status for change4() button
    if (isUnlockedAll) {
      document.getElementById("buttontext4").innerHTML = "Unlock";
      displayStatus4("All Animals are OUT of the cage");
    }
    else if(isUnlocked1 || isUnlocked2 || isUnlocked3){
         displayStatus4(" ");
         document.getElementById("buttontext4").innerHTML = "Lock";
    }
     else {
      document.getElementById("buttontext4").innerHTML = "Lock";
     // displayStatus4("All Animals are IN the cage");
    }
  }