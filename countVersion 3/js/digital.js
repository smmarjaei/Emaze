var ClockType = getParameterByName("clock-type");
if (ClockType == "Digital") {

    //Updating Font Color
    var $font = $('.container');
    var $bgColor = $('body')

    var bgColor = getParameterByName("bg-color");
    var fontColor = getParameterByName("font-color");
    var fontUnderline = getParameterByName("font-underline");

    $font.css("color", fontColor)
        // $font.css("style", fontUnderline)
    $bgColor.css("background-color", bgColor)

    function countDown() {
        var today = new Date();

        var deadline;
        var CountDownDate = getParameterByName("date");
        if (CountDownDate == null) {
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hrs').innerHTML = '00';
            document.getElementById('min').innerHTML = '00';
            document.getElementById('sec').innerHTML = '00';

        } else if (CountDownDate != "nov 2, 2020 15:37:25") {
            deadline = CountDownDate;

            deadline = new Date(Date.parse(new Date(deadline)));


            var CurrentTime = today.getTime();
            var deadlineTime = deadline.getTime();

            var remTime = deadlineTime - CurrentTime

            var days = getParameterByName("days");
            var hours = getParameterByName("hours");
            var minutes = getParameterByName("minutes");
            var seconds = getParameterByName("seconds");
            var units = getParameterByName("units");

            if (units == "false") {
                console.log("In units");
                $("#da").css("display", "none");
                $("#hr").css("display", "none");
                $("#mins").css("display", "none");
                $("#secs").css("display", "none");
            }
            if (days == "false") {
                $("#days").css("display", "none");
                $("#da").css("display", "none");
            }
            if (hours == "false") {
                $("#hrs").css("display", "none");
                $("#hr").css("display", "none");
            }
            if (minutes == "false") {
                $("#min").css("display", "none");
                $("#mins").css("display", "none");
            }
            if (seconds == "false") {
                $("#sec").css("display", "none");
                $("#secs").css("display", "none");
            }


            // console.log(remTime);

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

            if (days < 1) {
                days = '00';
            }
            if (hrs < 1) {
                hrs = '00';
            }
            if (min < 1) {
                min = '00';
            }

            document.getElementById('days').innerHTML = days;
            document.getElementById('hrs').innerHTML = hrs;
            document.getElementById('min').innerHTML = min;
            document.getElementById('sec').innerHTML = sec;

            if (remTime < 0) {
                clearTimeout();
                document.getElementById("days").innerHTML = '00';
                document.getElementById("hrs").innerHTML = '00';
                document.getElementById("min").innerHTML = '00';
                document.getElementById("sec").innerHTML = '00';
            }

            setTimeout(countDown, 1000);

        }

    }

    countDown();



}