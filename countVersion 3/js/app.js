var SlickCarousel = (function() {

    // function getParameterByName(name, defaultVal) {
    //     var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

    //     return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : defaultVal;
    // };


    // var $count = $('#styles');
    var ClockType = getParameterByName("clock-type");

    switch (ClockType) {
        case "Extended":
            console.log("inside Extended...");
            $("#Extended").css("display", "block");
            $("#Sports").css("display", "none");
            $("#Square").css("display", "none");
            $("#Clocks").css("display", "none");
            $("#Digital").css("display", "none");
            break;
        case "Sports":
            console.log("inside Sports...");
            $("#Extended").css("display", "none");
            $("#Sports").css("display", "block");
            $("#Square").css("display", "none");
            $("#Clocks").css("display", "none");
            $("#Digital").css("display", "none");
            break;
        case "Square":
            console.log("inside Square...");
            $("#Extended").css("display", "none");
            $("#Sports").css("display", "none");
            $("#Square").css("display", "block");
            $("#Clocks").css("display", "none");
            $("#Digital").css("display", "none");

            break;
        case "Clocks":
            console.log("inside Clocks...");
            $("#Extended").css("display", "none");
            $("#Sports").css("display", "none");
            $("#Square").css("display", "none");
            $("#Clocks").css("display", "block");
            $("#Digital").css("display", "none");
            break;
        case "Digital":
            console.log("inside Digital...");
            $("#Extended").css("display", "none");
            $("#Sports").css("display", "none");
            $("#Square").css("display", "none");
            $("#Clocks").css("display", "none");
            $("#Digital").css("display", "block");
            break;
        default:
            console.log("inside Default case...");
            $("#Extended").css("display", "none");
            $("#Sports").css("display", "none");
            $("#Square").css("display", "none");
            $("#Clocks").css("display", "none");
            $("#Digital").css("display", "none");
    }


    var bgColor = getParameterByName("bg-color");
    var fontColor = getParameterByName("font-color");
    var fontUnderline = getParameterByName("font-underline");
    var CountDownDate = getParameterByName("date");
    $divClass = $('.clock-styles');
    $divClass.css({
        'background-color': bgColor,
        'color': fontColor,
        'Font Style': font - underline,
        'CountDownDate': date,

    })
    var fontSize = getParameterByName("font-size");
    var textAlign = getParameterByName("text-align");

})();