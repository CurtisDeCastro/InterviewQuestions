
const quickValidate = {
  insert: (testInsert) => {console.log('INSERTS A NEW WORD WHEN PROMPTED::', testInsert)},
  remove: (testRemove) => {console.log('REMOVES AN EXISTING WORD WHEN PROMPTED::', testRemove)},
  contains: (testContains) => {console.log('FINDS EXPECTED WORDS AND DOES NOT FIND UNEXPECTED WORDS::', testContains)},
  find: (testFind) => {console.log('RETURNS ALL RESULTS FOR A GIVEN QUERY::',testFind)},
}

const contains = {
  checking: () => {console.log('Checking if test value present in TestTrie...')},
  success: () => {console.log('SUCCESS:: Expected value returned and expected failure failed')},
  failure1: () => {console.log('FAILURE:: Expected value found but unexpected value also found')},
  failure2: () => {console.log('FAILURE:: Expected value not found, but no unexpected values were found')},
  failure3: () => {console.log('FAILURE:: Expected values not found and unexpected values were found')},
}

const insert = {
  checking: () => {console.log('Attempting to insert a test string...')},
  success: () => {console.log('SUCCESS:: test string was inserted properly')},
  failure: () => {console.log('FAILURE:: test string failed to insert')},
}

const find = {
  checking: () => {console.log('Attempting to find a test string...')},
  success: () => {console.log('SUCCESS:: All expected results returned')},
  failure: () => {console.log('FAILURE:: Expected results NOT returned')},
}

const remove = {
  checking: () => {console.log('Attempting removal of test value...')},
  success: () => {console.log('SUCCESS:: Inserted value was removed')},
  failure: () => {console.log('FAILURE:: Inserted value was not removed')},
}

const manyQueries = {
  contains: (str, bool) => {`Test trie contains previously inserted word "${str}"? `,bool},
  insert: (random, wasInserted) => {console.log(`Random value "${random}" was inserted?`,wasInserted)},
  removeSuccess: (word) => {console.log(`SUCCESS:: "${word}" was inserted then removed`)},
  removeFailure: (word) => {console.log(`FAILURE:: "${word}" either inserted and not removed or never inserted`)},
  findSuccess: (word, length) => {console.log(`SUCCESS:: "${word}" was found among dataset of ${length} words`)},
  findFailure: (word, length) => {console.log(`FAILURE:: "${word}" was not found among dataset of ${length} words`)},
}

const general = {
  timestamp: (start, end) => {
    console.log(`~~~All tests run in ${end-start} milliseconds~~~`);
  }
}

module.exports = {
  quickValidate,
  contains,
  insert,
  find,
  remove,
  manyQueries,
  general,
}