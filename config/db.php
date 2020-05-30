<?php
  
$servername = "localhost";
$username = "autoshkolla";
$password = "p9gbMmbkYswdgBhO";
$sitename = "AutoShkolla"; //site title

// Create connection
$conn = mysqli_connect($servername, $username, $password);
mysqli_select_db($conn, "autoshkolla");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
