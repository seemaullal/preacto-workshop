function longestCommonSubstring(str1, str2) {
    if (!str1.length || !str2.length)
        return '';
    var lcs = 0, sequence = '', subStrStart = -1, lastSubStrStart = 0, len1 = str1.length, len2 = str2.length;
    var diffs = [ ];
    for (var i = 0; i <= len1 ; i++) { //initialize diff table
        diffs.push([ ]);
        for (var j = 0; j <= len2 ; j++) {
            diffs[i][j] = 0;
        }
    }
    for (var k = 0; k < len1; k++) {
        for (var m = 0; m < len2; m++) {
            if (str1[k] === str2[m]) { //letters match
                if (m === 0 || k === 0)
                    diffs[k][m] = 1;
                else {
                    diffs[k][m] = 1 + diffs[k-1][m-1];
                }
                if (diffs[k][m] > lcs) {//new longest common substring
                    lcs  = diffs[k][m];
                    subStrStart =  k - diffs[k][m] + 1;
                    if (lastSubStrStart === subStrStart) {//continuing previous substring
                        sequence += str1[k];
                    } else { //new longest substring
                        lastSubStrStart = subStrStart;
                        sequence =  str1.substr(lastSubStrStart, (k+1) - lastSubStrStart );
                    }
                }
            }
        }
    }
    return sequence;
}
