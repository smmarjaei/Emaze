var ClockType = getParameterByName("clock-type");
if (ClockType == "Digital") {

    //Updating Font Color
    var $font = $('.container');
    var bgColor = getParameterByName("bg-color");
    var fontColor = getParameterByName("font-color");
    var fontUnderline = getParameterByName("font-underline");
    $font.css("color", fontColor)
    $font.css("style",fontUnderline)
    $font.css("Background-color",bgColor)

    function countDown() {
        var today = new Date();

        var deadline;
        var CountDownDate = getParameterByName("date");
        if(CountDownDate==null){
            deadline="nov 2, 2020 15:37:25"
        }
        else if (CountDownDate != "nov 2, 2020 15:37:25") {
            deadline = CountDownDate;
        }
        deadline = new Date(Date.parse(new Date(deadline)));



        var CurrentTime = today.getTime();
        var deadlineTime = deadline.getTime();

        var remTime = deadlineTime - CurrentTime
        console.log(remTime);


        var sec = Math.floor(remTime / 1000);
        var min = Math.floor(sec / 60);
        var hrs = Math.floor(min / 60);
        var days = Math.floor(hrs / 24);

        hrs = hrs % 24;
        min = min % 60;
        sec = sec % 60;

        hrs = (hrs < 10) ? "0" + hrs : hrs;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        document.getElementById('days').innerHTML = days;
        document.getElementById('hrs').innerHTML = hrs;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;

        setTimeout(countDown, 1000);

    }

    countDown();

}