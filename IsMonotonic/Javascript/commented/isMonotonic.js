// helper function for logging variables through each iteration
function logLoopVars(i, arrElem, prev, pole){
  console.log(
    "i#: ",i,
    "Current: ",arrElem,
    "Previous:",prev,
    'Polarity: ',pole
  );
}
/* PROBLEM: Implement "isMonotonic"...
  Write a function to determine whether an array is Monotonic.
  Output -1 if each successive val is less than its predecessor. Output 1 if each succesive val is greater than its predecessor. Output 0 if there are any duplicates or values that do not progress in same direction from 0.

  Inputs: numArray, Boolean
  Outputs: integer
  Constraints: must take in array of integers
  Edge-Cases: array begins with double zeros, duplicate values
*/
const isMonotonic = (numArr, bool) => {
  /* Initialize Variables
       toggleLog: param to indicate user logging preference,
       result: value returned by isMonotonic. 0 by default,
       prev: previous stored value in iteration,
       pole: indicates whether to return a pos or neg 1,
       dirxn: indicates if numArr vals expected to inc or dec,
  */
  let toggleLog = bool,
  result = 0,
  prev = numArr[0],
  pole = 'unassigned',
  dirxn = (numArr[0] < numArr[1]) ? 'up' : 'down';

  // Iterate through numArr beginning with second array element
  for (let i = 1; i < numArr.length; i++) {

    // alias variables for readability
    let current = numArr[i],
    loopEndReached = i === numArr.length-1;

    // if current val is greater than previous and we expect the sequence to increase
    if (current > prev && dirxn === 'up') {
      // if user enabled logging, log all current vars to console
      toggleLog ? logLoopVars(i, numArr[i], prev, pole) : null;
      // assign pole to indicate positive direction
      pole = '+';
      // reassign prev to current to prepare for next iteration
      prev = current;
    // if current val is less than previous and we expect the sequence to decrease
    } else if (current < prev && dirxn === 'down') {
      toggleLog ? logLoopVars(i, numArr[i], prev, pole) : null;
      pole = '-';
      prev = current;
    // If the difference in two values is not consistent with the direction they are expected to go
    } else {
      // break the loop and result will remain 0
      break;
    }
    // if we are able to completely iterate through the array
    if (loopEndReached) {
      // and pole is positive, result = 1, otherwise result = -1
      pole === '+' ? result = 1 : result = -1;
    }
  }
  // return result
  return result;
};

// Initialize sample test cases for each possible outcome
const testCases = {
  incUp: [1,2,3,4,5,6,7,8,9,10,],
  incDown: [5,4,3,2,1,0,-1,-2,-3,-4,],
  notMonotonic: [1,2,3,4,5,6,7,8,0,0,],
};

// Run isMonotonic for each test case
Object.keys(testCases).forEach(key => {
  console.log("Now Testing: ", key);
  console.log(isMonotonic(testCases[key]));
});