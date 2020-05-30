<?php

$servername = "localhost";
$username = "yourUsername";
$password = "yourPassword";
$database = "yourDatabase";

// load the post data
$postdata = file_get_contents("php://input");
$data = json_decode($postdata, true);

$table = $data['table'];
$name = $data['name'];
$email = $data['email'];
$points = $data['points'];
$percentage = $data['percentage'];
$winningPersonality = $data['winningPersonality'];
$frequency = $data['frequency'];
$userAnswers = $data['userAnswers'];

function connect_DB($servername, $username, $password, $database) {
    $db_conn  = new mysqli($servername, $username, $password, $database);
    $char = $db_conn->query("SET NAMES 'utf8'");

    if ($db_conn->connect_error) {
        header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
        die("Connection failed: " . $db_conn->connect_error);
    }
    else {
        echo "Connected successfully \r\n";
    }
    return $db_conn;
}

function create_DB_table($db, $table) {
    $sql = "CREATE TABLE IF NOT EXISTS $table (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        reg_date TIMESTAMP
    )";

    if ($db->query($sql) == TRUE) {
         echo "Table successfully created \r\n";
     }
     else {
         header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
         die("Table creation failed: " . $db->error);

     }
}

function addColumnVarchar($conn_obj, $table, $column) {
    $sql = $conn_obj->prepare("SHOW COLUMNS FROM $table LIKE '%$column%'"); // add wildcard
    $sql->execute();
    if($sql->num_rows <= 0) {
        $sql->store_result();
        $sql1 = $conn_obj->prepare("ALTER TABLE $table ADD COLUMN $column VARCHAR(255)");
        $sql1->execute();
    }
}

function addColumnFloat($conn_obj, $table, $column) {
    $sql = $conn_obj->prepare("SHOW COLUMNS FROM $table LIKE '%$column%'"); // add wildcard
    $sql->execute();
    if($sql->num_rows <= 0) {
        $sql->store_result();
        $sql1 = $conn_obj->prepare("ALTER TABLE $table ADD COLUMN $column FLOAT");
        $sql1->execute();
    }
}

function insert_DB($db, $table, $column, $value) {
    $sql = "INSERT INTO $table ($column)
        VALUES ($value)";

    if( $db->query($sql) == TRUE) {
        echo "Records inserted successfully!";
    }

    else {
        header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
        die("Records insertion failed: " . $db->error);
    }
}

//connect to the database and create table
$conn_obj = connect_DB($servername, $username, $password, $database);
create_DB_table($conn_obj, $table);

$columnArr = array();
$valueArr = array();

if (!is_null($name)){
    addColumnVarchar($conn_obj, $table, 'name');
    array_push($columnArr, "name");
    array_push($valueArr, $name);
}
if (!is_null($email)){
    addColumnVarchar($conn_obj, $table, 'email');
    array_push($columnArr, "email");
    array_push($valueArr, $email);
}
if (!is_null($points)){
    addColumnFloat($conn_obj, $table, 'points');
    array_push($columnArr, "points");
    array_push($valueArr, $points);
}
if (!is_null($percentage)){
    addColumnFloat($conn_obj, $table, 'percentage');
    array_push($columnArr, "percentage");
    array_push($valueArr, $percentage);
}
if (!is_null($winningPersonality)){
    addColumnVarchar($conn_obj, $table, 'winningPersonality');
    array_push($columnArr, "winningPersonality");
    array_push($valueArr, $winningPersonality);
}
if (!is_null($frequency)){
    $frequencyString = implode(",", $frequency);
    addColumnVarchar($conn_obj, $table, 'frequency');
    array_push($columnArr, "frequency");
    array_push($valueArr, $frequencyString);
}
if (!is_null($userAnswers)){
    foreach ($userAnswers as $ua) {
        addColumnVarchar($conn_obj, $table, $ua['qID']);
        array_push($columnArr, $ua['qID']);
        array_push($valueArr, wordwrap($ua['answer'], 60, "\n", false));
    }
}


$column = implode(",", $columnArr);
$value = "'".implode("','", $valueArr)."'";

insert_DB($conn_obj, $table, $column, $value);

$conn_obj->close();

