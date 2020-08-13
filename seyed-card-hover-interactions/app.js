//CARD 1
var $Heading1 = $('#heading_1');
var $Para1 = $('#body_1');
var $Button1 = $('#button_1');

var Title1 = getParameterByName("title_1");
var Info1 = getParameterByName("desc_1");
var Btn1 = getParameterByName("btn_1");
var Img1 = getParameterByName("img_1");

$Heading1.html(Title1);
$Para1.html(Info1);
$Button1.html(Btn1);
$("#card_1").append(`<style> .card:nth-child(1):before { 
    background-image: url(${Img1});
}
</style>`);


//CARD 2
var $Heading2 = $('#heading_2');
var $Para2 = $('#body_2');
var $Button2 = $('#button_2');

var Title2 = getParameterByName("title_2");
var Info2 = getParameterByName("desc_2");
var Btn2 = getParameterByName("btn_2");
var Img2 = getParameterByName("img_2");

$Heading2.html(Title2);
$Para2.html(Info2);
$Button2.html(Btn2);
$("#card_2").append(`<style> .card:nth-child(2):before { 
    background-image: url(${Img2});
}
</style>`);


//CARD 3
var $Heading3 = $('#heading_3');
var $Para3 = $('#body_3');
var $Button3 = $('#button_3');

var Title3 = getParameterByName("title_3");
var Info3 = getParameterByName("desc_3");
var Btn3 = getParameterByName("btn_3");
var Img3 = getParameterByName("img_3");

$Heading3.html(Title3);
$Para3.html(Info3);
$Button3.html(Btn3);
$("#card_3").append(`<style> .card:nth-child(3):before { 
    background-image: url(${Img3});
}
</style>`);



//CARD 4
var $Heading4 = $('#heading_4');
var $Para4 = $('#body_4');
var $Button4 = $('#button_4');

var Title4 = getParameterByName("title_4");
var Info4 = getParameterByName("desc_4");
var Btn4 = getParameterByName("btn_4");
var Img4 = getParameterByName("img_4");

$Heading4.html(Title4);
$Para4.html(Info4);
$Button4.html(Btn4);
$("#card_4").append(`<style> .card:nth-child(4):before { 
    background-image: url(${Img4});
}
</style>`);