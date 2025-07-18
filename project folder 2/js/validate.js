// js/validate.js

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    alert("Thank you! Your message has been sent.");
    return true;
  }
  