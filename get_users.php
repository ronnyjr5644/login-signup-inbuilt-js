<?php
  // Connect to the database
  $db = mysqli_connect("localhost", "root", "password", "uread");

  // Fetch the list of users from the database
  $result = mysqli_query($db, "SELECT * FROM users");
  $users = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $users[] = $row;
  }

  // Return the list of users as a JSON object
  header("Content-Type: application/json");
  echo json_encode($users);
?>
