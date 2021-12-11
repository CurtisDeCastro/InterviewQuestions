### File Structure of '/NodeJS'
---
| Directory | File Name | Description |
| --- | --- | --- |
| NodeJS | index.js | **Run this file to see output of testing.** _Preferences may be toggled in the prefs object just above the execution of test(). All are toggled off by default, so in order to view output in the console at least one pref must be toggled to true or 1_ |
| /classes | >>> | _contains class components and methods used to create, read, update and delete values from a Trie_ |
| >>> | /letter.js | _constructor for an individual node in the trie. Contains one method, **getWord**_ |
| >>> | /wordTrie.js | _constructor for the entire trie. Includes methods **insert**, **find**, **remove** and **contains**_ |
| /tests | >>> | _contains test suite_ |
| >>> | index.js | _centralizes all tests in single export_ |
| >>> | logTrie.js | _function to log a non-minified input tree to console WITH indentation_ |
| >>> | quickValidate.js | _function that runs a quick and simple test for each method and logs its results_ |
| >>> | testContains.js | _function to test WordTrie.contains() method_ |
| >>> | testFind.js | _function to test WordTrie.finds() method_ |
| >>> | testInsert.js | _function to test WordTrie.insert() method_ |
| >>> | testManyQueries.js | _tests each method ~100 times and logs outputs. Can test all or only one method by toggling prefs in /NodeJS/index.js_ |
| >>> | testRemove.js | _function to test WordTrie.remove() method_ |
| >>> | TestTrie.js | _Uses an IIFE to create a test trie, which is then imported by other test files for testing_ |
| /utilities | >>> | _contains useful tools and helper functions_ |
| >>> | artOfWar.js | _the book Art of War, stored as a string variable and exported as an array of word values_ |
| >>> | LargeDataset.js | _function imports word array from artOfWar.js and populates a new trie with each word, exporting the trie_ |

## More Code Inbound!
Upcoming optimization checklist:
1. toggle on/off a pref to only query trie when string > 3 characters for better performance in large datasets
2. map function for mapping/normalizing all values 
3. incorporate preference to toggle case sensitivity
4. enhance test suite and/or refactor to run all tests on LargeDataset
5. refactor to C++

Bugs that need fixing:
1. fails if attempting to insert a 1 character word such as 'I' or 'A'
