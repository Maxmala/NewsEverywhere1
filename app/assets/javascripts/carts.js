$(document).ready(function(){
	$("a[id='add-item-to-cart'").on("cick", function(event){
			var a = $(this).parent('a');
			event.preventDefault();

			$.ajax({
				type: "PUT",
				url: a.attr('action'),
				data: a.serialize(),
				success: function(data){
					if (User.data == false)
					{
						console.log('paniervide');
					}
					else {

						console.log('nonvide');
					}


				},
				error: function(data){
					console.log('error');
				},
				datatype: 'JSON'


			});

	});


});