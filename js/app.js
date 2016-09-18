$(document).ready(function() {

    //Function that creates an object and display it.
    function showContact() {
        // Serialize and create an object out of form data.
        var forms = $("#contact-form").serializeArray();
        // Empty the contact info when we're done serializing.
        $("#contact-info").empty();

        // Append the form data that was serialized.
        $("#contact-info").append("<a>" + forms.value + "</a>" + " ");

        // Reset Form Fields
    }
    
    //Perform the showContact function when submit is clicked.
    $("#submit").click(function() {
        event.preventDefault();
        $("#submit").click(showContact);
        $(this).closest("#form-group").find("input[type=text]".val("");
      	
    });
    showContact();

});