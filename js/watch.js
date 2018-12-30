$(document).ready(function(){
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
});