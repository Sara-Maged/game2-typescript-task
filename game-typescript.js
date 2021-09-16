//import $ = require("jquery");
var level = 5, winner = 50;
function startGame() {
    randomGenerator();
    insertionExtra();
}
;
function randomGenerator() {
    for (var i = 0; i < level; i++) {
        var Left = Math.floor(Math.random() * 80) + 10;
        var Top = Math.floor(Math.random() * 75) + 15;
        insertionR(Left, Top, i);
        insertionL(Left, Top, i);
    }
}
;
function insertionL(left, top, iteratorL) {
    //document.getElementById("#L").append("<img src = 'smiley4.png' width='50' height='50' id=" + iteratorL + ">");
    $("#L").append("<img src = 'smiley4.png' width='50' height='50' id=" + iteratorL + ">");
    //document.getElementById("#" + iteratorL).setAttribute("position", "absolute");
    //document.getElementById("#" + iteratorL).setAttribute("top", top + "%");
    //document.getElementById("#" + iteratorL).setAttribute("left", left + "%");
    return $("#" + iteratorL).css({
        "position": "absolute",
        "top": top + "%",
        "left": left + "%"
    });
}
;
function insertionR(left, top, iteratorR) {
    //document.getElementById("#R").append("<img src = 'smiley4.png' width='50' height='50' id=" + iteratorR + ">");
    $("#R").append("<img src = 'smiley4.png' width='50' height='50' id=" + iteratorR + ">");
    //document.getElementById("#" + iteratorR).setAttribute("position", "absolute");
    //document.getElementById("#" + iteratorR).setAttribute("top", top + "%");
    //document.getElementById("#" + iteratorR).setAttribute("left", left + "%");
    return $("#" + iteratorR).css({
        "position": "absolute",
        "top": top + "%",
        "left": left + "%"
    });
}
;
function insertionExtra() {
    //document.getElementById("#R").append("<img src = 'smiley4.png' width='50' height='50' onclick='next()' id=Extra-img>");
    $("#R").append("<img src = 'smiley4.png' width='50' height='50' onclick='next()' id=Extra-img>");
    //document.getElementById("#").setAttribute("position", "absolute");
    //document.getElementById("#").setAttribute("top", Math.floor(Math.random() * 75) + 15 + "%",);
    //document.getElementById("#").setAttribute("left", Math.floor(Math.random() * 80) + 10 + "%");
    var Left = Math.floor(Math.random() * 80) + 10;
    var Top = Math.floor(Math.random() * 75) + 15;
    return $("#Extra-img").css({
        "position": "absolute",
        "top": Top + "%",
        "left": Left + "%"
    });
}
;
function next() {
    if (level < winner) {
        level += 5;
        //document.querySelector("img").remove();
        $("img").remove();
        startGame();
    }
    else
        alert("YOU WIN");
}
