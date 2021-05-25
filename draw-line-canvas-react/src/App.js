import React, {useRef, useEffect} from 'react';

function App() {
    const canvas = useRef();

    // initialize the canvas context
    useEffect(() => {
        // dynamically assign the width and height to canvas
        const el = canvas.current;
        el.width = el.clientWidth;
        el.height = el.clientHeight;

        // get context of the canvas
        const ctx = el.getContext("2d");

        // draw a line
        const drawLine = (ctx, points, style = {}) => {
            const {x, y, x1, y1} = points;
            const {color = 'blue', width = 1} = style;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x1, y1);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
        }

        // draw a rectangle
        const drawRect = (ctx, rect, style = {}) => {
            const {x, y, w, h} = rect;
            const x1 = x + w
            const y1 = y + h
            drawLine(ctx, {x: x, y: y, x1: x1, y1: y}, style);
            drawLine(ctx, {x: x1, y: y, x1: x1, y1: y1}, style);
            drawLine(ctx, {x: x1, y: y1, x1: x, y1: y1}, style);
            drawLine(ctx, {x: x, y: y1, x1: x, y1: y}, style);
        }

        const rect = {x: 30, y: 40, w: 100, h: 200}
        drawRect(ctx, rect)

        drawLine(ctx, {x: 30, y: 40, x1: 130, y1: 240}, {color: 'red', width: 2});

        const rect2 = {x: 40, y: 30, w: 200, h: 100}
        drawRect(ctx, rect2, {color: 'green', width: 3})


    }, []);


    return (
        <div className="App">
            <canvas ref={canvas}></canvas>
        </div>
    );
}

export default App;
