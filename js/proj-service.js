'use strict'

var gProjs;
var gId;


createProjs();

function createProjs() {
    gProjs = [
        createProj("chess", "Chess", "Chess - Game", "Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid.[1] The game is played by millions of people worldwide. Chess is believed to be derived from the Indian game chaturanga sometime before the 7th century.", "https://i.imgur.com/vl5DEcM.png", ['company1', 'test1'],"https://hosamf1992.github.io/chess/"),

        createProj("collect-balls", "Collect-balls", "Collect_balls - Game", "desc desc", "https://i.imgur.com/3zQQZXE.png", ['company2', 'test2'],"https://hosamf1992.github.io/ballboard/"),

        createProj("mine-sweeper", "Mine-sweeper", "Mine_sweeper - Game", " Minesweeper is a single-player puzzle computer game. The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.", "https://i.imgur.com/B7UsQ0x.png", ['company3', 'test3'],"https://hosamf1992.github.io/minesweeper/"),


        createProj("touch-nums", "Touch the nums", "Touch_Nums - Game", "Touch the Numbers is a simple game for training your reflexes and peripheral vision."
            , "https://i.imgur.com/NaYQjPg.png", ['company4', 'test4'],"https://hosamf1992.github.io/touchnum/"),

        createProj("guess-who", "Guess-who", "Guess_who - Game", "desc desc", "https://i.imgur.com/nJyPtck.png", ['company5', 'test5'],"https://hosamf1992.github.io/guess-me/"),

        createProj("pacman", "Pacman", "title", "Pacman - Game", "https://i.imgur.com/IzvXwBl.png", ['company6', 'test6'],"https://hosamf1992.github.io/pacman/")

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