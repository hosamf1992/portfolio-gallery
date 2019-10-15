'use strict'

var gProjs;
var gId;


createProjs();

function createProjs() {
    gProjs = [
        createProj("chess", "Chess", "Chess - Game", "Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid.[1] The game is played by millions of people worldwide. Chess is believed to be derived from the Indian game chaturanga sometime before the 7th century.", "img/screenshot/chess.png", ['company1', 'test1'],"https://hosamf1992.github.io/chess/"),

        createProj("collect-balls", "Collect-balls", "Collect_balls - Game", "desc desc", "img/screenshot/ball-board.png", ['company2', 'test2'],"https://hosamf1992.github.io/ballboard/"),

        createProj("mine-sweeper", "Mine-sweeper", "Mine_sweeper - Game", " Minesweeper is a single-player puzzle computer game. The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.", "img/screenshot/mine-sweeper.png", ['company3', 'test3'],"https://hosamf1992.github.io/minesweeper/"),


        createProj("touch-nums", "Touch the nums", "Touch_Nums - Game", "Touch the Numbers is a simple game for training your reflexes and peripheral vision."
            , "img/screenshot/touch-nums.png", ['company4', 'test4'],"https://hosamf1992.github.io/touchnum/"),
        createProj("guess-who", "Guess-who", "Guess_who - Game", "desc desc", "img/screenshot/guess-me.png", ['company5', 'test5'],"https://hosamf1992.github.io/guess-me/"),
        createProj("pacman", "Pacman", "title", "Pacman - Game", "img/screenshot/pacman.png", ['company6', 'test6'],"https://hosamf1992.github.io/pacman/")

    ];
}


function createProj(id, name, title, desc, imgUrl, labels,link) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: imgUrl,
        publishedAt: Date.now(),
        labels: labels,
        projLink:link

    }
}

function getProj() {
    return gProjs;
}

function findProjById(id) {
    var index = gProjs.findIndex(function (proj) {

        return proj.id === id
    });
    return index;
}