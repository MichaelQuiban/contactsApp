$(document).ready(function() {

   //Function that creates an object and display it.
    var contacts = [];

    var Contact = function(firstname, lastname, phonenumber, street, city, state) {
    	this.fullname = firstname + " " + lastname;
    	this.phonenumber = phonenumber;
    	this.street = street;
    	this.city = city;
    	this.state = state;
    }

    function findContact(fullname) {
    	for ( var i = 0; i < contacts.length; i++) {
    		if(contacts[i].fullname === fullname ) {
    			return contacts[i];
    		}
    	}
    }

    //Perform the showContact function when submit is clicked.
    $("#contact-form").submit(function() {
        // Prevent the button from refreshing the page.
        event.preventDefault();
        firstname = $("#first-name").val();
        lastname = $("#last-name").val();
        phonenumber = $("#phone-number").val();
        street = $("#street").val();
        city = $("#city").val();
        state = $("#state").val();
        var newContact = new Contact(firstname, lastname, phonenumber, street, city, state);
        contacts.push(newContact);
        $("#contact-list").append("<li class='contact-name'>"+ newContact.fullname + "</li>");
        //clear the info show
    });

    $(document).on("click", ".contact-name", function(newContact) {
    	var selectedContact = findContact($(this).text());
    	console.log(selectedContact.city);
    	$("#info-show").empty();
    	//repeat
    	$("#info-show").append("<p class='user-info'>"+ newContact.phonenumber +"</p>");

    });

    


});