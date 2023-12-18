$( document ).ready(function() {
//	$('body').on('click','.rangecode_val',function(){
 $('#rangecode').on('change', function() {
	   var rangecode = $(this).val();
	  // alert(rangecode);
	     $.ajax({
			type: "POST",
			url: "https://yellowcardnigeria.com/port_director/rangeByCode",
			data: {'rangecode': rangecode},
			success: function(data) {
				var result = JSON.parse(data);
				$('.historysection').html(result.historyhtml);
				$('#actualrange').val(result.coderange);
			//	alert(result.coderange);
			//	actualrange
				console.log(data);
			}
		}); 

   });


 
 	$('#regionuser').on('change', function() {
	   var region = $(this).val();
	  
	     $.ajax({
			type: "POST",
			url: "https://yellowcardnigeria.com/users/rangeByPort",
			data: {'region': region},
			success: function(data) {
				console.log("Your daata");
				console.log(data);
			//	var result = JSON.parse(data);
				$('#portid').html('');
				$('#portid').html(data);
			//	alert(result.coderange);
			//	actualrange
				console.log(data);
			}
		}); 
   });



});


