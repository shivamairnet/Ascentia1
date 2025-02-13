// Initialize EmailJS
emailjs.init('Xws9hZ7gOUXxCs3lu'); // Replace with your EmailJS User ID

// Function to load the form into a container
function loadContactForm(containerId) {
  fetch('./form.html')
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;

      // Add event listener to the dynamically loaded form
      const form = document.getElementById('contactForm');
      if (form) {
        form.addEventListener('submit', handleFormSubmit);
      } else {
        console.error('Form with id "contactForm" not found.');
      }
    })
    .catch((error) => console.error('Error loading the form:', error));
}

// Function to handle form submission
function handleFormSubmit(event) {
  console.log("Event",event);
  // Assuming `event` is your event object
const targetElement = event.target; // The element that triggered the event
const parentElement = targetElement.parentElement; // Get the parent element
const parentId = parentElement.id; // Access the parent's ID

console.log(parentId); // This will log "contactFormContainer"

  fetch('./Loading.html')
  .then((response) => response.text())
  .then((html) => {
    document.getElementById(parentId).innerHTML = html;
  })
    .catch((error)=>console.error('Error loading ', error));
 
  event.preventDefault(); // Prevent default form submission

  const form = event.target; // Get the form element

  // Extract form values
  const fullName = form.querySelector('#fullName')?.value || ''; // Default to an empty string if not found
  const email = form.querySelector('#email')?.value || '';
  const phone = form.querySelector('#phone')?.value || '';
  const message = form.querySelector('#message')?.value || '';
  const formMessage = form.querySelector('#formMessage');

  console.log({ fullName, email, phone, message, formMessage });

  let isValid = true;

  // Reset error messages
  document.querySelectorAll('.error').forEach((error) => (error.style.display = 'none'));
  if (formMessage) {
    formMessage.style.display = 'none';
  }

  // Validation
  if (!fullName) {
    isValid = false;
    const nameError = document.getElementById('nameError');
    if (nameError) {
      nameError.innerText = 'Full Name is required';
      nameError.style.display = 'block';
    }
  }

  if (!email) {
    isValid = false;
    const emailError = document.getElementById('emailError');
    if (emailError) {
      emailError.innerText = 'Invalid Email Address';
      emailError.style.display = 'block';
    }
  }

  if (!phone) {
    isValid = false;
    const phoneError = document.getElementById('phoneError');
    if (phoneError) {
      phoneError.innerText = 'Phone Number is required';
      phoneError.style.display = 'block';
    }
  }

  if (!message) {
    isValid = false;
    const messageError = document.getElementById('messageError');
    if (messageError) {
      messageError.innerText = 'Message is required';
      messageError.style.display = 'block';
    }
  }

  // Stop if the form is not valid
  if (!isValid) return;

  console.log('Validation passed. Sending email...');

  // EmailJS Integration
  const serviceID = 'service_0ftxvuf'; // Replace with your service ID
  const templateID = 'template_6dsymfm'; // Replace with your template ID

  emailjs
    .sendForm(serviceID, templateID, form)
    .then(() => {
      if (formMessage) {
        fetch('./EmailSuccess.html')
        .then((response) => response.text())
        .then((html) => {
          document.getElementById(parentId).innerHTML = html;
        })
          .catch((error)=>console.error('Error loading ', error));
        formMessage.className = 'form-message success';
        formMessage.innerText = 'Email sent successfully!';
        formMessage.style.display = 'block';
      }

      // Reset the form after successful submission
      form.reset();
    })
    .catch((error) => {
      if (formMessage) {
        formMessage.className = 'form-message error';
        formMessage.innerText = `Failed to send email: ${error.text}`;
        formMessage.style.display = 'block';
      }
      console.error('Error sending email:', error);
    });
}
