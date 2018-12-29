$(document).ready(function(){

//Get Page Title
function pageControl(){
    var pageTitle = $(document).find("title").text();
    $('h1').text(pageTitle);
    var headerHeight = $('header').outerHeight();
    $('.wrapper').css('padding-top', headerHeight);
    $('.sidebar').css('top',headerHeight);   
}

pageControl();



//Navigation
$('.nav > ul > li > a').click(function(){
    $('.level2').slideUp(100);
    if($(this).next('.level2').css('display') == 'block'){
       $(this).next('.level2').slideUp(100);
    }
    else{
        $(this).next('.level2').slideDown(100);            
    }
});


//Sidebar and content section toggline
$('.sidebar-toggle').click(function () {
    $('.wrapper').toggleClass('sidebar-collapsed');
    $('.collapse').removeAttr('style');
    $('.level1').removeClass('active');
});

function windowResizeHandler() {
    if ($(window).width() < 992) {
        $('.wrapper').addClass('sidebar-collapsed');
    }
    else {
        $('.wrapper').removeClass('sidebar-collapsed');
    }
}
windowResizeHandler();



//SideBar Accordion
$('.has-child').click(function () {
    var tPos = $(this).position().top;

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }
    else {
        $('.level1').removeClass('active');
        $(this).addClass('active');
    }

    $('.collapse').slideUp(200);

    if ($(this).next('.collapse').css('display') == 'block') {
        $(this).next('.collapse').slideUp(200);
    }
    else {
        $(this).next('.collapse').slideDown(200);
    }

    if ($('.wrapper').hasClass('sidebar-collapsed')) {
        $('.collapse').css('top', tPos);
    }
});


//Show Related modal popup
$('.sidebar a').click(function(){
    var dataID = $(this).attr('data-id');
    $("#"+dataID).removeClass('hide');
});



//Tab Code
$('.tabs a').click(function(){
    var tab_id = $(this).attr('tab-id');
    
    $('.tabs a').removeClass('active');
    $('.tabWrapper').removeClass('active');
    $(this).addClass('active');
    $('#'+tab_id).addClass('active');
});

//SelectWrapper
$('.tabSelect').change(function(){
    $(this).addClass('active');
    var thisVal = $(this).val();
    $('.tabContainer .tabWrap').removeClass('active');
    $("#"+thisVal).addClass('active');   
});


//First Accordion
$('.FirstAccord > a').click(function(){ 
    var dataAcc = $(this).attr('data-acc');
    
    if($(this).hasClass('active')){            
       $(this).removeClass('active');
    }
    else{
        $('.FirstAccord > a').removeClass('active');
        $(this).addClass('active');     
    }

    $('.accWrapper').slideUp(200);
    if($('#'+dataAcc).css('display') == 'block'){
        $('#'+dataAcc).slideUp(200);
    }
    else{
      $('#'+dataAcc).slideDown(200);  
    }    
       
});

//Second Accordion
$('.SecondAccord > a').click(function(){             
    if($(this).hasClass('active')){            
       $(this).removeClass('active');
    }
    else{
        $('.SecondAccord > a').removeClass('active');
        $(this).addClass('active');     
    }
    $('.accWrap').slideUp(200);
    if($(this).next('.accWrap').css('display') == 'block'){
       $(this).next('.accWrap').slideUp(200);
    }
    else{
        $(this).next('.accWrap').slideDown(200);            
    }
});


//Responsive Tabs
$('.ResTabs ul li:first a').addClass('active');

$('.ResTabs ul li a').click(function() {
    var dataTab = $(this).attr('data-tab');
    $('.ResTabs ul li a').removeClass('active');
    $(this).addClass('active');
    $('.tabKent').removeClass('active');    
    $('#'+dataTab).addClass('active');   
});

$('.ResTabs ul li a').each(function(){     
    var dataTab = $(this).attr('data-tab');   
    if($(this).hasClass('active')){
        $('#'+dataTab).addClass('active');
    }       
});

$('.tabKent').each(function(index){
    var thisID = $(this).attr('id');
    $(this).before(`<a href="javascript:void(0)" class="tabAccord" dataAcc-id="${(thisID)}">${$('[data-tab='+thisID+']').text()}</a>`);
});



$('.tabAccord').click(function(){
    var dataTab = $(this).attr('dataAcc-id');

    if($(this).hasClass('active')){            
       $(this).removeClass('active');
    }
    else{
        $('.tabAccord').removeClass('active');
        $(this).addClass('active');     
    }

    $('.tabKent').slideUp(200);
    if($('#'+dataTab).css('display') == 'block'){
        $('#'+dataTab).slideUp(200);
    }
    else{
      $('#'+dataTab).slideDown(200);  
    }  
});


$(window).resize(function(){
    setTimeout(function () {
        $('.tabKent').each(function(){
        var tabID = $(this).attr('id');
        if ($(window).width() <= 992) {
            if($(this).hasClass('active')){
                $('.tabKent').removeClass('active');
                $('.tabAccord').removeClass('active');
                $('.tabAccord[dataAcc-id='+tabID+']').addClass('active');
                $(this).css('display','block');
            }
        }

        if ($(window).width() > 992) {
            if($(this).css('display') == 'block'){
                $(this).removeAttr('style');                
                $('.ResTabs ul li a').removeClass('active');
                $('.tabAccord').removeClass('active');
                $('.ResTabs ul li a[data-tab='+tabID+']').addClass('active');
                $(this).addClass('active');             
            }
        }       
    }); 
    },0);
});



//Social Slider code
var xSocial = [ "FB", "T", "G", "I", "Y" ];
var cSocial = [ "Facebook", "Twitter", "Google", "Instagram", "YouTube" ];
var BG = [ "#3b5998", "#1da1f2", "#679e37", "#262626", "#e42b26" ];


$('.SocialSlider > div').each(function (index) {
    $(this).find('a').text(xSocial[index]).css('background-color', BG[index]);
    $(this).find('span').text(cSocial[index]).css('background-color', BG[index]);
});

$('.SocialSlider a').click(function(){    
    if($(this).parent('.social').hasClass('move')){
        $(this).parent('.social').removeClass('move');
    }
    else{
        $('.social').removeClass('move');
        $(this).parent('.social').addClass('move');  
    }               
});



//DashBoard Slider
$('.DashSlider ul li a').each(function(i, e) {       
    i = i+1;
    $(this).attr( 'data-db', 'slide_' + i);              
});    
 
$('.DashSlider .SlideDiv').each(function( i, e) {       
    i = i+1;
    $(this).attr('id', 'slide_' + i);              
});    


$('.DashSlider ul li a').click(function(){
    var Dash_ID = $(this).attr('data-db');        
    $(".SlideDiv").removeClass('show');

    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(".SlideDiv").removeClass('show');           
    }
    else{
        $('.DashSlider ul li a').removeClass('active');
        $(this).addClass('active');
        $("#" + Dash_ID).addClass('show');
    }
});


