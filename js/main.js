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
 


$(window).resize( windowResizeHandler, pageControl, tableScroll, showScroll);



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