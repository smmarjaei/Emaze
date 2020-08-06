var SlickCarousel = (function() {

    function getParameterByName(name, defaultVal) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

        return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : defaultVal;
    };

    // var $count = $('#styles');
    // var ClockType = getParameterByName("clock-type");

    // switch (getParameterByName("clock-type")) {
    //     case "Extended":
    //         $("#Extended").css("display", "block");
    //         $("#Sports").css("display", "none");
    //         $("#Square").css("display", "none");
    //         $("#Clocks").css("display", "none");
    //         $("#Digital").css("display", "none");
    //     case "Sports":
    //         $("#Extended").css("display", "none");
    //         $("#Sports").css("display", "block");
    //         $("#Square").css("display", "none");
    //         $("#Clocks").css("display", "none");
    //         $("#Digital").css("display", "none");
    //     case "Square":
    //         $("#Extended").css("display", "none");
    //         $("#Sports").css("display", "none");
    //         $("#Square").css("display", "block");
    //         $("#Clocks").css("display", "none");
    //         $("#Digital").css("display", "none");
    //     case "Clocks":
    //         $("#Extended").css("display", "none");
    //         $("#Sports").css("display", "none");
    //         $("#Square").css("display", "none");
    //         $("#Clocks").css("display", "block");
    //         $("#Digital").css("display", "none");
    //     case "Digital":
    //         $("#Extended").css("display", "none");
    //         $("#Sports").css("display", "none");
    //         $("#Square").css("display", "none");
    //         $("#Clocks").css("display", "none");
    //         $("#Digital").css("display", "block");
    //     default:
    //         $("#Extended").css("display", "none");
    //         $("#Sports").css("display", "none");
    //         $("#Square").css("display", "none");
    //         $("#Clocks").css("display", "none");
    //         $("#Digital").css("display", "none");
    // }


    var bgColor = getParameterByName("bg-color");
    var fontColor = getParameterByName("font-color");

    $divClass = $('clock-styles');
    $divClass.css({
        'background-color': bgColor,
        'color': fontColor
    })
    var fontSize = getParameterByName("font-size");
    var textAlign = getParameterByName("text-align");

    var fontUnderline = getParameterByName("font-underline");

    $count.append(date);
    $count.click(() => window.open(link, '_blank'));
    $count.css({
        'font-size': fontSize + 'px',
        'text-align': textAlign,
        'background-color': bgColor,
        'color': fontColor,
        'font-style': fontItalic === "italic" ? 'italic' : 'normal',
        width: '100%',
        height: 'calc(100vh - 16px)',
        border: 'none',
        outline: 'none'
    });

    $count.hover(function() {
        $(this).css({
            'background-color': bgColorHover,
            'color': fontColorHover,
            'font-weight': fontBoldHover === "bold" ? 'bold' : 'normal',
            'font-style': fontItalicHover === "italic" ? 'italic' : 'normal',
        });
    }, function() {
        $(this).css({
            'background-color': bgColor,
            'color': fontColor,
            'font-weight': fontBold === "bold" ? 'bold' : 'normal',
            'font-style': fontItalic === "italic" ? 'italic' : 'normal'
        });
    });

})();