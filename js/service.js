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
    },
    {
        txt: 'I never eat Falafel',
        size: 2.5,
        align: 'left',
        color: 'red',
        pos: { x:225 ,  y: 350 }
    }]


}


function getImgUrl() {
    return `meme-imgs/${gMeme.selectedImgId}.jpg`
}
function getimgText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt;
}
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gCanvas.width / 2, gCanvas.height / 2);
}

function WriteText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
    drawText();
}
function getImgs() {
    return gImgs
}
function getFontSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size;
}
function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 0.5;
}
function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 0.5;
}
function getPos() {
    return gMeme.lines[gMeme.selectedLineIdx].pos;
}
function rowUp() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y -= 15;
  
}
function rowDown() {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += 15;
}
function EditImage(elimage) {
    gMeme.selectedImgId =parseInt(elimage.dataset.idx)

    
}
function switchLines() {
    // gMeme.selectedLineIdx = (gMeme.selectedLineIdx >= gMeme.lines.length)?    0 : gMeme.selectedLineIdx++ ;
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {

        gMeme.selectedLineIdx=0;
    }
    
}
function getgMeme() {
    return gMeme;
}