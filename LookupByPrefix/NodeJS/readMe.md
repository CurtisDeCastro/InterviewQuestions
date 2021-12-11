#Lookup By Prefix
---
## File Structure
### contents of /NodeJS
---
1. index.js :: **Run this file to see output of testing. Preferences may be toggled in the prefs object just above the execution of test(). All are toggled off by default**
2.  classes :: _contains class components and methods used to create, read, update and delete values from a Trie_ 
⋅⋅1. letter.js :: _constructor for an individual node in the trie. Contains one method, **getWord**_
⋅⋅2. wordTrie.js :: _constructor for the entire trie. Includes methods **insert**, **find**, **remove** and **contains**_
2. tests :: _contains test suite_
⋅⋅1. index.js :: _centralizes all tests in single export_
⋅⋅2. logTrie.js :: _function to log a non-minified input tree to console WITH indentation_
⋅⋅3. quickValidate.js :: _function that runs a quick and simple test for each method and logs its results_
⋅⋅4. testContains.js :: _function to test WordTrie.contains() method_
⋅⋅5. testFind.js :: _function to test WordTrie.finds() method_
⋅⋅6. testInsert.js :: _function to test WordTrie.insert() method_
⋅⋅7. testManyQueries.js. :: _tests each method ~100 times and logs outputs. Can test all or only one method by toggling prefs in /NodeJS/index.js_
⋅⋅8. testRemove.js :: _function to test WordTrie.remove() method_
⋅⋅9. TestTrie.js :: _Uses an IIFE to create a test Trie, which is then imported by other test files for testing_
3. utilities :: _contains useful tools and helper functions_
⋅⋅1. artOfWar.js :: _the book Art of War, stored as a string variable and exported as an array of word values_
⋅⋅2. LargeDataset.js :: _function imports word array from artOfWar.js and populates a new trie with each word, exporting the trie_

## More Code Inbound!
Features that I plan to implement:

Bugs that need fixing:

