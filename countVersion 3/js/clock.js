var ClockType = getParameterByName("clock-type");
if (ClockType == "Extended") {
    var CountDownDate = getParameterByName("date");
    if(CountDownDate!="nov 2, 2020 15:37:25"){
        deadline=CountDownDate;
    }
    else{
        deadline="nov 2, 2020 15:37:25";
    }


var deadline = new Date("nov 1, 2020 15:37:25").getTime(); 
  
var x = setInterval(function() { 
  
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("day").innerHTML = days ; 
document.getElementById("hour").innerHTML = hours; 
document.getElementById("minute").innerHTML = minutes;  
document.getElementById("second").innerHTML = seconds;  
if (t < 0) { 
        clearInterval(x); 
        document.getElementById("timeRemaining").innerHTML = "TIME UP"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; } 
}, 1000); 