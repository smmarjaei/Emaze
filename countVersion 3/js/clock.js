var ClockType = getParameterByName("clock-type");
if (ClockType == "Extended") {
    var deadline;
    var CountDownDate = getParameterByName("date");
    console.log(CountDownDate);
    if(CountDownDate==null){
        deadline="nov 2, 2020 15:37:25"
    }
    else if(CountDownDate != "nov 2, 2020 15:37:25") {
        deadline = CountDownDate;
    }
    console.log(deadline);
    deadline = new Date(Date.parse(new Date(deadline)));
    console.log("Deadline", deadline.getTime());


    var bgColor = getParameterByName("bg-color");
    var fontColor = getParameterByName("font-color");
    var fontUnderline = getParameterByName("font-underline");
    $divClass = $('.clock-container');
    $divClass.css({
        'background-color': bgColor,
        'color': fontColor,
        // 'Style': font-underline
    })

    $divClass = $('.clock-timer');
    $divClass.css({
        'color': fontColor,
        // 'Style': font-underline
    })



    // var deadline = new Date("nov 1, 2020 15:37:25").getTime(); 

    var x = setInterval(function() {

        var now = new Date().getTime();
        console.log("now", now);
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
        if (t < 0) {
            clearInterval(x);
            document.getElementById("timeRemaining").innerHTML = "TIME UP";
            document.getElementById("day").innerHTML = '0';
            document.getElementById("hour").innerHTML = '0';
            document.getElementById("minute").innerHTML = '0';
            document.getElementById("second").innerHTML = '0';
        }
    }, 1000);
}