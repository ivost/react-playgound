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
        const drawLine = (ctx, info, style = {}) => {
            const {x, y, x1, y1} = info;
            const {color = 'blue', width = 1} = style;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x1, y1);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
        }

        // draw a rectangle
        const drawRect = (ctx, rect) => {
            const {x, y, w, h} = rect;
            const x1 = x + w
            const y1 = y + h
            drawLine(ctx, {x: x, y: y, x1: x1, y1: y});
            drawLine(ctx, {x: x1, y: y, x1: x1, y1: y1});
            drawLine(ctx, {x: x1, y: y1, x1: x, y1: y1});
            drawLine(ctx, {x: x, y: y1, x1: x, y1: y});
        }

        const rect = {x: 30, y: 40, w: 100, h: 200}
        drawRect(ctx, rect)
        //drawLine(ctx, { x: 20, y: 20, x1: 20, y1: 100 });
        //drawLine(ctx, { x: 50, y: 50, x1: 200, y1: 100 }, { color: 'red' });
        // drawLine(ctx, { x: 300, y: 250, x1: 260, y1: 70 }, { color: 'green', width: 5 });
        // drawLine(ctx, { x: 70, y: 240, x1: 160, y1: 120 }, { color: 'blue' });

    }, []);


    return (
        <div className="App">
            <canvas ref={canvas}></canvas>
        </div>
    );
}

export default App;
