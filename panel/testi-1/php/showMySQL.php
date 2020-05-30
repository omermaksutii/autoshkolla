<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>MySQL Table</title>
<link href="../css/quickquiz.css" rel="stylesheet">
</head>

<body>

<div class="tableText">
<h1>MySQL Table</h1>
<p></p>

<?php
$servername = "localhost";
$username = "yourUsername";
$password = "yourPassword";
$database = "yourDatabase";
$table = "yourTable";

$db = new mysqli($servername, $username, $password, $database);
$sqlresult = $db->query( "SELECT * FROM $table") ;

echo "<table class='tableMySQL'>";
$counter = 0 ;
while( $row = $sqlresult->fetch_assoc()  ){
    if ( $counter===0 ) {
      echo "<tr>";

      foreach ($row as $key => $value ) {
          echo  "<th>" . utf8_encode($key) . "</th>" ;
      }
      echo  "</tr>";
      $counter = 1;
    }
      echo  "<tr>";
      foreach ($row as $key => $value ) {
          echo   "<td>" . utf8_encode($value) . "</td>";
      }
      echo  "</tr>" ;
  }
  echo "</table>";

?>

</body>
</html>