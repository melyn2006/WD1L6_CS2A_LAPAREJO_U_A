
// Get the contact form
const contactForm = document.getElementById("contactForm");

// Handle form submission
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").textContent =
            "Please complete all fields.";
        return;
    }

    // Display confirmation
    document.getElementById("formMessage").textContent =
        "Thank you, " + name + "! Your message has been received.";

    // Clear the form
    contactForm.reset();
});
