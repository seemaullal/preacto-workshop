# Sorting a Stack

Given two strings, find the longest common substring that they share. A substring is defined as characters of the string that are in order (no letters in between them). Substrings are case sensitive so 'aBa' is not considered the same as 'aba'.For example, 'ack' is a substring of 'tacky'.

Example:
longestCommonString('ABABC', 'BABCA') will return 'ABC'.

Your function should have the following signature:
```
function longestCommonString(str1, str2) {
  //should return a string that is the longest common substring of str1 and str2
}
```

# Running the tests

Execute tests with
` jasmine-node --verbose .`

Don't have `jamine-node`? Install it globally using npm with
`npm install jasmine-node -g`. For more information on jasmine-node, refer to  https://github.com/mhevery/jasmine-node.


