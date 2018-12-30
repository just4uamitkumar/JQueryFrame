$(document).ready(function(){
	

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
});