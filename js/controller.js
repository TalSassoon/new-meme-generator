var gCanvas;
var gCtx;
var gnextId =0;

function init(){
    drawCanvas()
    drawImgFromlocal()
    drawText()
    renderGallery()
}

function drawCanvas() {
    gCanvas = document.querySelector('#canvas');;
    gCtx = gCanvas.getContext('2d');
}

function drawImgFromlocal() {
    let img = new Image()
    let imgUrl = getImgUrl()

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
    img.src = imgUrl;
}


function drawText() {
    let text =getimgText();
    clearCanvas();
    drawImgFromlocal();
    setTimeout(() => {
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = 'white';
        gCtx.font = `2.5rem impact`;
        gCtx.textBaseline = 'top';
        gCtx.textAlign = 'center';
        gCtx.fillText(text, gCanvas.width / 2, 6);
        gCtx.strokeText(text, gCanvas.width / 2, 6);
    }, 100);
}

 function onWriteText(value) {
     WriteText(value)
     drawText()
 }


 
function renderGallery() {
    let images = getImgs();
    let strHtml = images.map(image=>{
        gnextId++
        return  `<a href="#" onclick="editImage(this)" style="background-image:url(${image.url});" data-idx="${gnextId}"></a>`
    })
    let elGallery = document.querySelector('.gallery');
     elGallery.innerHTML = strHtml.join('');
    }