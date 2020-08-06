var SlickCarousel = (function() {

    var recObj; // object received from url params.
    var $variable; // the slick carousel pointer.
    var enlargeObject = { arr: [], startIndex: "0" }; // the object that we send when we click on one of the images.
    var autoplayBool = false, hoverBool = false, loopBool = false;

function init() {

    $variable = $('.variable');
    // the object that we get from params. this object contains objects that has title,description,url of images.
    recObj = {
        //imageArr: JSON.parse(getParameterByName("imageArray"))
        imageArr: globalObj.globalImageArr
    //imageArr: JSON.parse(decodeURIComponent(window.location.hash.replace('#', '')))
    };
    //window.history.replaceState(null, null, window.location.pathname); // this removes all the url params from the url. if the query string is too long then we get 400 bad request.

    var autoplay = getParameterByName("autoplay");
    var hover = getParameterByName("hover");
    var loop = getParameterByName("loop");
    var autospeed = + getParameterByName("speed");
    //autospeed = 3;

     var template = '<div class="slick-slide"> <a class="a-container"> <img src="@url" alt=""> </a> <div class="texts"> <div class="title">@title</div> <div class="description">@description</div> </div> </div>';
     var videoTemplate = '<div class="slick-slide video-slide"> <a class="a-container"> <div class="video-wrapper"> <button class="video-play"></button>  <video  src="@url"></video> </div> </a> <div class="texts"> <div class="title">@title</div> <div class="description">@description</div> </div> </div>';

    // var template = `<div class="slick-slide"> <a class="a-container"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"> </a> <div class="texts"> <div class="title">title sdfsadfsadsajudlisjdlksaj</div> <div class="description">description</div> </div> </div>`;
    var mhtml = '';
    $.each(recObj.imageArr,
        function (i, val) {
            var isVideo = val.url.indexOf('.mp4') !== -1;
            var aTemplate = (isVideo ? videoTemplate : template).replace("@active", i == 0 ? "active" : "").replace("@title", val.title).replace("@description", val.description).replace("@url", val.url);
            mhtml = mhtml + aTemplate;

            //enlargeObject.arr.push(new widgetClasses.CarouselItemImage(val.url, val.title, val.description));

            if (isVideo) {
                var videoItemObject = new widgetClasses.CarouselItemVideo();
                videoItemObject.href = val.url;
                videoItemObject.title = val.title;
                videoItemObject.description = val.description;
                videoItemObject.setType(val.url);
                enlargeObject.arr.push(videoItemObject);
            } else {
                var imageItemObject = new widgetClasses.CarouselItemImage();
                imageItemObject.href = val.url;
                imageItemObject.title = val.title;
                imageItemObject.description = val.description;
                imageItemObject.setType(val.url);
                enlargeObject.arr.push(imageItemObject);
            }
        });

    $variable.append($(mhtml));

    
    var countSlidesToShow = (recObj.imageArr.length) - 1; // there is a bug when infinite: true, variableWidth: true ,  slidesToShow: 1 that we get a gap when we get to the end of the slides. thats how i fixed it.
    // ref https://github.com/kenwheeler/slick/issues/1207#issuecomment-250318615
    //and I removed cssEase: 'linear'. there are some bugs with it.
    if (countSlidesToShow <= 0) { // if there is no slides 
        countSlidesToShow = 1; // the default is 1
    }

    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (iOS) {
        $("body").addClass("slick-slide-ios-fix"); // iphone fix: the carusel was not visible in iphone.
        // look at https://stackoverflow.com/questions/23083462/how-to-get-an-iframe-to-be-responsive-in-ios-safari
        // and this https://www.spacevatican.org/2015/4/7/on-mobile-safari-and-iframes/
    }

    if (autoplay == "true") autoplayBool = true;
    if (hover == "true") hoverBool = true;
    if (loop == "true") loopBool = true;

    if (autoplayBool) {
        $variable.slick({
            prevArrow: "<img class='a-left control-c prev slick-prev' src='images/arrow-left.png'>",
            nextArrow: "<img class='a-right control-c next slick-next' src='images/arrow-right.png'>",
            infinite: loopBool,
            variableWidth: true,
            centerMode: true,
            slidesToShow: countSlidesToShow,
            autoplay: true,
            autoplaySpeed: autospeed * 1000,
            pauseOnHover: hoverBool,
            speed: 300
        });
    }
    else {
        $variable.slick({
            prevArrow: "<img class='a-left control-c prev slick-prev' src='images/arrow-left.png'>",
            nextArrow: "<img class='a-right control-c next slick-next' src='images/arrow-right.png'>",
            infinite: loopBool,
            variableWidth: true,
            centerMode: true,
            slidesToShow: countSlidesToShow,
            speed: 300
        });
    }

    /*$('.slick-slide').each(function() {
        var $this = $(this);
        $this.on("click", function () {
            enlargeObject.startIndex = $(this).data('slick-index'); // get the index of the clicked image.
            var sendReq = JSON.stringify({ messageType: "enlargeSlickCarousel", carouselData: enlargeObject }); // enlarge
            window.parent.postMessage(sendReq, '*'); // send the message to the player.
        });
    });*/

    $(".slider").on("click", ".slick-slide:not(.video-slide)", function (event) { // put the event listener on the parent        
        //enlargeObject.startIndex = event.target.parentElement.parentElement.dataset.slickIndex; // get the index of the clicked image.
        enlargeObject.startIndex = this.dataset.slickIndex; // get the index of the clicked image. // this is faster then $(this).data("slick-index")
        var sendReq = JSON.stringify({ messageType: "enlargeSlickCarousel", carouselData: enlargeObject }); // enlarge
        window.parent.postMessage(sendReq, '*'); // send the message to the player.
    });

    $('.variable').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var $currentSlide = $('.slick-current');
        if ($currentSlide.is('.video-slide')) {
            var video = $('.slick-current').find('video')[0];
            video.pause();
            video.currentTime = 0;
            video.removeAttribute("controls");
            $currentSlide.find('.video-play').show();
        }
    });

    $('.video-play').click(function () {
        var video = $(this).siblings('video')[0];
        video.play();
        video.setAttribute("controls", "controls");   
        $(this).hide();
    });


    //(this.dataset.points
}

    function getParameterByName(name, defaultVal) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

        return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : defaultVal;
    }
    /**
     * @description Not supplying a value will remove the parameter, supplying one will add/update the parameter. If no URL is supplied, it will be grabbed from window.location
     * @link http://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
     * @param {} key 
     * @param {} value 
     * @param {} url 
     * @returns {} 
     */
    function UpdateQueryString(key, value, url) {
        if (!url) url = window.location.href;
        //if (!url) url = window.location.search;
        var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
            hash;

        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null)
                return url.replace(re, '$1' + key + "=" + value + '$2$3');
            else {
                hash = url.split('#');
                url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
        }
        else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?';
                hash = url.split('#');
                url = hash[0] + separator + key + '=' + value;
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
            else
                return url;
        }
    }

    /**
     * @description Receive Message, the convention is every json has send and receive has has a messageType in the json and it is the same in both send and receive.
     * @example The sent object is JSON.stringify({ messageType: "isEditor"}); then the received side parse the json and ask if data.messageType === "isEditor" if he reply back,
     * then the he send the reply back with the same messageType and the receiving side will check data.messageType === "isEditor".
     * for a live example check instafeed.js and editor.api.js
     * 
     * @param {} message
     * @returns {} 
     */
    function receiveMessage(message) {
        /*if (message.origin !== "https://app.emaze.com" && message.origin !== "http://app.emaze.com" && message.origin !== "https://resources.emaze.com" && message.origin !== "http://resources.emaze.com" && message.origin !== "https://www.emaze.com" && message.origin !== "http://www.emaze.com" && message.origin !== "http://emaze.me" && message.origin !== "http://localhost:44301") // if not our domains return! may be an attack!
            return;*/

        try {
            //var data = JSON.parse(message.data);
            var data = widgetUtil.tryParseJSON(message.data);

            if (data === false)
                return;


        } catch (e) {

        }
    }

    window.addEventListener("message", receiveMessage, false);

    

return{
    init: init
}

})();


