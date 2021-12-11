#Lookup By Prefix
---
### File Structure of '/NodeJS'
---
| Directory | File Name | Description |
| --- | --- | --- |
| /NodeJS | index.js | **Run this file to see output of testing** _Preferences may be toggled in the prefs object just above the execution of test(). All are toggled off by default_ |
| /NodeJS | /classes | _contains class components and methods used to create, read, update and delete values from a Trie_ |
| /classes | /letter.js | _constructor for an individual node in the trie. Contains one method, **getWord**_ |
| /classes | /wordTrie.js | _constructor for the entire trie. Includes methods **insert**, **find**, **remove** and **contains**_ |
| /NodeJS | /tests | _contains test suite_ |
| /tests | /index.js | _centralizes all tests in single export_ |
| /tests | /logTrie.js | _function to log a non-minified input tree to console WITH indentation_ |
| /tests | /quickValidate.js | _function that runs a quick and simple test for each method and logs its results_ |
| /tests | /testContains.js | _function to test WordTrie.contains() method_ |
| /tests | /testFind.js | _function to test WordTrie.finds() method_ |
| /tests | /testInsert.js | _function to test WordTrie.insert() method_ |
| /tests | /testManyQueries.js | _tests each method ~100 times and logs outputs. Can test all or only one method by toggling prefs in /NodeJS/index.js_ |
| /tests | /testRemove.js | _function to test WordTrie.remove() method_ |
| /tests | /TestTrie.js | _Uses an IIFE to create a test trie, which is then imported by other test files for testing_ |
| /NodeJS | /utilities | _contains useful tools and helper functions_ |
| /utilities | artOfWar.js | _the book Art of War, stored as a string variable and exported as an array of word values_ |
| /utilities | LargeDataset.js | _function imports word array from artOfWar.js and populates a new trie with each word, exporting the trie_ |

## More Code Inbound!
Features that I plan to implement:

Bugs that need fixing:

