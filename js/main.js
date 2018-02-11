$(document).ready(function(){

//Get Page Title
var pageTitle = $(document).find("title").text();
$('h1').text(pageTitle);

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
$(window).resize( windowResizeHandler);


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
    $("#"+dataID).removeClass('hide')

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



});