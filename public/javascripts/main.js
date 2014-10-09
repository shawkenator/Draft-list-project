$(document).on('ready', function (){
	var count = 0;
	
	$('#ajax-button').on('click', function (){

		// Make an AJAX request
		var toSend = {
			message: 'Hello ' + count
		};	

		$.post('/users', toSend,function(data) {
			console.log( data );
		});

		count++;
	});

});