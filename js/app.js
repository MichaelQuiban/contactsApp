$(document).ready(function(){



//1. Store Contacts as an object
//2. Submitting a form creates an object.
//3. First Name and Last Name are placed under 'Contacts'
//4. User clicks First Name and Last name and displays within 'info-show'

	//The contact information will go here.
	var contacts = [];

	//Function that creates an object and display it.
	function showContact() {
			// Serialize and create an object out of form data.
		var forms = $("#contact-form").serializeArray();
			// Empty the contact info when we're done serializing.
		$("#contact-info").empty();
			// Nested function to handle the serialized data and append it.
		$.each( forms, function ( i, forms ) {
			// Append the form data that was serialized.
			$("#contact-info").append( forms.value + "<br></br>");
		});
	}
	//Perform the showContact function when submit is clicked.
	$("#submit").click(showContact);
	showContact();

	


});
