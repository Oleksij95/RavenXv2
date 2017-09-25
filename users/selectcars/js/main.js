(function () {
	$('.RECOMMENDAT').bind("click", function () {
		$('.radioC').removeClass('active')
		$(this).addClass('active')

		

		$('.addCarBody').css({
			'display' : 'none'
		})

		$('.RECOMMENDATIONS').css({
			'display' : 'block'
		})

		$('.CarDetails').css({
			'display' : 'none'
		})

	})

	$('.HEALT').bind("click", function () {
		$('.radioC').removeClass('active')
		$(this).addClass('active')

		

		$('.addCarBody').css({
			'display' : 'block'
		})

		$('.RECOMMENDATIONS').css({
			'display' : 'none'
		})

		$('.CarDetails').css({
			'display' : 'none'
		})

	})

	$('.DET').bind("click", function () {
		$('.radioC').removeClass('active')
		$(this).addClass('active')

		

		$('.CarDetails').css({
			'display' : 'block'
		})

		$('.RECOMMENDATIONS').css({
			'display' : 'none'
		})
		$('.addCarBody').css({
			'display' : 'none'
		})

	})

	$('.Pmileage').bind("hover", function () {

		$('.help').css({
			'display' : 'block'
		})

	})

	$('label').bind({
	  	mouseenter: function(e) {
	  $('.help').css({
			'display' : 'block'
		})
	  },
	  mouseleave: function(e) {
  		$('.help').css({
			'display' : 'none'
		})
  },

});
}());



// $( ".RECOMMENDATIONS" ).bind( "click", function() {
//   alert( "User clicked on 'foo.'" );
// });

// (function () {
// 		console.log("Yes");
// }());

