const fullAddress = document.getElementById("full-address");
const emailId = document.getElementById("email-id");
const userName = document.getElementById("user-name");

// Fetch user details from the server
fetch("/user-details")
  .then(response => response.json())
  .then(userDetails => {
    userName.innerHTML = userDetails.firstName;
    fullAddress.value = userDetails.fullAddress;
    emailId.value = userDetails.emailId;
  });

// Make full address and email id fields editable
fullAddress.removeAttribute("readonly");
emailId.removeAttribute("readonly");

// Save the modified details to the server
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();

  const updatedUserDetails = {
    fullAddress: fullAddress.value,
    emailId: emailId.value
  };

  fetch("/save-user-details", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedUserDetails)
  });
});
