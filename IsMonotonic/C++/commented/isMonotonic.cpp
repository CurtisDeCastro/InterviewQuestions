/* PROBLEM: Implement "isMonotonic"...
  Write a function to determine whether an array is Monotonic.
  Output -1 if each successive val is less than its predecessor.
  Output 1 if each succesive val is greater than its predecessor.
  Output 0 if there are any duplicates or values that do not progress in same direction from 0.
*/

/*
  Inputs: Vector, Boolean
  Outputs: Integer
  Constraints: Must take in vector of integers
  Edge-Cases: vector begins with double zeros, duplicate values
*/

/*
  We will need to import the following libraries:
    IOSTREAM: used for displaying outputs and accepting inputs in CLI/terminal,
    CSTDLIB: C-Standard Library; basic functions of C-Lang such as 'cout',
    STRING: Allows for working with string data type and contains string methods,
    VECTOR: Allows for working with vector data type and contains vector methods,
*/

#include <iostream>
#include <cstdlib>
#include <string>
#include <vector>
using namespace std;

// Helper function to enable logging of all variables within IsMonotonic's for-loop
int LogVars(int nI, int nArrElem, int nPrevVal, string sPole){
  cout << "i#: " << nI << "| Current: " << nArrElem << "| Previous: " << nPrevVal << "| Polarity: " << sPole << endl;
  return 0;
};

// Function declaration for IsMonotonic indicating implicit return of integer
  // Takes in a vector of integers and a boolean to indicate whether to show logging
int IsMonotonic(vector<int> rNumArr, bool bToggleLog){
  // initialize result variable with default assignment to 0
  int nResult = 0;
  // initialize (prev)ious-value variable assigned to first vector element
  int nPrev = rNumArr[0];
  // initialize polarity variable assigned to default value
  string sPole = "None Yet";
  // initialize direction variable that returns direction sequence moves in relation to 0
  string sDirxn = (rNumArr[0] < rNumArr[1]) ? "up" : "down";
  // iterate through the vector beginning at the second value
  for(int i = 1; i < rNumArr.size(); ++i) {
    // declare current value alias variable
    int nCurrent = rNumArr[i];
    // declare boolean alias variable that returns true if end of loop is reached
    bool bLoopEndReached = i == rNumArr.size()-1;
    // if the current value is greater than the previous and we expect incrementation
    if (nCurrent > nPrev && sDirxn == "up"){
      // if user indicated a preference for logging data, allow logging. Otherwise do nothing
      bToggleLog ? LogVars(i, rNumArr[i], nPrev, sPole) : NULL;
      // if the polarity is not already positive
      if (sPole != "+"){
        // assign it to be so
        sPole = "+";
      }
      // reassign previous value to current value
      nPrev = nCurrent;
    // otherwise if current value is less than previous and we expect decrementation
    } else if (nCurrent < nPrev && sDirxn == "down"){
      // if user indicated a preference for logging data, allow logging. Otherwise do nothing
      bToggleLog ? LogVars(i, rNumArr[i], nPrev, sPole) : NULL;
      // if the polarity is not already negative
      if (sPole != "-"){
        // assign it to be so
        sPole = "-";
      }
      // reassign previous value to current value
      nPrev = nCurrent;
    // otherwise
    } else {
      // break the forloop without reassigning nResult
      break;
    };
    // if the end of the loop has been reached
    if (bLoopEndReached){
      // print message to CLI/terminal confirming the vector is monotonic
      cout << "END REACHED:: THIS VECTOR IS MONOTONIC" << endl;
      // if the polarity is positive, reassign result to 1, otherwise reassign result to -1
      sPole == "+" ? nResult = 1 : nResult = -1;
    };
  }
  // return the result variable
  return nResult;
};