// tooltip
var winHeight = $(window).height();
var winWidth = $(window).width();

$('a[data-placement]')
.mouseenter(function() {
    var titleTip = $(this).attr("data-title");

    var tipPlace = $(this).attr("data-placement");

    var x = $(this).position();

    var h = $(this).outerHeight();

    var w = $(this).outerWidth();           

    $("body").append("<div class='tooltip'></div>");

    $(".tooltip").text(titleTip);        

    var ht = $(".tooltip").outerHeight();
    
    var wt = $(".tooltip").outerWidth();

    //Replace data-placement attribute if there is no space
    if(tipPlace == "left" && x.left < wt){
        $(this).attr("data-placement", "right");
    }

    if(tipPlace == "right" && x.left > winWidth - w - wt){
        $(this).attr("data-placement", "left");
    }

    if(tipPlace == "top" && x.top < ht){
        $(this).attr("data-placement", "bottom");
    }

    if(tipPlace == "bottom" && x.top > winHeight - ht){
        $(this).attr("data-placement", "top");          
    }

    //Mobile Tooltip
    if(winWidth < w + wt){
        $(this).attr("data-placement", "top");          
    }
      

    //Tooltip Top Direction
    if($(this).attr("data-placement") == "top"){
        $(".tooltip").addClass("top").css({
            "top" : x.top - ht -8,
            "left" : x.left + (w - wt)/2
        });                
    }

    //Tooltip Right Direction
    else if($(this).attr("data-placement") == "right"){
        $(".tooltip").addClass("right").css({
            "top" : x.top + (h - ht)/2,
            "left" : x.left + w + 8
        });               
    }

    //Tooltip Bottom Direction
    else if($(this).attr("data-placement") == "bottom"){
        $(".tooltip").addClass("bottom").css({
            "top" : x.top + ht + 8,
            "left" : x.left + (w - wt)/2
        });               
    }

    //Tooltip Left Direction
    else if($(this).attr("data-placement") == "left"){
        $(".tooltip").addClass("left").css({
            "top" : x.top + (h - ht)/2,
            "left" : x.left - wt - 8
        });                
    }

    //Default Tooltip direction will be top
    else{
        $(".tooltip").addClass("top").css({
            "top" : x.top - ht,
            "left" : x.left + (w - wt)/2
        });
    } 

}).mouseleave(function() {       
    $(".tooltip").remove();
});


