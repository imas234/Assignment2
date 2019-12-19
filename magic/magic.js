function clearAll() {
    document.getElementById("magic").value = null;
}

function capitalize() {
    var resU = document.getElementById("magic").value.toUpperCase();
    var resL = document.getElementById("magic").value.toLowerCase();
    if (document.getElementById("caps").value == "OFF") {
        document.getElementById("caps").value = "ON";
        document.getElementById("magic").value = resU;
    }

    else if (document.getElementById("caps").value == "ON") {
        document.getElementById("caps").value = "OFF";
        document.getElementById("magic").value = resL;
    }

}

var allLinesArr;
function sortLines() {
    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split('\n');
    allLinesArr.sort();
    document.getElementById("magic").value = allLinesArr.join("\r\n");

}

function reverseLines() {
    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split('\n');
    for (let j = 0; j < allLinesArr.length; j++) {
        let reverse = "";
        for(let i = allLinesArr[j].length - 1; i >= 0; i--){
            reverse += allLinesArr[j].charAt(i);
        }
        allLinesArr[j] = reverse;
    }
    document.getElementById("magic").value = allLinesArr.join("\r\n");

}

function stripBlank() {
    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split("\n");
    var arr = allLinesArr.filter(Boolean);
    array = arr.map(el => el.trim());
    document.getElementById("magic").value = array.join("\r\n");

}

function addLineNumbers() {

    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split('\n');
    for (var j = 0; j < allLinesArr.length; j++) {
        allLinesArr[j] = j + 1 + ". " + allLinesArr[j];
    }
    document.getElementById("magic").value = allLinesArr.join("\r\n");

}

function shuffle() {
    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split('\n');
    for (let i = allLinesArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [allLinesArr[i], allLinesArr[j]] = [allLinesArr[j], allLinesArr[i]];
    }
    document.getElementById("magic").value = allLinesArr.join("\r\n");
}