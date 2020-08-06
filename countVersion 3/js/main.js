function getParameterByName(name, defaultVal) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

    return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : defaultVal;
};

var mainDiv = $('#test');
var sidDiv = $('#notest');

$("#notest").css("display", "none");
$("#test").css("display", "none");
console.log(getParameterByName("clock-type"));

// var date = getParameterByName("date");

var deadline = new Date(Date.parse(new Date("nov 2, 2020 15:37:25"))); //SUPPORT FOR THREE DIGIT DAYS NEEDED
var c = new Clock(deadline, function() { alert('countdown complete') });
document.body.appendChild(c.el);


switch(getParameterByName("clock-type")) {
    case "test":
        $("#test").css("display", "block");
        $("#notest").css("display", "none");
    case "notest":
        $("#test").css("display", "none");
        $("#notest").css("display", "block");
    default:
        $("#notest").css("display", "none");
        $("#test").css("display", "none");

}


