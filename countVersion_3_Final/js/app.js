var SlickCarousel = (function() {

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

})();