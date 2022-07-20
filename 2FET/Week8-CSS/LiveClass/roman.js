function convertToRoman(num) {
    let roman = "";
    // loop and take out some of the number until it's all gone
    while(num > 0) {
      if(num >= 50) {
        num -= 50;
        roman += "L"
      }
      else if(num >= 10) {
        num -= 10;
        roman += "X"
      }
      //else if(num === 9)
      else if(num >= 5) {
        num -= 5;
        roman += "V"
      }
      //else if(num === 4)
      else {
        num--;
        roman += "I";
      }
    }
    return roman;
  }
  
  console.log(convertToRoman(83));