function checkkalk () {
	var ch1 = document.getElementById('ch1'),
		ch2 = document.getElementById('ch2'),
		ch3 = document.getElementById('ch3'),
		ch4 = document.getElementById('ch4'),
		k = 0;
		if (ch1.checked){
			k = k + 1;
		}
		if (ch2.checked){
			k = k + 1;
		}
		if (ch3.checked){
			k = k + 1;
		}
		if (ch4.checked){
			k = k + 1;
		}
		
	 	document.getElementById('calc').innerHTML = k;
};

function closePanel () {
		$('.LogPastServices').css({
			'display':'none',
		});

		$('.Cars').css({
			'top':'50px',
		});

		$('.UpcomingRecommendedServices').css({
			'top':'500px',
		});
};

var a = 1; 

function openuser() {
	if (a % 2 !== 0){
		$('.openUser').css({
			'display':'block',
		});
		return a +=1; 
	} else { 
		$('.openUser').css({
			'display':'none',
		});
		return a +=1;
	}
};


function Check () {
	var ch4 = document.getElementById('myonoffswitch_4'),
		ch1 = document.getElementById('myonoffswitch'),
		ch2 = document.getElementById('myonoffswitch_2'),
		ch3 = document.getElementById('myonoffswitch_3');

		
		(function () {
		var ch4 = document.getElementById('myonoffswitch_4'),
			ch1 = document.getElementById('myonoffswitch'),
			ch2 = document.getElementById('myonoffswitch_2'),
			ch3 = document.getElementById('myonoffswitch_3');

			if (ch1.checked || ch2.checked || ch3.checked){
				ch4.checked = false;
			}

			if (!ch1.checked && !ch2.checked && !ch3.checked){
				ch4.checked = true;
			}	
		}());
}

function LogIn () {
	var emails = document.getElementById('email').value,
		passwords = document.getElementById('password').value,
		user = document.getElementById('user').value,
		pattern = /^[\s]+$/,
		link = document.getElementById('login');

	if (emails == "" || pattern.test(emails)){
		$('.email').css({
			'border':'1px solid red',
		});
	} else{
		$('.email').css({
			'background-color':'#faffbd',
			'border':'1px solid #d2d0d0',
		});
	}

	if (passwords == "" || pattern.test(passwords)){
		$('.password').css({
			'border':'1px solid red',
		});
	} else{
		$('.password').css({
			'background-color':'#faffbd',
			'border':'1px solid #d2d0d0',
		});
	}

	if (user == "" || pattern.test(user)){
		$('.user').css({
			'border':'1px solid red',
		});
	} else{
		$('.user').css({
			'background-color':'#faffbd',
			'border':'1px solid #d2d0d0',
		});
	}

	if (user == "" || pattern.test(user)){
		$('.error').css({
			'display':'block',
		});
	}

	if ((!pattern.test(emails) && !emails == '') && !passwords == '' && !pattern.test(passwords)) {
		link.setAttribute("href", "users/settings/dashboard.html");
	}

};

function sign () {


	$('#Registration').css({
		'display':'block',
	});

	$('#LogIn').css({
		'display':'none',
	});


};

function login () {
	
		$('#LogIn').css({
		'display':'block',
	});
		$('#Registration').css({
		'display':'none',
	});
	
};