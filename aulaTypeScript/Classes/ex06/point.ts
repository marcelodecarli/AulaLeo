interface Point {
    x: number;
    y: number;
}

function createPoint(x: number, y: number): Point {
    return { x, y };
}

const point = createPoint(10, 20);

console.log(`(${point.x}, ${point.y})`)