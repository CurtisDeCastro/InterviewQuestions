function logLoopVars(i, arrElem, prevVal, pole){
  console.log(
    "i#: ",i,'|  ',
    "Current: ",arrElem,'|  ',
    "Previous:",prevVal,'|  ',
    'Polarity: ',pole,
  );
}
const isMonotonic = (numArr, bool) => {
  let toggleLog = bool,
  result = 0,
  prev = numArr[0],
  pole = 'None Yet',
  dirxn = (numArr[0] < numArr[1]) ? 'up' : 'down';
  for (let i = 1; i < numArr.length; i++) {
    let current = numArr[i],
    loopEndReached = i === numArr.length-1;
    if (current > prev && dirxn === 'up') {
      toggleLog ? logLoopVars(i, numArr[i], prev, pole) : null;
      pole = '+';
      prev = current;
    } else if (current < prev && dirxn === 'down') {
      toggleLog ? logLoopVars(i, numArr[i], prev, pole) : null;
      pole = '-';
      prev = current;
    } else {
      break;
    }
    if (loopEndReached) {
      pole === '+' ? result = 1 : result = -1;
    }
  }
  return result;
};

const testCases = {
  incUp: [1,2,3,4,5,6,7,8,9,10,],
  incDown: [5,4,3,2,1,0,-1,-2,-3,-4,],
  notMonotonic: [1,2,3,4,5,6,7,8,0,0,],
};

Object.keys(testCases).forEach(key => {
  console.log("Now Testing: ", key);
  console.log(isMonotonic(testCases[key], true));
});