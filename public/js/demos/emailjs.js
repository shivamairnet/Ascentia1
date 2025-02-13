function sendMail() {
    event.preventDefault();
    let name = document.getElementById("fullName").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email_id").value;
    let description = document.getElementById("description").value;

    // Get error message placeholders
    let fullNameError = document.getElementById("fullNameError");
    let contactError = document.getElementById("contactError");
    let emailError = document.getElementById("emailError");
    let descriptionError = document.getElementById("descriptionError");

    // Reset previous error messages
    fullNameError.textContent = "";
    contactError.textContent = "";
    emailError.textContent = "";
    descriptionError.textContent = "";

    let hasError = false;

    // Check each field for empty value
    if (name.trim() === "") {
        fullNameError.textContent = "Please enter your full name.";
        hasError = true;
    }
    if (contact.trim() === "") {
        contactError.textContent = "Please enter your contact number.";
        hasError = true;
    }
    if (email.trim() === "") {
        emailError.textContent = "Please enter your email address.";
        hasError = true;
    }
    if (description.trim() === "") {
        descriptionError.textContent = "Please provide a project description.";
        hasError = true;
    }

    if (hasError) {
        return false; // Prevent form submission
    }

    // Send email if all fields are filled
    let params = {
        name: name,
        contact: contact,
        email: email,
        description: description
    };
    emailjs.send("service_ukutc8b", "template_inf3yia", params)
        .then(function (response) {
            console.log("Email sent!", response);
            showPopup("Your proposal has been sent successfully.");
            clearFormFields();
        })
        .catch(function (error) {
            console.error("Email failed to send:", error);
            showPopup("Email failed to send. Please try again later.");
        });

    return false;
}

function clearFormFields() {
    let formInputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='number'");

    formInputs.forEach(function (input) {
        input.value = "";
    });
}

function showPopup(message) {
    let popupElement = document.createElement("div");
    popupElement.textContent = message;
    popupElement.classList.add("popup");

    document.body.appendChild(popupElement);

    setTimeout(function () {
        popupElement.remove();
    }, 6000);
}

function sendContactMail() {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let messageError = document.getElementById("messageError");

    // Reset previous error messages
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";

    let hasError = false;

    // Check each field for empty value
    if (firstname.trim() === "") {
        firstNameError.textContent = "Please enter your first name.";
        hasError = true;
    }
    if (lastname.trim() === "") {
        lastNameError.textContent = "Please enter your last name.";
        hasError = true;
    }
    if (email.trim() === "") {
        emailError.textContent = "Please enter your email address.";
        hasError = true;
    }
    if (phone.trim() === "") {
        phoneError.textContent = "Please enter your phone number";
        hasError = true;
    }
    if (message.trim() === "") {
        messageError.textContent = "Please provide a message.";
        hasError = true;
    }

    if (hasError) {
        return false; // Prevent form submission
    }

    let params = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message
    };
    emailjs.send("service_ukutc8b", "template_reh3tab", params)
        .then(function (response) {
            console.log("Email sent!", response);
            showPopup("Thank you for contacting us!");
            clearContactForm();
        })
        .catch(function (error) {
            console.error("Email failed to send:", error);
            showPopup("Email failed to send. Please try again later.");
        });
    return false;
}

function clearContactForm() {
    let formInputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='number'], textarea");

    formInputs.forEach(function (input) {
        if (input.tagName.toLowerCase() === 'textarea') {
            input.value = ""; // Clear textarea
        } else {
            input.value = "";
        }
    });
}