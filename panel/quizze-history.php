<?php
session_start();
date_default_timezone_set('UTC');
include "../config/db.php";

if (!isset($_SESSION['sname']) and !isset($_SESSION['spass'])) {
    header("location: ../login.php");
    exit();
}
$usrid = mysqli_real_escape_string($conn, $_SESSION['sname']);
$name = mysqli_query($conn, "SELECT * FROM users where username='$usrid'");
$data = mysqli_fetch_assoc($name);

function queryCount($query)
{
    global $conn;
    $mysql = mysqli_query($conn, $query);
    $mysql = @mysqli_num_rows($mysql);
    return $mysql;
}
$users = queryCount('select id from users');


include 'header.php';
?>
            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-title-box">
                                    <div class="row align-items-center">
                                        <div class="col-md-8">
                                            <h4 class="page-title mb-0">Dashboard</h4>
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="#">Foxia</a></li>
                                                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                            </ol>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="float-right d-none d-md-block">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary btn-rounded dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="ti-settings mr-1"></i> Settings
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Something else here</a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item" href="#">Separated link</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    
                        <!-- end row -->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Quizze History</h4>
                                        <div class="table-responsive mt-4">
                                            <table class="table table-hover mb-0">
                                           
                                                <thead>
                                                    <tr>
                                                        <th scope="col">(#) Id</th>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">City</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Score</th>
                                                        <th scope="col">Total Questions</th>                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <?php
                                                $result = "SELECT * from results WHERE usrid ='$usrid' ORDER by id desc LIMIT 5";
                                                $results = mysqli_query($conn, $result);
                                                while ($row = mysqli_fetch_array($results)) {
                                                    echo "<tr>
                                                                  <td>$row[id]</td>
                                                                  <td>$row[title]</td>
                                                                  <td><span class='badge badge-success'>$row[city]</span></td>
                                                                  <td>$row[date]</td>
                                                                  <td><span class='badge badge-primary'>$row[score]%</span></td>
                                                                  <td>25</td>
                                                                  
                                                             </tr>";
                                                }
                                                ?>
                                                    
                                                
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
        
                        
        
                     
                

                    </div> <!-- container-fluid -->

                </div> <!-- content -->
<?php include 'footer.php';?>
