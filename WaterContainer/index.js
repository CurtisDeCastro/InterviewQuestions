//https://leetcode.com/problems/container-with-most-water/submissions/

var twoSum = function(nums, target) {
  const bucket = {};
  for (var i = 0; i < nums.length; i++) {
      if (bucket[nums[i]] >= 0){
          return [bucket[nums[i]], i]
      }
      bucket[target-nums[i]] = i;
  }
};


const maxArea = (height) => {
  height.forEach((h) => {
    console.log(twoSum(height,h*h));
  })
};
// const maxArea = (height) => {
//   let tracker = {
//     highest: 0,
//     highestIndex: 0,
//     secondHighest: 0,
//     secondIndex: 0,
//   }
//   height.forEach((h, i) => {
//     if (tracker.highest < h) {
//       tracker.highest = h;
//       tracker.highestIndex = i;
//     } else if (tracker.highest === h || tracker.secondHighest < h && h > tracker.highest) {
//       tracker.secondHighest = h;
//       tracker.secondIndex = i;
//     }
//   })
//   let cont;
//   tracker.highestIndex > tracker.secondIndex ?
//     cont = height.slice(tracker.secondIndex, tracker.highestIndex) :
//     cont = height.slice(tracker.highestIndex, tracker.secondIndex);
//   let result = 0;
//   cont.forEach((v) => {
//     result += tracker.secondHighest;
//   })

//   // handling for arrays of length 2
//   let res = 0;
//   height.forEach((h) => {res += h});
//   if (res === 2) {
//       return 1
//   } else {
//       return result;
//   }
// };

const testCases = {
  one: [1,8,6,2,5,4,8,3,7],
}

console.log(maxArea(testCases.one));
