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
    clearCanvas();
    let img = new Image()
    let imgUrl = getImgUrl()

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
    img.src = imgUrl;
}


function drawText() {
    clearCanvas();
    drawImgFromlocal();
    
    // let text =getimgText();
    // let size = getFontSize();
    // let pos = getPos();
    let meme = getgMeme()
    meme.lines.forEach(line=>{

    
    setTimeout(() => {
        gCtx.lineWidth = '2';
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = 'white';
        gCtx.font = `${line.size}rem impact`;
        gCtx.textBaseline = 'top';
        gCtx.textAlign = 'center';
        gCtx.fillText(line.txt, line.pos.x, line.pos.y);
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y);
    }, 100);
})}

 function onWriteText(value) {
     WriteText(value);
     
 }


 
function renderGallery() {
    let images = getImgs();
    let strHtml = images.map(image=>{
        gnextId++
        return  `<a href="#" onclick="onEditImage(this)" style="background-image:url(${image.url});" data-idx="${gnextId}"></a>`
    })
    let elGallery = document.querySelector('.gallery');
     elGallery.innerHTML = strHtml.join('');
    }
    function onIncreaseFont(){
        increaseFont()
        drawText()
    }
    function onDecreaseFont(){
        decreaseFont()
        drawText()
    }
    function onRowUp() {
        rowUp()
        drawText()

    }
    function onRowDown() {
        rowDown()
        drawText()

    }
    function onEditImage(elimage) {
        EditImage(elimage)
        drawImgFromlocal()
    }
    function onSwitchLine(){
        switchLines()
        console.log(gMeme.selectedLineIdx);
    }