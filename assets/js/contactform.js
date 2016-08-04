jQuery(document).ready(function() {

	$('#contactform').submit(function() {

		var action = $(this).attr('action');
		var values = $(this).serialize();

		$('#submit').attr('disabled', 'disabled');

		$("#message").slideUp(0, function() {

			$('#message').hide();

			$.post(action, values, function(data) {
				$('#message').html(data);
				$('#message').slideDown('slow');
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform')[0].reset();

			});

		});

		return false;

	});

});