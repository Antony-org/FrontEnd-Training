$(document).ready(function() {
    var contacts = [];

    // Save new contact or update existing contact
    $("#new-contact-form").on("submit", function(event) {
        event.preventDefault();
        var id = $("#contact-id").val();
        var newContact = {
            name: $("#name").val(),
            phone: $("#phone").val()
        };

        if (id) {
            contacts[id] = newContact; // Update existing contact
        } else {
            contacts.push(newContact); // Add new contact
        }

        updateContactList();
        $.mobile.changePage("#contact-list-page");
        $("#new-contact-form")[0].reset();
        $("#contact-id").val(""); // Clear the hidden ID field after save
    });

    // Update contact list
    function updateContactList() {
        $("#contact-list").empty();
        contacts.forEach(function(contact, index) {
            $("#contact-list").append(`
                <li><a href="#" class="view-contact" data-id="${index}">
                    <h2>${contact.name}</h2>
                    <p>${contact.phone}</p>
                </a></li>
            `);
        });
        $("#contact-list").listview("refresh");
    }

    // View contact details
    $(document).on("click", ".view-contact", function() {
        var id = $(this).data("id");
        var contact = contacts[id];
        $("#contact-name").text(contact.name);
        $("#contact-phone").text(contact.phone);
        $("#edit-contact").data("id", id);
        $("#delete-contact").data("id", id);
        $("#call-contact").attr("href", "tel:" + contact.phone);
        $.mobile.changePage("#contact-details-page");
    });

    // Edit contact
    $("#edit-contact").on("click", function() {
        var id = $(this).data("id");
        var contact = contacts[id];
        $("#name").val(contact.name);
        $("#phone").val(contact.phone);
        $("#contact-id").val(id); // Store the ID in the hidden field
        $.mobile.changePage("#new-contact-page");
    });

    // Delete contact
    $("#delete-contact").on("click", function() {
        var id = $(this).data("id");
        contacts.splice(id, 1);
        updateContactList();
        $.mobile.changePage("#contact-list-page");
    });
});