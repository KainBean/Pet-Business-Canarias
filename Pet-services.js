// Add a submit event listener to the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the values of the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate the input fields
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all the fields.');
      return;
    }
  
    // Send the message to the server
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/send-message');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Your message has been sent!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      } else {
        alert('There was a problem sending your message. Please try again later.');
      }
    };
    xhr.send(`name=${name}&email=${email}&message=${message}`);
  });
  
  