(function () {
	var  zip_code = document.getElementById('zip'),
		 zip_code_value = document.getElementById('zip').value;
	

	$( zip_code ).change(
		function () {
		    if (zip_code.value !== ""){
				$('.confirm_zip, .great').css({
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


	$(document).ready(function(){
	  $(document).scroll(function(){
	    // проверяем
	    checkPositionFix();
	  });
	  
	  // после загрузки страницы сразу проверяем
	  checkPositionFix();
	  
	  // проверка при ресайзе страницы
	  $(window).resize(function(){
	    checkPositionFix();
	  });
	  
	});
	function checkPositionFix(){
		  // координаты дива
		  var div_position = $('.Enter_Zip').offset();
		  // отступ сверху
		  var div_top = div_position.top;
		  // отступ слева
		  var div_left = div_position.left;
		  // ширина
		  var div_width = $('.Enter_Zip').width();
		  // высота
		  var div_height = $('.Enter_Zip').height();
		  
		  // проскроллено сверху 
		  var top_scroll = $(document).scrollTop();
		  // проскроллено слева
		  var left_scroll = $(document).scrollLeft();
		  // ширина видимой страницы
		  var screen_width = $(window).width();
		  // высота видимой страницы
		  var screen_height = $(window).height();

		  var hz = 130;
		  // координаты углов видимой области
		  var see_x1 = left_scroll;
		  var see_x2 = screen_width + left_scroll;
		  var see_y1 = top_scroll;
		  var see_y2 = screen_height + top_scroll;
		  
		  // координаты углов искомого элемента
		  var hz = 130;
		  var div_x1 = div_left;
		  var div_x2 = div_left + div_height;
		  var div_y1 = div_top;
		  var div_y2 = div_top  + div_width;
		  
		  // проверка - виден див полностью или нет
		 if( div_x1 >= see_x1 && div_x2 <= see_x2  && div_y2 <= see_y2 ){
		    // если виден
		    // $('.user_price').removeClass('fix');
		    $('.user_price').addClass('fix');
		    
		  }else{
		    // если не виден
		      $('.user_price').removeClass('fix');
		     // $('.user_price').addClass('fix');
		  }
		}

}());

function ConfirmZip () {
	var  select = document.getElementById('sel_car');
	$('.select_car').css({
		'display':'block',
	});

	$('.confirm_zip').css({
		'display':'none',
	});

	$('.select_car_user').css({
		'display':'inherit',
	});

		$( select ).change(
		function () {
		    if (select.value != 1){

		    	$('.Book_remote').css({
					'display':'block',
				});

				

				$('.select_car_user').css({
					'display':'none',
				});
				$('.cars_user').css({
					'display':'inherit',
				});


				$(document).ready(function(){
  $(document).scroll(function(){
    // проверяем
    checkPosition();
  });
  
  // после загрузки страницы сразу проверяем
  checkPosition();
  
  // проверка при ресайзе страницы
  $(window).resize(function(){
    checkPosition();
  });
  
});

// функция проверки полной видимости элемента
function checkPosition(){
  // координаты дива
  var div_position = $('.big_light, .warning').offset();
  // отступ сверху
  var div_top = div_position.top;
  // отступ слева
  var div_left = div_position.left;
  // ширина
  var div_width = $('.big_light, .warning').width();
  // высота
  var div_height = $('.big_light, .warning').height();
  
  // проскроллено сверху 
  var top_scroll = $(document).scrollTop();
  // проскроллено слева
  var left_scroll = $(document).scrollLeft();
  // ширина видимой страницы
  var screen_width = $(window).width();
  // высота видимой страницы
  var screen_height = $(window).height();
  
  // координаты углов видимой области
  var see_x1 = left_scroll;
  var see_x2 = screen_width + left_scroll;
  var see_y1 = top_scroll;
  var see_y2 = screen_height + top_scroll;
  
  // координаты углов искомого элемента
  var fifti = -50;
  var div_x1 = div_left;
  var div_x2 = div_left + fifti + div_height;
  var div_y1 = div_top;
  var div_y2 = div_top + fifti + div_width;
  
  // проверка - виден див полностью или нет
  if( div_x1 >= see_x1 && div_x2 <= see_x2  && div_y2 <= see_y2 ){
    // если виден
    $('.secondLi').addClass('active');
  }else{
    // если не виден
    $('.secondLi').removeClass('active');   
  }
}
			}
	})
	.change();
};


function ShowManual () {

	$('.By_service').css({
		'display':'none',
	});

	$('.warning, .big_light').css({
		'display':'block',
	});
	$('.light').css({
    	'display':'block'
    })
	$('.Book_remote').click(function () {
	    $('html, body').stop().animate({scrollTop: 820}, 'slow', 'swing');
	});
};

$('.dow').click(function () {
    $('html, body').stop().animate({scrollTop: 1420}, 'slow', 'swing');
});

$('.delateImg').click(function () {
    $('html, body').stop().animate({scrollTop: 800}, 'slow', 'swing');

    $('.user_price').css({
    	'display':'block'
    })
     $('.user_select_price').css({
    	'display':'none'
    })

    $('.big_light2').css({
    	'display':'none'
    })

    $('.warning').css({
    	'display':'block'
    })
    $('.big_light').css({
    	'display':'block'
    })

    $('.light').css({
    	'display':'block'
    })

    $('.By_service').css({
    	'display':'none'
    })
    $('.Select_Time').css({
    	'display':'none'
    })
});

$('.AddServ').click(function () {
    $('html, body').stop().animate({scrollTop: 1000}, 'slow', 'swing');

    $('.user_price').css({
    	'display':'none'
    })
     $('.user_select_price').css({
    	'display':'block'
    })

     $('.By_service').css({
    	'display':'block'
    })
      $('.big_light').css({
    	'display':'none'
    })
     $('.big_light2').css({
    	'display':'none'
    })
     $('.light').css({
    	'display':'none'
    })
     $('.warning').css({
    	'display':'none'
    })

     
});

$('.Go_back').click(function () {
    $('html, body').stop().animate({scrollTop: 800}, 'slow', 'swing');

    $('.big_light2').css({
    	'display':'none'
    })
});

var a = 1; 
var b = 1; 


// $('.a_click').click(function () {

//     $(this).css({
//     	'color':'#218be7'
//     })
// });


// function openPanel () {
// 	var panel = document.getElementsByClassName('a_click');
// 	if (b % 2 !== 0){ 
// 	    $('.a_click').css({
//     	'color':'#218be7'
//     })
// 	return b = b + 1; 

// 	} 
// 	 else if (b % 2 == 0){ 
// 	   $('.a_click').css({
//     	'color':'silver'
//     })
// 	return b +=1; 
// 	} 
// };


function Move(){
	if (a % 2 !== 0){ 
	    $('.chkbody').css({
	    	'background-color':'#e3f1fc'
	    })

	    $('.chrcircle').css({
	    	'background-color':'#ebf5fd',
	    	// 'left':'0px',
	    	'margin-right':'15px',
	    })

	    $('.chk, .Inspect').css({
	    	'text-decoration':'line-through'
	    })


	return a = a + 1; 

	} 
	 else if (a % 2 == 0){ 
	    $('.chkbody').css({
	    	'background-color':'#a8d7ff'
	    })

	    $('.chrcircle').css({
	    	'background-color':'#218be7',
	    	// 'right':'0px'
	    	'margin-right':'0px',
	    })

	    $('.chk, .Inspect').css({
	    	'text-decoration':'none'
	    })
	return a +=1; 
	} 
};



// if (a % 2 !== 0){ 

// $('.chrcircle').click(function () {
//     $('.chrcircle').css({
//     	'left':'0px'
//     })
//     $('.chkbody').css({
//     	'background-color':'#e3f1fc'
//     })

//     $('.chrcircle').css({
//     	'background-color':'#ebf5fd'
//     })
// });
// return a = a + 1; 
// } else if (a % 2 == 0){ 
// 	$('.chrcircle').css({
//     	'right':'0px'
//     })
//     $('.chkbody').css({
//     	'background-color':'#e3f1fc'
//     })

//     $('.chrcircle').css({
//     	'background-color':'#ebf5fd'
//     })
// 	return a = a + 1;
// }


$('.location_user').click(function () {
    $('html, body').stop().animate({scrollTop: 160}, 'slow', 'swing');
});

$('.cars_user').click(function () {
    $('html, body').stop().animate({scrollTop: 410}, 'slow', 'swing');
});

$('#select_car_user_2, #select_car_user').click(function () {
    $('html, body').stop().animate({scrollTop: 330}, 'slow', 'swing');
});



function chechFn() {

	$('.DELL').css({
		'display':'none',
	});

	$('.big_light2').css({
		'display':'block',
		'height':'800px',
	});

	$('.chech').css({
		'display':'block',
	});
};


function OilChangeFn() {
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'360px',
	});
	$('.Appointment_Oil_Change').css({
		'display':'block',
	});
};

function AppointmentbrakeFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'604px',
	});
	$('.Appointment_brake').css({
		'display':'block',
	});
};

function AppointmentBrakePadsFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'437px',
	});
	$('.Appointment_brake_pads').css({
		'display':'block',
	});
};

function AppointmentEngineSoonFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'492px',
	});
	$('.Appointment_engine_soon').css({
		'display':'block',
	});
};

function ALTFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'540px',
	});
	$('.ALT').css({
		'display':'block',
	});
};

function AbsHelpFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'550px',
	});
	$('.abs_help').css({
		'display':'block',
	});
};

function AppointmentTempFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'550px',
	});
	$('.Appointment_Temp').css({
		'display':'block',
	});
};


function AppointmentCoolantFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'480px',
	});
	$('.Appointment_coolant').css({
		'display':'block',
	});
};

function AppointmentEngineOilFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'377px',
	});
	$('.Appointment_engine_oil').css({
		'display':'block',
	});
};

function AppointmentParkingBrakeFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'377px',
	});
	$('.Appointment_parking_brake').css({
		'display':'block',
	});
};

function Appointment_ThrottleFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'456px',
	});
	$('.Appointment_Throttle').css({
		'display':'block',
	});
};

function AppointmentTractionFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'594px',
	});
	$('.Appointment_traction').css({
		'display':'block',
	});
};

function AppointmentSteeringFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'521px',
	});
	$('.Appointment_steering').css({
		'display':'block',
	});
};

function AppointmentSecurityFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'333px',
	});
	$('.Appointment_Security').css({
		'display':'block',
	});
};


function TireFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'375px',
	});
	$('.Tire').css({
		'display':'block',
	});
};


function IndicatorLightFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'303px',
	});
	$('.indicator_light').css({
		'display':'block',
	});
};

function AppointmentOverdrivFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'398px',
	});
	$('.Appointment_Overdrive').css({
		'display':'block',
	});
};

function AppointmentSeatBeltFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'370px',
	});
	$('.Appointment_seat_belt').css({
		'display':'block',
	});
};

function AppointmentCatalyticOnverteFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'398px',
	});
	$('.Appointment_catalytic_converte').css({
		'display':'block',
	});
};

function AppointmentTransmissionTemperatureFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'323px',
	});
	$('.Appointment_Transmission_Temperature').css({
		'display':'block',
	});
};

function AppointmentAirbagSystemFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'453px',
	});
	$('.Appointment_airbag_system').css({
		'display':'block',
	});
};

function AppointmentDefrostFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'266px',
	});
	$('.Appointment_Defrost').css({
		'display':'block',
	});
};

function AppointmentFogLightsFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'248px',
	});
	$('.Appointment_fog_lights').css({
		'display':'block',
	});
};

function AppointmentExteriorLightsFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'248px',
	});
	$('.Appointment_exterior_lights').css({
		'display':'block',
	});
};

function AppointmentReducedPowerFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'447px',
	});
	$('.Appointment_Reduced_Power').css({
		'display':'block',
	});
};

function AppointmentGasCapFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'380px',
	});
	$('.Appointment_gas_cap').css({
		'display':'block',
	});
};

function AppointmentBeamLightFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'280px',
	});
	$('.Appointment_Beam_Light').css({
		'display':'block',
	});
};

function AppointmentCarIsOpenFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'280px',
	});
	$('.Appointment_car_is_open').css({
		'display':'block',
	});
};

function AppointmentWasherFluidFn (){
	$('.DELL').css({
		'display':'none',
	});
	$('.big_light2').css({
		'display':'block',
		'height':'280px',
	});
	$('.Appointment_Washer_fluid').css({
		'display':'block',
	});
};


var c = 1;

$('#mask').hide();
function ShowFaq() {

	if (c % 2 !== 0){ 
	    $('.faq').css({
			'top':'102px',
			'transition': 'all 2s',
			'-o-transition': 'all 2s',
			'-webkit-transition': 'all 2s',
		})

		 $('#mask').show();

	return c = c + 1; 

	} 
	 else if (c % 2 == 0){ 
	   $('.faq').css({
			'top':'-200px',
			'transition': 'all 2s',
			'-o-transition': 'all 2s',
			'-webkit-transition': 'all 2s',
		})
	   $('#mask').hide();
	return c +=1; 
	} 




	 

	//  function hide() {
	// 	$('.faq').css({
	// 		'top':'-200px',
	// 		'transition': 'all 2s',
	// 		'-o-transition': 'all 2s',
	// 		'-webkit-transition': 'all 2s',
	// 	})
	// };
	// setTimeout(hide, 2000);
};

// $('#Price_breakdown').modal("show");




function ShowOut () {
	$('.warning, .big_light, .big_light2, .user_price').css({
		'display':'none',
	});

	$('.By_service, .user_select_price').css({
		'display':'block',
	});

	
	$('.Book_remote').click(function () {
	    $('html, body').stop().animate({scrollTop: 820}, 'slow', 'swing');
	});
}



$('.ul_car > li').bind("click", function () {
	document.getElementById('p_sel_car').innerHTML = this.id;
	document.getElementById('select_car_user').innerHTML = this.id;
	document.getElementById('select_car_user_2').innerHTML = this.id;
	$('.make_the_car').addClass('next');
	$('.make_the_car').removeClass('make_the_car');

	$('.menu_car').css({
		'display':'none',
	});

	$('.menu_date').css({
		'display':'block',
	});	

	$('.make_the_year').css({
		'display':'inline-block',
	});

	
});

$('.yearUl > li').bind("click", function () {
	document.getElementById('p_sel_yea').innerHTML = this.id;
	document.getElementById('select_car_user').innerHTML += ' ' +  this.id;
	document.getElementById('select_car_user_2').innerHTML += ' ' +  this.id;
	$('.make_the_year').addClass('next');
	$('.make_the_year').removeClass('make_the_year');

	$('.menu_date').css({
		'display':'none',
	});

	$('.menu_model').css({
		'display':'block',
	});	

	$('.make_the_model').css({
		'display':'inline-block',
	});

});


$('.modelUl > li').bind("click", function () {
	document.getElementById('p_sel_model').innerHTML = this.id;
	document.getElementById('select_car_user').innerHTML += ' ' +  this.id;
	document.getElementById('select_car_user_2').innerHTML += ' ' +  this.id;
	$('.make_the_model').addClass('next');
	$('.make_the_model').removeClass('make_the_model');

	$('.menu_model').css({
		'display':'none',
	});

	$('.menu_trim').css({
		'display':'block',
	});	

	$('.make_the_trim').css({
		'display':'inline-block',
	});
});


