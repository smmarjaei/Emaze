// function getParameterByName(name, defaultVal) {
//     var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

//     return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : defaultVal;
// };


function countDown() {
    var today = new Date();
    var deadline = new Date("December 3, 2020 00:00:00");

    var CurrentTime = today.getTime();
    var deadlineTime = deadline.getTime();

    var remTime = deadlineTime - CurrentTime

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