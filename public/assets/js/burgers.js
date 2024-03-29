// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
        const id = $(this).data("id");
        const newDevoured = $(this).data("newdevoured");

        const newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: newDevouredState
        }).then(function() {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        )
    })

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        if ($("#ca").val()) {
            var newBurger = {
                name: $("#ca").val().trim(),
                devoured: $("[name=devoured]:checked").val().trim()
            };

            // Send the POST request.
            $.post("/api/burgers", newBurger)
            .then(function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            )
        }
    })
})