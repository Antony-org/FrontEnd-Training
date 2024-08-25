$(document).ready(function() {
    var contacts = [];

    $("#new-contact-form").on("submit", function(event) {
        event.preventDefault();
        var id = $("#contact-id").val();
        console.log(id);
        var newContact = {
            name: $("#name").val(),
            phone: $("#phone").val()
        };

        if (id) {
            contacts[id] = newContact;
        } else {
            contacts.push(newContact); 
        }

        updateContactList();
        $.mobile.changePage("#contact-list-page");
        $("#new-contact-form")[0].reset();
        $("#contact-id").val(""); 
    });

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

    $(document).on("click", ".view-contact", function() {
        var id = $(this).data("id");
        // console.log(data("id").val)
        var contact = contacts[id];
        $("#contact-name").text(contact.name);
        $("#contact-phone").text(contact.phone);
        $("#edit-contact").data("id", id);
        $("#delete-contact").data("id", id);
        $("#call-contact").attr("href", "tel:" + contact.phone);
        $.mobile.changePage("#contact-details-page");
    });

    $("#edit-contact").on("click", function() {
        var id = $(this).data("id");
        var contact = contacts[id];
        $("#name").val(contact.name);
        $("#phone").val(contact.phone);
        $("#contact-id").val(id); 
        $.mobile.changePage("#new-contact-page");
    });

    $("#delete-contact").on("click", function() {
        var id = $(this).data("id");
        contacts.splice(id, 1);
        updateContactList();
        $.mobile.changePage("#contact-list-page");
    });
});