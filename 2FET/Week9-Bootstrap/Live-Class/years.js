/*
 * Function returns the age of cats and dogs in human years 
*/

var humanYearsCatYearsDogYears = function(humanYears) {
  
    // initial numbers
    let catYears = 15;
    let dogYears = 15;
    
    // Add years for year 2
    if(humanYears > 1) {
      catYears += 9
      dogYears += 9
    }
  
    // Add years for years after 2
    if(humanYears > 2) {
      catYears += (humanYears - 2) * 4
      dogYears += (humanYears - 2) * 5
    }
    
    return [humanYears,catYears,dogYears];
}