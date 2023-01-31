<?php
  // Connect to the database
  $conn = mysqli_connect("host", "username", "password", "database");

  // Save the modified user details
  $fullAddress = mysqli_real_escape_string($conn, $_POST["fullAddress"]);
  $emailId = mysqli_real_escape_string($conn, $_POST["emailId"]);

  $query = "UPDATE users SET fullAddress='$fullAddress', emailId='$emailId' WHERE id='$userId'";
  mysqli_query($conn, $query);

  // Close the database connection
  mysqli_close($conn);
?>
