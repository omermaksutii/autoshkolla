<?php
  ob_start();
  session_start();
  include "config/db.php";
  include 'encrypt.php';
  date_default_timezone_set('UTC');
  

  if (isset($_SESSION['sname']) and isset($_SESSION['spass'])) {
      header("location: panel/index.php");
      exit();
  }
  if (isset($_POST['user'],$_POST['pass'])) {
        
  } else {
      header('location:panel/index.php');
      exit();
  }
  $username = mysqli_real_escape_string($conn, strip_tags($_POST['user']));
  $passnotc = mysqli_real_escape_string($conn, strip_tags($_POST['pass']));
  $userpass = dec_enc('encrypt', $passnotc);
  $finder = mysqli_query($conn, "SELECT * FROM users WHERE username='".strtolower($username)."' AND password='".$userpass."'") or die("mysqli error");
  if (mysqli_num_rows($finder) != 0) {
      $row = mysqli_fetch_assoc($finder);
      if (strtolower($username) == strtolower($row['username']) and $userpass==$row['password']) {

          $_SESSION['sname'] = $username;
          $_SESSION['spass'] = $userpass;
          header('location:panel/index.php');
          exit();
      } else {

          header('location:login.php?error=true');
          exit();
      }
  } else {

      header('location:login.php?error=true');
      exit();
  }
