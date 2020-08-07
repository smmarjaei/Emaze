// SET TIMER HERE 

// function getParameterByName(name, defaultVal) {
//     var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

//     return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : defaultVal;
// };


var ClockType = getParameterByName("clock-type");
if (ClockType == "Square") {

    // Sun Sep 02 2020 20:28:00 GMT+0300 (Israel Daylight Time)
    var deadline;
    var CountDownDate = getParameterByName("date"); 
    console.log(CountDownDate);
    if(CountDownDate!="nov 2, 2020 15:37:25"){
        deadline=CountDownDate;
    }
    else{
        deadline="nov 2, 2020 15:37:25";
    }
    // deadline = new Date(Date.parse(new Date("nov 2, 2020 15:37:25"))); //SUPPORT FOR THREE DIGIT DAYS NEEDED
    var c = new Clock(deadline, function() { alert('countdown complete') });
    document.body.appendChild(c.el);

    // console.log("TESTING");
    var $cardTop = $('.card__top');
    var $cardBottom = $('.card__bottom');
    var $cardBack = $('.card__back');
    var $flip = $('.flip');

    var fontColor = getParameterByName("font-color");
    $cardTop.css("color", fontColor);
    $cardBottom.css("color", fontColor);
    $cardBack.css("color", fontColor);
    $flip.css("color", fontColor);

    var fontWeight = getParameterByName("font-underline");
    $flip.css("font-weight", fontWeight)

    function CountdownTracker(label, value) {

        var el = document.createElement('span');

        el.className = 'flip-clock__piece';
        el.innerHTML = '<b id="' + label + '" class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
            '<span class="flip-clock__slot">' + label + '</span>';

        this.el = el;

        var top = el.querySelector('.card__top'),
            bottom = el.querySelector('.card__bottom'),
            back = el.querySelector('.card__back'),
            backBottom = el.querySelector('.card__back .card__bottom');

        this.update = function(val) {
            val = ('0' + val).slice(-2);
            if (val !== this.currentValue) {

                if (this.currentValue >= 0) {
                    back.setAttribute('data-value', this.currentValue);
                    bottom.setAttribute('data-value', this.currentValue);
                }
                this.currentValue = val;
                top.innerText = this.currentValue;
                backBottom.setAttribute('data-value', this.currentValue);

                this.el.classList.remove('flip');
                void this.el.offsetWidth;
                this.el.classList.add('flip');
            }
        }

        this.update(value);
    }

    // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        return {
            'Total': t,
            'Days': Math.floor(t / (1000 * 60 * 60 * 24)),
            'Hours': Math.floor((t / (1000 * 60 * 60)) % 24),
            'Minutes': Math.floor((t / 1000 / 60) % 60),
            'Seconds': Math.floor((t / 1000) % 60)
        };
    }

    function getTime() {
        var t = new Date();
        return {
            'Total': t,
            'Hours': t.getHours() % 12,
            'Minutes': t.getMinutes(),
            'Seconds': t.getSeconds()
        };
    }

    function Clock(countdown, callback) {

        countdown = countdown ? new Date(Date.parse(countdown)) : false;
        callback = callback || function() {};

        var updateFn = countdown ? getTimeRemaining : getTime;

        this.el = document.createElement('div');
        this.el.className = 'flip-clock';

        var trackers = {},
            t = updateFn(countdown),
            key, timeinterval;

        for (key in t) {
            if (key === 'Total') { continue; }
            trackers[key] = new CountdownTracker(key, t[key]);
            this.el.appendChild(trackers[key].el);
        }

        var i = 0;

        function updateClock() {
            timeinterval = requestAnimationFrame(updateClock);

            // throttle so it's not constantly updating the time.
            if (i++ % 10) { return; }

            var t = updateFn(countdown);
            if (t.Total < 0) {
                cancelAnimationFrame(timeinterval);
                for (key in trackers) {
                    trackers[key].update(0);
                }
                callback();
                return;
            }

            for (key in trackers) {
                trackers[key].update(t[key]);
            }
        }

        setTimeout(updateClock, 500);
    }
}