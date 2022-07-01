//! OFFICE HOURS/LIVE CODING CHALLENGE 6/30/22

//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// in progress, almost there!

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentBest = 0;
    //let pricesCopy = [...prices]
    for(let i = 0; i < prices.length; i++){
      console.log('prices[i]', prices[i])
      console.log(Math.max(...prices))
      if(Math.max(...prices)-prices[i] > currentBest){
        currentBest =  Math.max(...prices)-prices[i];
        console.log('currentBest:', currentBest)
        
        }
        prices.shift();
     
    }
    return currentBest
};
  
maxProfit([7,1,5,3,6,4])

//! OTHER SOLUTION

const maxProfit = function(prices) {
    let currentBest = 0;
    for (let i = 0; i < prices.length; i++) {
        let diff = Math.max(...prices.slice(i + 1)) - prices[i]
        if (diff > currentBest) {
            currentBest = diff
        }
    }
    return currentBest
};


//! MORE EFFICIENT SOLUTION

//* This works and is very fast! Going through the array backwards made it so much easier.

const maxProfit = function(prices) {
let profit = 0
let highPrice = 0
for (let i = prices.length - 1; i >= 0; i--) {
  if (prices[i] > highPrice) highPrice = prices[i]
  if (highPrice - prices[i] > profit) profit = highPrice - prices[i]
}
return profit
};