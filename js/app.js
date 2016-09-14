$(document).ready(function(){



//1. Store Contacts as an object
//2. Submitting a form creates an object.
//3. First Name and Last Name are placed under 'Contacts'
//4. User clicks First Name and Last name and displays within 'info-show'

	//The contact information will go here.
	var contacts = [];

	//Function that creates an object and display it.
	function showContact() {
			// Serial and create an object out of form data.
		var forms = $("#contact-form").serializeArray();
			// Empty the contact info when we're done serialized.
		$("#contact-info").empty();
			// Nested function to handle the serialized data and append it.
		jQuery.each( forms, function ( i, form ) {
			// Append the form data that was serialized.
			$("#contact-info").append( form.value + "<br></br>");
		});
	}
	//Perform the showContact function when submit is clicked.
	$("#submit").click(showContact);
	showContact();

	


});
