var SlickCarousel = (function () {

    function getParameterByName(name, defaultVal) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

        return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : defaultVal;
    };


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

    // $divClass = $('.card__top');
    //         console.log($divClass);
    //         $divClass.css({
    //             'background-color': bgColor,
    //             'color': fontColor
    //         })



    var bgColor = getParameterByName("bg-color");
    var fontColor = getParameterByName("font-color");
    var fontUnderline = getParameterByName("font-underline");
    var CountDownDate = getParameterByName("date");
    $divClass = $('.clock-styles');
    $divClass.css({
        'background-color': bgColor,
        'color': fontColor,
        'Font Style':font-underline,
        'CountDownDate':date
    })
    var fontSize = getParameterByName("font-size");
    var textAlign = getParameterByName("text-align");


    // $count.append(date);
    // $count.click(() => window.open(link, '_blank'));
    // $count.css({
    //     'font-size': fontSize + 'px',
    //     'text-align': textAlign,
    //     'background-color': bgColor,
    //     'color': fontColor,
    //     'font-style': fontItalic === "italic" ? 'italic' : 'normal',
    //     width: '100%',
    //     height: 'calc(100vh - 16px)',
    //     border: 'none',
    //     outline: 'none'
    // });

    // $count.hover(function() {
    //     $(this).css({
    //         'background-color': bgColorHover,
    //         'color': fontColorHover,
    //         'font-weight': fontBoldHover === "bold" ? 'bold' : 'normal',
    //         'font-style': fontItalicHover === "italic" ? 'italic' : 'normal',
    //     });
    // }, function() {
    //     $(this).css({
    //         'background-color': bgColor,
    //         'color': fontColor,
    //         'font-weight': fontBold === "bold" ? 'bold' : 'normal',
    //         'font-style': fontItalic === "italic" ? 'italic' : 'normal'
    //     });
    // });

})();