//Form Submit
$('form[name="myForm"]').submit(function() {

  if($('[name=fname]').val().length == 0){
    alert('Please Enter Your First Name');        
    return false;
  }

  else if($('[name=lname]').val().length == 0){
    alert('Please Enter Your Last Name');        
    return false;
  }

  else if($('[name=username]').val().length == 0){
    alert('Please Enter Your User Name');        
    return false;
  }

  //Email Validation
    var xEmail = $('[name=email]').val();
    var atpos = xEmail.indexOf("@");
    var dotpos = xEmail.lastIndexOf(".");

  if($('[name=email]').val().length == 0){
    alert('Please Enter Email Address');        
    return false;
  } 

  else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Not a valid e-mail address");
    return false;
 }      

  else if($('[name=phone]').val().length == 0){
    alert('Please Enter Your Phone Number');        
    return false;
  }

  else if($('[name=phone]').val().length != 10){
    alert('Please Enter 10 Digit Mobile Number');        
    return false;
  }

  else if($('[name=country]').val() == -1){
    alert('Please Enter Your Country');        
    return false;
  }

  else if($('[name=state]').val() == -1){
    alert('Please Enter Your State');        
    return false;
  }

  else if($('[name=city]').val() == -1){
    alert('Please Enter Your City');        
    return false;
  }

  else if($('[name=Zip]').val().length == 0){
    alert('Please Enter Your Zip Code');        
    return false;
  }

return true;

});

//Check List
$('input[value="Select All"]').change(function(){
    $(".checklist input").prop('checked', $(this).prop("checked"));
});


$('.checklist input')
.each(function (i, e) {
    i =  i + 1;
    $(this).attr("value", "Option " + i);      

}).change(function(){    
    if(false == $(this).prop("checked")){
        $('input[value="Select All"]').prop('checked', false);
    }
   
    if ($('.checklist input:checked').length == $('.checklist input').length ){
        $('input[value="Select All"]').prop('checked', true);
    }
});


//Exapndible / Collapsbile Table
$('.expandRow').click(function () {    
    $(this).toggleClass('active');
    $(this).closest('.headRow').nextUntil('tr.headRow').slideToggle(100);
});


//Show Scroll on Table
function showScroll(){
    if($('.table-responsive').outerWidth() < $('.table').outerWidth()){
        $('.scroll').show();
        $('.outerTable').css('padding-top', '33px')
    }  
}

showScroll();

//Scroll Table
function tableScroll(){
    
   $('.table-responsive').bind('scroll', chk_scroll);
   $('.prev').addClass('disabled');


    var scrollW = $('.table-responsive').outerWidth();
    var tableW = $('.table').width();
    var tableDiv = $('.table-responsive');
    $('.scroll').css('width', scrollW);

    $('.next').click(function(){
        tableDiv.scrollLeft(tableDiv.scrollLeft() + 30);
    });
    $('.prev').click(function(){
        tableDiv.scrollLeft(tableDiv.scrollLeft() - 30);
    });

    function chk_scroll(e){
        var elem = $(e.currentTarget);
        if (elem[0].scrollWidth - elem.scrollLeft() == elem.outerWidth()){
            $('.next').addClass('disabled');
        }
        else{
            $('.next').removeClass('disabled');
        }

        if (elem.scrollLeft() == 0){
            $('.prev').addClass('disabled');
        }
        else{
            $('.prev').removeClass('disabled');
        }
    }  
}

tableScroll();

(function(){

$('.select').parent().append('<div class="selectWrap">' + $('select.select option:first').html() + '</div>');
$('.selectWrap').after('<ul class="select"></ul>');
$('select.select').hide();

var a = $("ul.select").find('a').outerWidth();
var b = $("ul.select").find('a').outerHeight();
var c = $(".selectWrap").outerWidth();
var d = $(".selectWrap").outerHeight();
var e = $(".selectWrap").position();      

$('.selectWrap').click(function(){        
    $('ul.select').slideToggle(150).css({
        'width': c - 2,
        'left' : e.left,
        'top'  : e.top + d       
    });            
});


$("select.select option:not(:first)").each(function(){
    var myValue = $(this).val();      
    $("ul.select").append('<li><a href="#" value=' + myValue + '>' + $(this).html() + '</a></li>');       
});  



$('ul.select li a').click(function(){
    var mytext = $(this).text();
    $('input[name="getValue"]').attr('value', mytext);
    $(this).closest('ul').slideUp(150);
    $('.selectWrap').text(mytext);
});

$('.go').click(function(){
    var myValue = $('input[name="getValue"]').val();

    if($('input[name="getValue"]').val() == ''){
       alert('Dear Sir, you dont have any value'); 
    }
    else{
      alert('Dear Sir, you got \'' + myValue + '\' technology selected by user !');  
    }
    
}); 

}());
 


