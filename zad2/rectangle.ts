class Point {
    constructor(public x: number, public y: number) {}

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }
}

export { Point };

class Rectangle {
    private topLeft: Point;
    private topRight: Point;
    private bottomLeft: Point;
    private bottomRight: Point;

    constructor(topLeft: Point, topRight: Point, bottomLeft: Point, bottomRight: Point) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }

    move(dx: number, dy: number): void {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }

    getArea(): number {
        const width = this.topRight.x - this.topLeft.x;
        const height = this.topLeft.y - this.bottomLeft.y;

        return width * height;
    }
}

export { Rectangle };
