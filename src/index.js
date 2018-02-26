// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    //return currency
    let rest = currency;
    if (currency <= 0)
        return {}
    if (currency >= 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}

    
    let result = new Object()
    if (Math.floor(currency / 50) > 0)
        result.H = Math.floor(currency / 50)
    rest = currency - (Math.floor(currency / 50) * 50)
    if (Math.floor(rest / 25) > 0)
        result.Q = Math.floor(rest / 25)
    rest = rest - (Math.floor(rest / 25) * 25)
    if (Math.floor(rest / 10) > 0)
        result.D = Math.floor(rest / 10)
    rest = rest - (Math.floor(rest / 10) * 10)
    if (Math.floor(rest / 5) > 0)
        result.N = Math.floor(rest / 5)
    rest = rest - (Math.floor(rest / 5) * 5)
    if (rest != 0)
        result.P = rest
    return result
        
}      
