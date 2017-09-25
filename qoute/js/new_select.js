var  zip_code = document.getElementById('zip'),
		 zip_code_value = document.getElementById('zip').value;
$( zip_code ).change(
		function () {
		    if (zip_code.value !== ""){
				$('.confirm_zip_NO').css({
					'display':'inherit',
				});

				$('#zip').css({
					'background-color':'#faffbd',
				});


				


				$('.enter_loc').css({
					'display':'none',
				});
				$('.location_user').css({
					'display':'inherit',
				});
		}
	})
	.change();

function ConfirmZip () {
	var  select = document.getElementById('sel_car');
	$('.select_car_no_select').css({
		'display':'block',
	});

	$('.select_car_user').css({
		'display':'inherit',
	});

	$('.confirm_zip_NO').css({
		'display':'none',
	});

};