window.onload = initAll;

function initAll() {
    if (document.getElementById) {
        document.getElementById("reload").onclick = resetBoard();
        resetBoard();
    }
}

function getNewRandomNumber() {
    return Math.floor(Math.random() * 75) + 1;
}

function resetBoard() {
    for (var index = 0; index < 25; index++) {
        var cell = "cell" + index;
        resetCellColor(cell);
        setCellOnMouseDown(cell, toggleColor);
    }
}

function toggleColor(evt) {
    if(evt) {
        var cell = evt.target;
    }
    else {
        var cell = window.event.srcElement;
    }
    if (cell.className == "") {
        cell.className = "pickedBG";
    }
    else {
        cell.className = "";
    }
}

function resetCellColor(cell) {
    document.getElementById(cell).className = "";
}

function setCellOnMouseDown(cell, funct) {
    document.getElementById(cell).onmousedown = funct;
}