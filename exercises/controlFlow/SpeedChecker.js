// Speed Limit = 70 -> ok
// 5 km above limit -> 1 point
// More than 12 points -> License suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if (speed < speedLimit + kmPerPoint) return 'OK'
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= maxPoints) {
        return 'License suspended'
    }
    if (points < maxPoints && points > 1)
        return points + ' points'
    return points + ' point'
}

console.log(checkSpeed(80));
