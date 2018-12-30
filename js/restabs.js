$(document).ready(function(){
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
});