const inputDate = document.querySelector("#input-date");
  const showBtn = document.querySelector("#show-btn");
  const output = document.querySelector("#output");
  

  function reverseString(str){
    return str.split("").reverse().join("");
  }
  
  
  function isPalindrome(str){
    var reversedStr = reverseString(str);
    if(str === reversedStr){
      return true;
    }
    else{
      return false;
    }
  }



  function dateNumberToString(date){
    if(date.day < 10){
      date.day = "0" + date.day; 
    }
    else{
      date.day = date.day.toString();
    }
  
    if(date.month < 10){
      date.month = "0" + date.month; 
    }
    else{
      date.month = date.month.toString();
    }
  
    date.year = date.year.toString();
  
    return date;
  }
  



  function dateAllVariations(date){
    var strDate = dateNumberToString(date)
   
    const ddmmyyyy = strDate.day + strDate.month + strDate.year;
    const mmddyyyy = strDate.month + strDate.day + strDate.year;
    const yyyymmdd = strDate.year + strDate.month + strDate.day;
    const ddmmyy = strDate.day + strDate.month + strDate.year.slice(-2);
    const mmddyy = strDate.month + strDate.day + strDate.year.slice(-2);
    const yymmdd = strDate.year.slice(-2) + strDate.month + strDate.day;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
  }




  function checkPalidromeForAllDateFormats(date){
    var dateArray = dateAllVariations(date);
    for(var i = 0; i < dateArray.length; i++){
        if(isPalindrome(dateArray[i])){
          return true;
        }3
      }
      return false;
    }



  
  function clickEventHandler(){
    var dateArray = inputDate.value.split("-");
    var date = {day: Number(dateArray[2]), month: Number(dateArray[1]), year: Number(dateArray[0])};