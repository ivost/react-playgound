import React, { useState, useRef, useEffect } from 'react';

function App() {
  const canvas = useRef();
  let ctx = useRef();

  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    const r1Info = { x: 20, y: 30, w: 100, h: 50 };
    const r1Radius = { tr: 5, br: 40, bl: 4, tl: 20 };
    roundRect(r1Info, r1Radius, 'green');

    const r2Info = { x: 100, y: 100, w: 80, h: 150 };
    const r2Radius = { tr: 20, br: 20, bl: 20, tl: 20 };
    roundRect(r2Info, r2Radius);

    const r3Info = { x: 250, y: 80, w: 80, h: 120 };
    const r3Radius = { tr: 0, br: 0, bl: 0, tl: 0 };
    roundRect(r3Info, r3Radius, 'blue');

    const r4Info = { x: 200, y: 220, w: 100, h: 50 };
    roundRect(r4Info, undefined, 'black');
  }, []);

  // draw a rounded rectangle with background
  const roundRect = (info, radius = { tr: 4, br: 4, bl: 4, tl: 4 }, color = '#ffffff') => {
    const { x, y, w, h } = info;
    const r = x + w;
    const b = y + h;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(r - radius.tr, y);
    ctx.quadraticCurveTo(r, y, r, y + radius.tr);
    ctx.lineTo(r, y + h - radius.br);
    ctx.quadraticCurveTo(r, b, r - radius.br, b);
    ctx.lineTo(x + radius.bl, b);
    ctx.quadraticCurveTo(x, b, x, b - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  return (
    <div className="App">
      <h3>Draw a rounded rectangle on Canvas - <a href="http://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default App;