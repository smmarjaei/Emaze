function getParameterByName(name, defaultVal) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

    return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : defaultVal;
};


var ClockType = getParameterByName("clock-type");
if (ClockType == "Clocks") {
    var deadline;
    var CountDownDate = getParameterByName("date");
    console.log(CountDownDate);
    if (CountDownDate != "nov 2, 2020 15:37:25") {
        deadline = CountDownDate;
    }
    else {
        deadline = "nov 2, 2020 15:37:25";
    }
    // var bgColor = getParameterByName("bg-color");
    // var fontColor = getParameterByName("font-color");
    // var fontUnderline = getParameterByName("font-underline");
    // $divClass = $('.clock-container');
    // $divClass.css({
    //     'background-color': bgColor,
    //     'color': fontColor,
    //     'Font Style':font-underline
    // })

    // $divClass = $('.clock-timer');
    // $divClass.css({
    //     'color': fontColor,
    //     'Font Style':font-underline
    // })
    
    $(function() {
    $('.chart').easyPieChart({
        // The color of the curcular bar. You can pass either a css valid color string like rgb, rgba hex or string colors. But you can also pass a function that accepts the current percentage as a value to return a dynamically generated color.
        barColor: '#ef1e25',
        // The color of the track for the bar, false to disable rendering.
        trackColor: '#f2f2f2',
        // The color of the scale lines, false to disable rendering.
        scaleColor: '#dfe0e0',
        // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
        lineCap: 'round',
        // Width of the bar line in px.
        lineWidth: 8,
        // Size of the pie chart in px. It will always be a square.
        size: 110,
        // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
        animate: 1000,
        // Callback function that is called at the start of any animation (only if animate is not false).
        onStart: $.noop,
        // Callback function that is called at the end of any animation (only if animate is not false).
        onStop: $.noop

    });


    //var deadline = new Date("nov 1, 2020 15:37:25").getTime();

    var x = setInterval(function() {

        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;


        var dayPercent = Math.floor((days / 365) * 100)
        $('#chartDay').data('easyPieChart').update(dayPercent);

        var hourPercent = Math.floor((hours / 24) * 100)
        $('#chartHour').data('easyPieChart').update(hourPercent);

        var minutePercent = Math.floor((minutes / 60) * 100)
        $('#chartMinute').data('easyPieChart').update(minutePercent);

        var secondsPercent = Math.floor((seconds / 60) * 100)
        $('#chartSecond').data('easyPieChart').update(secondsPercent);


        if (t < 0) {
            clearInterval(x);
            document.getElementById("timeRemaining").innerHTML = "TIME UP";
            document.getElementById("day").innerHTML = '0';
            document.getElementById("hour").innerHTML = '0';
            document.getElementById("minute").innerHTML = '0';
            document.getElementById("second").innerHTML = '0';
        }

    }, 1000);


});
}
