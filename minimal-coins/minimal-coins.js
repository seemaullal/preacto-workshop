function minimalCoins(coins, amt) {
    var mem = { };
    mem[0] = 0;
    function calculateChange(coins, curAmt) {
        if (typeof mem[curAmt] !== 'undefined' )
            return mem[curAmt];
        if (mem[curAmt])
          return mem[curAmt];
        if (coins.indexOf(curAmt) > -1) {
            mem[curAmt] = 1;
            return 1;
        }
        var curMin = Number.MAX_VALUE;
        coins.forEach(function(coin) {
            if (coin < curAmt)
                curMin = Math.min(curMin,1 + calculateChange(coins, curAmt-coin) );
        });
        mem[curAmt] = curMin;
        return curMin;
    }
    return calculateChange(coins, amt);
}
