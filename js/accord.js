$(document).ready(function(){
	
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
});