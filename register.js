document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form data
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    // Validate form data
    if (userId.length < 6 || userId.length > 10) {
      alert("User Id should be between 6 to 10 characters");
      return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(userId)) {
      alert("User Id should consist of a combination of uppercase, lowercase and digit characters");
      return;
    }
    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$_])[A-Za-z\d@#$_]+$/.test(password)) {
      alert("Password should consist of a combination of uppercase, lowercase, digit characters and at least one special character ( @, #, _)");
      return;
    }
    if (password !== confirmPassword) {
      alert("Confirm password field should be same as password");
      return;
    }
    if (firstName.length > 30) {
      alert("First Name should be maximum 30 characters");
      return;
    }
    if (lastName.length < 30) {
      alert("Last Name should be minimum 30 characters");
      return;
    }
    if (address.length > 250) {
      alert("Address should be maximum 250 characters");
      return;
    }
    if (email.length > 40) {
      alert("Email should be maximum 40 characters");
      return;
    }
    if (phone.length > 10) {
      alert("Phone Number should be maximum 10 digits");
      return;
    }
  
    // Submit the form data to the server
  
    // Redirect to the "User created successfully" information screen
    window.location.href = "success.html";
  });
  
//// JavaScript for form validation in user registration form

// function validateForm() {
//     // Get values of form fields
//     var userid = document.getElementById("userid").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;
//     var firstName = document.getElementById("firstName").value;
//     var middleName = document.getElementById("middleName").value;
//     var lastName = document.getElementById("lastName").value;
//     var fullAddress = document.getElementById("fullAddress").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
  
//     // Regular expressions for userid, password and phone number validation
//     var useridPattern = /^[a-zA-Z0-9]{6,10}$/;
//     var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$_]).{8,}$/;
//     var phonePattern = /^\d{10}$/;
  
//     // Validate userid
//     if (!userid.match(useridPattern)) {
//       alert("User ID should be between 6 to 10 characters and consist of a combination of uppercase, lowercase and digit characters");
//       return false;
//     }
  
//     // Validate password
//     if (!password.match(passwordPattern)) {
//       alert("Password should be between 8 characters, consisting of a combination of uppercase, lowercase, digit characters and at least one special character (@, #, _)");
//       return false;
//     }
  
//     // Validate confirm password
//     if (password !== confirmPassword) {
//       alert("Confirm password should be same as password");
//       return false;
//     }
  
//     // Validate first name
//     if (firstName.length > 30) {
//       alert("First name should be 30 characters maximum");
//       return false;
//     }
  
//     // Validate last name
//     if (lastName.length < 30) {
//       alert("Last name should be 30 characters minimum");
//       return false;
//     }
  
//     // Validate full address
//     if (fullAddress.length > 250) {
//       alert("Full address should be 250 characters maximum");
//       return false;
//     }
  
//     // Validate email
//     if (email.length > 40) {
//       alert("Email should be 40 characters maximum");
//       return false;
//     }
  
//     // Validate phone number
//     if (!phone.match(phonePattern)) {
//       alert("Phone number should be 10 digits maximum and consist of only digits");
//       return false;
//     }
  
//     // If all validation is successful, submit form
//     return true;
//   }
  