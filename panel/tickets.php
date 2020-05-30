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
                         <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
        
                                        <h4 class="mt-0 header-title">My Tickets</h4>
                                        <p class="text-muted m-b-30 font-14">History of My Tickets.
                                        </p>
        
                                        <div class="table-responsive">
                                            <table class="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Departament</th>
                                                        <th>Title</th>
                                                        <th>Priority</th>
                                                        <th>Status</th>
                                                        <th>Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Technical Problem </td>
                                                        <td>Test 1</td>
                                                        <td>LOW</td>
                                                        <td><span class="badge badge-success badge-pill">Open</span></td>
                                                        <td><button class="btn btn-outline-success waves-effect waves-light">Open</button></td>
                                                    </tr>
                                                       <tr>
                                                        <th scope="row">1</th>
                                                        <td>Technical Problem </td>
                                                        <td>Test 1</td>
                                                        <td>LOW</td>
                                                        <td><span class="badge badge-info badge-pill">Answered</span></td>
                                                        <td><button class="btn btn-outline-success waves-effect waves-light">Reply</button></td>
                                                    </tr>
                                                       <tr>
                                                        <th scope="row">1</th>
                                                        <td>Technical Problem </td>
                                                        <td>Test 1</td>
                                                        <td>LOW</td>
                                                        <td><span class="badge badge-danger badge-pill">Closed</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
        
                                    </div>
                                </div>
                            </div> <!-- end col -->
                        </div>
                        <!-- end row -->
        
                        
        
                     
                

                    </div> <!-- container-fluid -->

                </div> <!-- content -->
<?php include 'footer.php';?>