/*
  TEST CASES::
    -Instantiate test case class and populate with datasets
    that should produce the expected result
    -Write test method that will display the output of IsMonotonic in CLI/terminal
*/
class TestCases {
  public:
    vector<int> IncUp = {1,2,3,4,5,6,7,8,9,10};
    vector<int> IncDown = {5,4,3,2,1,0,-1,-2,-3,-4};
    vector<int> NotMonotonic = {0,1,2,3,4,5,6,-7,8,0,0};
    vector<int> DoubleZero = {0,0,3,2,1,0,-1,-2,-3,-4};
    vector<int> DuplicateVal = {0,1,2,3,4,5,5,-7,8,0,0};
    void Test(vector<int> Case, bool showLog){
      cout << IsMonotonic(Case, showLog) << endl;
    }
};

int main() {
  // instantiate new object from test case class with alias name Run
  TestCases Run;
  // instantiate vectors from Run
  vector<int> IncUp = Run.IncUp;
  vector<int> IncDown = Run.IncDown;
  vector<int> NotMonotonic = Run.NotMonotonic;
  vector<int> DoubleZero = Run.DoubleZero;
  vector<int> DuplicateVal = Run.DuplicateVal;
  // run tests for each vector
  Run.Test(IncUp, true);
  Run.Test(IncDown, true);
  Run.Test(NotMonotonic, true);
  Run.Test(DoubleZero, true);
  Run.Test(DuplicateVal, true);
  // return 0 to end execution of main
  return 0;
};

/* RESULT LOGS::
  Test - IncUp:
    i#: 1| Current: 2| Previous: 1| Polarity: None Yet
    i#: 2| Current: 3| Previous: 2| Polarity: +
    i#: 3| Current: 4| Previous: 3| Polarity: +
    i#: 4| Current: 5| Previous: 4| Polarity: +
    i#: 5| Current: 6| Previous: 5| Polarity: +
    i#: 6| Current: 7| Previous: 6| Polarity: +
    i#: 7| Current: 8| Previous: 7| Polarity: +
    i#: 8| Current: 9| Previous: 8| Polarity: +
    i#: 9| Current: 10| Previous: 9| Polarity: +
    END REACHED:: THIS VECTOR IS MONOTONIC
    1
  Test - IncDown:
    i#: 1| Current: 4| Previous: 5| Polarity: None Yet
    i#: 2| Current: 3| Previous: 4| Polarity: -
    i#: 3| Current: 2| Previous: 3| Polarity: -
    i#: 4| Current: 1| Previous: 2| Polarity: -
    i#: 5| Current: 0| Previous: 1| Polarity: -
    i#: 6| Current: -1| Previous: 0| Polarity: -
    i#: 7| Current: -2| Previous: -1| Polarity: -
    i#: 8| Current: -3| Previous: -2| Polarity: -
    i#: 9| Current: -4| Previous: -3| Polarity: -
    END REACHED:: THIS VECTOR IS MONOTONIC
    -1
  Test - NotMonotonic:
    i#: 1| Current: 1| Previous: 0| Polarity: None Yet
    i#: 2| Current: 2| Previous: 1| Polarity: +
    i#: 3| Current: 3| Previous: 2| Polarity: +
    i#: 4| Current: 4| Previous: 3| Polarity: +
    i#: 5| Current: 5| Previous: 4| Polarity: +
    i#: 6| Current: 6| Previous: 5| Polarity: +
    0
  Test - DoubleZero:
    0
  Test - DuplicateVal:
    i#: 1| Current: 1| Previous: 0| Polarity: None Yet
    i#: 2| Current: 2| Previous: 1| Polarity: +
    i#: 3| Current: 3| Previous: 2| Polarity: +
    i#: 4| Current: 4| Previous: 3| Polarity: +
    i#: 5| Current: 5| Previous: 4| Polarity: +
    0
*/

/* CHECKLIST::
  [X] Inputs: Vector, Boolean
  [X] Outputs: Integer
  [X] Constraints: Must take in vector of integers
  [X] Edge-Cases: vector begins with double zeros, duplicate values
*/



