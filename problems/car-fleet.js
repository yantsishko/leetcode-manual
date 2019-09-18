/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
/**
  * N cars are going to the same destination along a one lane road.  The destination is target miles away.
  * Each car i has a constant speed speed[i] (in miles per hour), and initial position position[i] miles towards the target along the road.
  * A car can never pass another car ahead of it, but it can catch up to it, and drive bumper to bumper at the same speed.
  * The distance between these two cars is ignored - they are assumed to have the same position.
  * A car fleet is some non-empty set of cars driving at the same position and same speed.  Note that a single car is also a car fleet.
  * If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

  * How many car fleets will arrive at the destination?
*/
const carFleet = function(target, position, speed) {
  if (!position.length || !speed.length) {
    return 0;
  }
  const cars = {};
  const carsSpeedPosition = {};
  position.forEach((pos, index) => {
    carsSpeedPosition[pos] = speed[index];
    cars[pos] = (target - pos) / carsSpeedPosition[pos];
  });
  position.sort((a, b) => b - a);

  let fleets = 1;

  let maxTime = (target - position[0]) / carsSpeedPosition[position[0]];

  for (let i = 1; i < position.length; i++) {
    const timeToTarget = cars[position[i]];
    if (maxTime < timeToTarget) {
      fleets++;
      maxTime = timeToTarget;
    }
  }

  return fleets;
};
