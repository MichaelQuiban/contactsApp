$(document).ready(function(){



//1. Store Contacts as an object
//2. Submitting a form creates an object.
//3. First Name and Last Name are placed under 'Contacts'
//4. User clicks First Name and Last name and displays within 'info-show'

	//The contact information will go here.
	var contacts = [];

	//Create object from form creation.
	$("#contact-form").submit(function(event) {
		console.log( $(this).serializeArray() );
		event.preventDefault();
	});

	


});
