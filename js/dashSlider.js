$(document).ready(function(){
	
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
});