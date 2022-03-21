// Code your solution in this file!
function  distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
    return Math.abs(distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(distanceFromHqInFeet(destination) - distanceFromHqInFeet(start))
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) < 2000 && distanceTravelledInFeet(start, destination) > 400) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    }
    else if (distanceTravelledInFeet(start, destination) < 2500 && distanceTravelledInFeet(start, destination) > 2000) {
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    }
}