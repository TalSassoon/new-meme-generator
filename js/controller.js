'use strict';
var gCanvas;
var gCtx;
var gnextId = 0;
let gImg;

function init() {
  drawCanvas();
//   drawImgFromlocal();
  renderGallery();
}

function drawCanvas() {
    gCanvas = document.querySelector("#canvas");
    gCtx = gCanvas.getContext("2d");
}

function drawImgFromlocal() {
    clearCanvas();
    gImg = new Image();
    let imgUrl = getImgUrl();
    gImg.src = imgUrl;
    
    gImg.onload = () => {
        drawImg();
        drawText();
  };
}

function drawImg() {
  gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height); //img,x,y,xend,yend
}

function drawText() {
  let meme = getgMeme();
  meme.lines.forEach((line) => {
    gCtx.lineWidth = "2";
    gCtx.strokeStyle = "black";
    gCtx.fillStyle = line.color;
    gCtx.font = `${line.size}rem impact`;
    gCtx.textBaseline = "top";
    gCtx.textAlign = "center";
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y);
    gCtx.fillText(line.txt, line.pos.x, line.pos.y);
  });
}

function onWriteText(value) {
  WriteText(value);
  renderMeme();
}

function renderGallery() {
  let images = getImgs();
  let strHtml = images.map((image) => {
    gnextId++;
    return `<a href="#" onclick="onEditImage(this)" style="background-image:url(${image.url});" data-idx="${gnextId}"></a>`;
  });
  let elGallery = document.querySelector(".gallery");
  elGallery.innerHTML = strHtml.join("");
}
function onIncreaseFont() {
  increaseFont();
  renderMeme();
}
function onDecreaseFont() {
  decreaseFont();
  renderMeme();
}
function onRowUp() {
  rowUp();
  renderMeme();
}
function onRowDown() {
  rowDown();
  renderMeme();
}
function onEditImage(elimage) {
  EditImage(elimage);
  drawImgFromlocal();
  let elEditor = document.querySelector(".editor");
  elEditor.style.display = "flex";

  let ellgallery = document.querySelector(".gallery-container");
  ellgallery.style.display = "none";
}
function onSwitchLine() {
  switchLines();
  console.log(gMeme.selectedLineIdx);
}
function showGallery() {
  let elEditor = document.querySelector(".editor");
  elEditor.style.display = "none";

  let ellgallery = document.querySelector(".gallery-container");
  ellgallery.style.display = "inline";
}
function renderMeme() {
  drawImg();
  drawText();
}
function onChangeColor() {
  changeColor();
  renderMeme();

}