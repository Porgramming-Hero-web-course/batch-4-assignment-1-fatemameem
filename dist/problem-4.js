"use strict";
function calculateShapeArea(shape) {
    if (shape.shapetype === "circle") {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
    }
    else if (shape.shapetype === "rectangle") {
        return parseFloat((shape.width * shape.height).toFixed(2));
    }
    return 0;
}
const circleArea = calculateShapeArea({ shapetype: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
    shapetype: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);
