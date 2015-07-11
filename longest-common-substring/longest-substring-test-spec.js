describe ('Longest Common Substring', function() {

    it('returns an empty string if the strings have no characters in common', function() {
        expect(longestCommonSubstring('abcde', 'xygzf')).toEqual('');
    });

    it('returns an empty string if the strings have no characters and are different lengths', function() {
        expect(longestCommonSubstring('abcde', 'xzf')).toEqual('');
    });

    it('returns the entire string if the two strings are the same', function() {
        expect(longestCommonSubstring('abcde', 'abcde')).toEqual('abcde');
    });

    it('finds the longest common substring of two strings that overlap', function() {
        expect(longestCommonSubstring('apples', 'appleses')).toEqual('apples');
    });

    it('finds the longest common substring of two strings', function() {
        expect(longestCommonSubstring('i like chocolate', 'i love chocolate')).toEqual('e chocolate');
    });

    it('finds the longest common substring of two strings', function() {
        expect(longestCommonSubstring('abcde', 'zxcde')).toEqual('cde');
    });
});
