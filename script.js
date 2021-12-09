const inputDate = document.querySelector("#input-date");
  const showBtn = document.querySelector("#show-btn");
  const output = document.querySelector("#output");
  

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



  
  function clickEventHandler(){
    var dateArray = inputDate.value.split("-");
    var date = {day: Number(dateArray[2]), month: Number(dateArray[1]), year: Number(dateArray[0])};