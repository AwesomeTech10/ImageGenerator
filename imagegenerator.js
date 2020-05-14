// Image Creator

function generateImage(height, width, background, textColor, text) {
    var tCtx = document.getElementById('imageCreator').getContext('2d');
    tCtx.canvas.width = width;
    tCtx.canvas.height = height;
    tCtx.fillStyle = background;
    tCtx.fillRect(0, 0, tCtx.canvas.width, tCtx.canvas.height);
    tCtx.fillStyle = textColor;
    tCtx.textAlign = 'center';
    tCtx.font = '32px Arial'
    tCtx.fillText(text, width / 2, height / 2);
    return tCtx.canvas.toDataURL();
}
