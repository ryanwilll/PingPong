const canvasEl = document.querySelector("canvas"),
  canvasCtx = canvasEl.getContext("2d");

function setup() {
  canvasEl.width = canvasCtx.width = window.innerWidth;
  canvasEl.height = canvasCtx.height = window.innerHeight;
}

function draw() {
  canvasCtx.fillStyle = "#286047";
  canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  const lineWidth = 15;

  canvasCtx.fillStyle = "#FFFFFF";
  canvasCtx.fillRect(
    window.innerWidth / 2 - lineWidth / 2,
    0,
    lineWidth,
    window.innerHeight
  );

  //Raquete esquerda
  canvasCtx.fillRect(10, 200, lineWidth, 200);

  //Raquete direita
  canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 200, lineWidth, 200);

  //Bolinha
  canvasCtx.beginPath();
  canvasCtx.arc(200, 300, 20, 0, 2 * Math.PI, false);
  canvasCtx.fill();

  //placar
  canvasCtx.font = "bold 72px arial";
  canvasCtx.textAlign = "center";
  canvasCtx.textBaseline = "top";
  canvasCtx.fillStyle = "#01341D";

  canvasCtx.fillText("0", window.innerWidth / 4, 50);
  canvasCtx.fillText("2", window.innerWidth / 4 + window.innerWidth / 2, 50);
}

setup();
draw();
