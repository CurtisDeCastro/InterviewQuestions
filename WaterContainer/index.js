//https://leetcode.com/problems/container-with-most-water/submissions/

// returns an array of indecies for current height and next equivalent height (if one exists)
var twoSum = function(nums, target) {
  const bucket = {};
  for (var i = 0; i < nums.length; i++) {
    if (bucket[nums[i]] >= 0){
      return [bucket[nums[i]], i]
    }
    bucket[target-nums[i]] = i;
  }
};

var twoProduct = function(nums, target) {
  console.log('Target: ',target);
  target = target**2;
  // console.log('Target: ',target);
  const bucket = {};
  for (var i = 0; i < nums.length; i++) {
    let copy = nums.slice()
    copy.splice(i,1);
    // if (copy.includes(nums[i])) {
      console.log(copy)
    //   console.log('YEEEE',nums[i]);
    // }
    if (bucket[Math.sqrt(target)]){
      return [bucket[Math.sqrt(target)], i]
    }
    bucket[target/nums[i]] = i;
  }
};

const containsDuplicate = (arr) => {
  let duplicates = {};
  for (let i = 0; i < arr.length; i++) {
    let copy = arr.slice();
    copy.splice(i,1);
    duplicates[arr[i]] = [];
    while (copy.includes(arr[i])) {
      duplicates[arr[i]].push(copy.splice(copy.indexOf(arr[i]),1)[0]);
    };
  }
  for (key in Object.keys(duplicates)) {
    if (duplicates[key] <= 0) {
      delete duplicates[key];
    }
  }
  return duplicates;
}

const maxArea = (height) => {
  height.forEach((h) => {
    let coord = twoProduct(height,h);
    // console.log('Indecies: ' + coord);
    if (coord !== undefined) {
      // console.log('Heights: ',height[coord[0]],height[coord[1]]);
    }
    console.log('----------------');
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

const testCases = [
  [1,8,6,2,5,4,8,3,7],
  [5,3,6,2,8,5,1,5,9,4,2],
  // [1,2,1],
]

testCases.forEach((test) => {
  console.log('TEST: ', test);
  console.log(maxArea(test));
  console.log(containsDuplicate(test))
})

