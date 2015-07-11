describe ('Minimal Coins', function() {

    describe ('when the amount is 0', function() {

        it('returns 0 for an empty array', function() {
            expect(minimalCoins([], 0)).toEqual(0);
        });

        it ('returns 0 for a non-empty array', function() {
            expect(minimalCoins([10,20], 0)).toEqual(0);
        });

    });
    describe ('for US coin denominations', function() {

        it ('returns 1 when the amount is one of the possible coins', function() {
            expect(minimalCoins([1,5,10,25],5)).toEqual(1);
        });

         it ('returns the correct result for an amount that is not one of the coins', function() {
            expect(minimalCoins([1,5,10,25],37)).toEqual(4);
        });

    });

    describe ('for non-US denominations (when the greedy algorithm does not work)', function() {

        it ('returns the correct number of coins', function() {
            expect(minimalCoins([1,3,4],6)).toEqual(2);
        });

        it ('returns the correct result for an amount that is not one of the coins', function() {
            expect(minimalCoins([1,4,5,10],8)).toEqual(2);
        });

    });


});