//Analog Clock
(function(){
    var degree = 0;
    function second() {
        degree = degree+6;
        $('#second').css('transform','rotate('+ degree +'deg)');
    }
    
    setInterval(second, 1000);

    var degreeM = 0;    
    function minute() {
        if (degree % 360 === 0){        
            degreeM = degreeM+6;
            $('#minute').css('transform','rotate('+ degreeM +'deg)');
        } 
    }

    setInterval(minute, 60000);

    var degreeH = 0;
    function hour() {
        if (degreeM % 12 === 0){        
            degreeH = degreeH+1;
            $('#ghanta').css('transform','rotate('+ degreeH +'deg)');
        } 
    }
    
   setInterval(hour, 360000);
}());

$(window).resize( windowResizeHandler, pageControl, tableScroll, showScroll);

//Analog Clock
// function Clock_dg(prop) {
//     var angle = 360/60,
//         date = new Date();
//         var h = date.getHours();
//         if(h > 12) {
//             h = h - 12;
//         }

//         hour = h;
//         minute = date.getMinutes(),
//         second = date.getSeconds(),
//         hourAngle = (360/12) * hour + (360/(12*60)) * minute;

//         $('#minute')[0].style[prop] = 'rotate('+angle * minute+'deg)';
//         $('#second')[0].style[prop] = 'rotate('+angle * second+'deg)';
//         $('#hour')[0].style[prop] = 'rotate('+hourAngle+'deg)';
// }
// $(function(){        
//     var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
//         prop,
//         el = document.createElement('div');

//     for(var i = 0, l = props.length; i < l; i++) {
//         if(typeof el.style[props[i]] !== "undefined") {
//             prop = props[i];
//             break;
//         }
//     }
//     setInterval(function(){
//         Clock_dg(prop)
//     },100);
// });


//Open Modal 
(function(){
    //Open modal Popup
    $('[data-modal]').click(function(){
        var modalID = $(this).attr('data-modal').slice(1);
        $('#'+modalID).removeClass('hide').wrap("<div class='shadowBG darken'></div>");
        $('body').css('overflow', 'hidden');
        
        setTimeout ( function(){
            $('#'+modalID).removeClass('bounceIn');     
        }, 600);
    });


    //Close modal Popup
    $("[data-dismiss='modal']").click(function(){
        var myModal = $(this).closest('.modal');

        myModal.addClass('zoomOut');

        myModal.closest('.shadowBG').removeClass('darken').addClass('lighten');

        setTimeout ( function(){
            myModal.removeClass('zoomOut');
            myModal.addClass('bounceIn');
            myModal.unwrap(".shadowBG");
            myModal.addClass('hide');
            $('body').removeAttr('style');                       
        }, 480);    
    }); 
})();


//Choose Color from Color List on Math Color Page
(function(){
    var colors = ['green', 'red', 'cyan', 'pink', 'yellow', 'orange', 'violet', 'umber'];

    $('.colorListA > li').each(function(index){
        $(this).find('a').attr('data-color', colors[index]);
    });

    var chooseColor = null; 

    $('.pickColorBtn').click(function(){
        chooseColor = $(this).siblings('.color');
        colorAttr = chooseColor.attr('data-color');
        $('#chooseColor .colorListA > li').find('[data-color='+colorAttr+']').removeClass('disable');
        $('#chooseColor').wrap('<div class="shadowBG darken"></div>').removeClass('hide');

    });

    $('#chooseColor .colorListA > li a').click(function(){
        $(this).addClass('disable');
        var hexColor = $(this).attr('data-color');
        var myModal = $(this).closest('.modal');    
        chooseColor.attr('data-color', hexColor);            

        //Remove Disable from clearll Button 
        var x = $('#chooseColor .colorListA > li').find('.disable');
        var n = x.length;

        if(n == 8){
            $('.clearAll').removeClass('disable');          
        }

        myModal.addClass('zoomOut');
        myModal.closest('.shadowBG').removeClass('darken').addClass('lighten');

        setTimeout ( function(){
            myModal.removeClass('zoomOut');
            myModal.addClass('bounceIn');
            myModal.unwrap(".shadowBG");
            myModal.addClass('hide');
            $('body').removeAttr('style');                  
        }, 480);
    });

    //Close Modal without select color
    $("#chooseColor [data-dismiss='modal']").click(function(){      
        $(this).siblings('.modalBody').find('[data-color='+colorAttr+']').addClass('disable');
        var myModal = $(this).closest('.modal');

        myModal.addClass('zoomOut');
        myModal.closest('.shadowBG').removeClass('darken').addClass('lighten');

        setTimeout ( function(){
            myModal.removeClass('zoomOut');
            myModal.addClass('bounceIn');
            myModal.unwrap(".shadowBG");
            myModal.addClass('hide');
            $('body').removeAttr('style');                  
        }, 480);
    });

    
    $('.clearAll').click(function(){
        $(this).addClass('disable');
        $('.colorListA > li a').removeClass('disable');
        $('.color').removeAttr('data-color');
    });    

})();


});