$('.60L > li').bind("click", function () {
	document.getElementById('p_sel_trim').innerHTML = this.id;
	document.getElementById('select_car_user').innerHTML += ' ' +  this.id;
	document.getElementById('select_car_user_2').innerHTML += ' ' +  this.id;
	$('.make_the_trim').addClass('next');
	$('.make_the_trim').removeClass('make_the_trim');

	

	$('.make_the_trim').css({
		'display':'inline-block',
	});
});




function Fyear_not_know() {
	document.getElementById('p_sel_yea').innerHTML = "I don't know";
	$('.make_the_year').addClass('next');
	$('.make_the_year').removeClass('make_the_year');

	$('.menu_date').css({
		'display':'none',
	});

	$('.menu_model').css({
		'display':'block',
	});	

};

function Fmodel_not_know() {
	document.getElementById('p_sel_model').innerHTML = "I don't know";

	$('.make_the_model').addClass('next');
	$('.make_the_model').removeClass('make_the_model');


	$('.menu_model').css({
		'display':'none',
	});

	$('.menu_trim').css({
		'display':'block',
	});	
	$('.make_the_model').css({
		'display':'inline-block',
	});	
};


function Ftrim_not_know () {
	document.getElementById('p_sel_trim').innerHTML = "I don't know";
	$('.make_the_trim').addClass('next');
	$('.make_the_trim').removeClass('make_the_trim');
	
	$('.make_the_trim').css({
		'display':'inline-block',
	});

	$('.menu_car').css({
		'display':'none',
	});

	$('.menu_date').css({
		'display':'none',
	});	

	$('.menu_model').css({
		'display':'none',
	});

	$('.menu_trim').css({
		'display':'none',
	});

	$('.Book_remote').css({
		'display':'block',
	});

};


$('.make_the_car').bind("click", function () {

	$('.menu_car').css({
		'display':'block',
	});

	$('.menu_date').css({
		'display':'none',
	});	

	$('.menu_model').css({
		'display':'none',
	});

	$('.menu_trim').css({
		'display':'none',
	});



	$('.make_the_car').css({
		'display':'inline-block',
	});	

});

$('.make_the_year').bind("click", function () {
	$('.menu_car').css({
		'display':'none',
	});

	$('.menu_date').css({
		'display':'block',
	});	

	$('.menu_model').css({
		'display':'none',
	});

	$('.menu_trim').css({
		'display':'none',
	});
});

$('.make_the_model').bind("click", function () {
	$('.menu_car').css({
		'display':'none',
	});

	$('.menu_date').css({
		'display':'none',
	});	

	$('.menu_model').css({
		'display':'block',
	});

	$('.menu_trim').css({
		'display':'none',
	});
});

$('.make_the_trim').bind("click", function () {
	$('.menu_car').css({
		'display':'none',
	});

	$('.menu_date').css({
		'display':'none',
	});	

	$('.menu_model').css({
		'display':'none',
	});

	$('.menu_trim').css({
		'display':'block',
	});
});


function FinisSelectCar () {

	$('.60L > li').bind("click", function () {
		document.getElementById('p_sel_trim').innerHTML = this.id;
	});


	$('.make_the_trim').css({
		'display':'inline-block',
	});

	$('.menu_car').css({
		'display':'none',
	});

	$('.menu_date').css({
		'display':'none',
	});	

	$('.menu_model').css({
		'display':'none',
	});

	$('.menu_trim').css({
		'display':'none',
	});

	$('.Book_remote').css({
		'display':'block',
	});
};

function FNShowMoreTimes () {
	$('.Select_Time_body').css({
		'overflow':'auto',
	});
	$('.btn_more_time').css({
		'display':'none',
	});
	$('.data_ul_li').css({
		'width':'62.5px',
	});
};

function selectTimeFn () {
	 $('html, body').stop().animate({scrollTop: 1000}, 'slow', 'swing');
	$('.Select_Time').css({
		'display':'block',
	});
};


