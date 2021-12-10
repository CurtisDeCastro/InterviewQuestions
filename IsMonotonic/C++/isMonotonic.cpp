#include <iostream>
#include <cstdlib>
#include <string>
#include <vector>
using namespace std;

int LogVars(int nI, int nArrElem, int nPrevVal, string sPole){
  cout << "i#: " << nI << "| Current: " << nArrElem << "| Previous: " << nPrevVal << "| Polarity: " << sPole << endl;
  return 0;
};

int IsMonotonic(vector<int> rNumArr, bool bToggleLog){
  int nResult = 0;
  int nPrev = rNumArr[0];
  string sPole = "None Yet";
  string sDirxn = (rNumArr[0] < rNumArr[1]) ? "up" : "down";
  for(int i = 1; i < rNumArr.size(); ++i) {
    int nCurrent = rNumArr[i];
    bool bLoopEndReached = i == rNumArr.size()-1;
    if (nCurrent > nPrev && sDirxn == "up"){
      bToggleLog ? LogVars(i, rNumArr[i], nPrev, sPole) : NULL;
      sPole = "+";
      nPrev = nCurrent;
    } else if (nCurrent < nPrev && sDirxn == "down"){
      bToggleLog ? LogVars(i, rNumArr[i], nPrev, sPole) : NULL;
      sPole = "-";
      nPrev = nCurrent;
    } else {
      break;
    };
    if (bLoopEndReached){
      cout << "END REACHED:: THIS VECTOR IS MONOTONIC" << endl;
      sPole == "+" ? nResult = 1 : nResult = -1;
    };
  }
  return nResult;
};

class TestCases {
  public:
    vector<int> IncUp = {1,2,3,4,5,6,7,8,9,10};
    vector<int> IncDown = {5,4,3,2,1,0,-1,-2,-3,-4};
    vector<int> NotMonotonic = {0,1,2,3,4,5,6,-7,8,0,0};
    vector<int> DoubleZero = {0,0,3,2,1,0,-1,-2,-3,-4};
    vector<int> DuplicateVal = {0,1,2,3,4,5,5,-7,8,0,0};
    void Test(vector<int> Case, bool showLog){
      cout << IsMonotonic(Case, showLog) << "\n";
    }
};

int main() {
  TestCases Run;
  vector<int> IncUp = Run.IncUp;
  vector<int> IncDown = Run.IncDown;
  vector<int> NotMonotonic = Run.NotMonotonic;
  vector<int> DoubleZero = Run.DoubleZero;
  vector<int> DuplicateVal = Run.DuplicateVal;
  Run.Test(IncUp, true);
  Run.Test(IncDown, true);
  Run.Test(NotMonotonic, true);
  Run.Test(DoubleZero, true);
  Run.Test(DuplicateVal, true);
  return 0;
};
