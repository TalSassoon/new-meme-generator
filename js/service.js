'use strict';
var gImgs = [
    { id: 1, url: `./meme-imgs/1.jpg`, keywords: ['happy'] },
    { id: 2, url: `./meme-imgs/2.jpg`, keywords: ['happy'] },
    { id: 3, url: `./meme-imgs/3.jpg`, keywords: ['happy'] },
    { id: 4, url: `./meme-imgs/4.jpg`, keywords: ['happy'] },
    { id: 5, url: `./meme-imgs/5.jpg`, keywords: ['happy'] }];

var gMeme = {
    selectedImgId: 5, selectedLineIdx: 0,

    lines: [{
        txt: 'I never eat Falafel',
        size: 2.5,
        align: 'left',
        color: 'red',
        pos: { x:225 ,  y: 6 }
    }]

}


function getImgUrl() {
    return `meme-imgs/${gMeme.selectedImgId}.jpg`
}
function getimgText() {
    return gMeme.lines[0].txt;
}
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gCanvas.width / 2, gCanvas.height / 2);
}

function WriteText(text) {
    gMeme.lines[0].txt = text;
}
function getImgs() {
    return gImgs
}
function getFontSize() {
    return gMeme.lines[0].size;
}
function increaseFont() {
    gMeme.lines[0].size += 0.5;
}
function decreaseFont() {
    gMeme.lines[0].size -= 0.5;
}
function getPos() {
    return gMeme.lines[0].pos;
}
function rowUp() {
    gMeme.lines[0].pos.y -= 5;
  
}
function rowDown() {
    gMeme.lines[0].pos.y += 5;
}