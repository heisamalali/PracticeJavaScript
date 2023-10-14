"use strict";
let day = 1;
// if we do not add the break always the default will be compile
switch (day) {
    case 1:
        console.log("day one");
        break;
    case 2:
        console.log("day two");
        break;
    default:
        console.log("this is the default value");
}
// we can add {}
switch (day) {
    case 1: {
        console.log("day one");
        break;
    }
    case 2: {
        console.log("day two");
        break;
    }
    default:
        console.log("this is the default value");
}
let grade = "B";
switch (grade) {
    case "A": {
        console.log("Exelent");
        break;
    }
    case "B": {
        console.log("Good");
        break;
    }
    case "C":
    case "D":
    case "E": {
        console.log("You did ok");
        break;
    }
    default: {
        console.log("Invalid grade");
    }
}
