//IMG 1
var $Title1 = $('#slide_1');
var $Img1 = $('#img_1');

var head1 = getParameterByName("title_1");
var Img1 = getParameterByName("imgage_1");

$Title1.html(head1);
// $Img1.html(`<img src="${Img1}"/>`);
// // $("#img_1").append(`<img src="${Img1}" />`);
$divclass=$('#img_1');
<style>
$divclass.html({
    background-image: url(${Img1});
})
</style>



//IMG 2
var $Title2 = $('#slide_2');
var $Img2 = $('#img_2');

var head2 = getParameterByName("title_2");
var Img2 = getParameterByName("imgage_2");

$Title2.html(head2);
$Img2.html(`<img src="${Img2}"/>`);


//IMG 3
var $Title3 = $('#slide_3');
var $Img3 = $('#img_3');

var head3 = getParameterByName("title_3");
var Img3 = getParameterByName("imgage_3");

$Title3.html(head3);
$Img3.html(`<img src="${Img3}"/>`);


//IMG 4
var $Title4 = $('#slide_4');
var $Img4 = $('#img_4');

var head4 = getParameterByName("title_4");
var Img4 = getParameterByName("imgage_4");

$Title4.html(head4);
$Img4.html(`<img src="${Img4}"/>`);