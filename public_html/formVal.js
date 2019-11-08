//Get the elements that are going to be worked on
var form = document.getElementsByTagName('form')[0];
var fname = document.getElementById('fname');
var email = document.getElementById('email');

var error = email;

var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function addEvent(element, event, callback) {
	var previousEventCallBack = element["on"+event];
	element["on"+event] = function (e){
		var output = callback(e);
		if (output === false) return false;
		
		if (typeof previousEventCallBack === 'function'){
			output = previousEventCallBack(e);
			if (output == false) return false;
		}
	}
};

addEvent(window, "load", function(){
	var test = email.value.length === 0 || emailRegExp.test(email.value);
	
	var test1 = fname.value.length > 0 && fname.value.length <= 15;
	
	email.className = test ? "valid" : "invalid";
	fname.className = test1 ? "valid" : "invalid";
});

addEvent(email, "input", function(){
	var test = email.value.length === 0 || emailRegExp.test(email.value);
	if (test){
		email.className = "valid";
		error.innerHTML = "";
		error.className = "error";
	} else {
		email.className = "invalid";
	}
});

addEvent(fname, "input", function(){
	var test1 = fname.value.length > 0 && fname.value.length <= 15;
	if(test){
		fname.className = "valid";
		error.innerHTML = "";
		error.className = "error";
	} else {
		fname.className = "invalid";
	}
});

addEvent(form, "submit", function () {
	var test = email.value.length === 0 || emailRegExp.test(email.value);
	
	if(!test){
		email.className = "invalid";
		error.innerHTML = "I expect an e-mail address";
		error.className = "error active";
		
		return false;
	} else {
		email.className = "valid";
		error.innerHTML = "";
		error.className = "error";
	}
	
	var test1 = fname.value.length > 0 && fname.value.length <= 15;
	
	if(!test){
		fname.className = "invalid";
		error.innerHTML = "I expect a first name";
		error.className = "error active";
		
		return false;
	} else {
		fname.className = "valid";
		error.innerHTML = "";
		error.className = "error";
	}
});
