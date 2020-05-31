<?php
session_start();
date_default_timezone_set('UTC');
include "../config/db.php";



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
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Edit Profile</h4><br><br>

                                        <div class="media m-b-30">
                                            <img class="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-6.jpg" alt="Generic placeholder image" height="64">
                                            <div class="media-body">
                                                <h5 class="mt-0 font-16">Change Photo</h5>
                                                <input type="file" class="filestyle" data-input="false" data-buttonname="btn-secondary">

                                            </div>
                                        </div>
                                        
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Full Name</label>
                                            <div class="col-sm-4">
                                                <input class="form-control" type="text" value="Auto Shkolla" id="example-text-input">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Username</label>
                                            <div class="col-sm-4">
                                                <input class="form-control" type="text" value="autoshkolla" readonly id="example-text-input">
                                            </div>
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Email</label>
                                            <div class="col-sm-4">
                                                <input class="form-control" type="text" value="support@autoshkolla.com" id="example-text-input">
                                            </div>
                                        </div>
                                         <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Password</label>
                                            <div class="col-sm-4">
                                                <input class="form-control" type="password" placeholder="*******"  id="example-text-input">
                                            </div>
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Confirm Password</label>
                                            <div class="col-sm-4">
                                                <input class="form-control" type="password" placeholder="*******" id="example-text-input">
                                            </div>
                                        </div>
                                        <div class="form-group mb-0">
                                                <div>
                                                    <button type="submit" class="btn btn-pink waves-effect waves-light" id="sa-image">
                                                        Submit
                                                    </button>
                                                    <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        
                                      
                                         
                                                                           
                                    </div>
                                </div>
                            </div>
                             <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Profile Status</h4><br>
                                        <div class="alert alert-primary" role="alert">
                                               Welcome Back <strong>Auto Shkolla!</strong> Here is your account status.
                                        </div>
                                        <br><h4>Statistics</h4>
                                        <ul class="user-info">
                                        <li>Total Users : <b>5</b></li>
                                        <li>Average Score : <b>75%</b></li>
                                        <li>Users Finished Exam : <b>2</b></li>
                                        <li>Users in Progress : <b>3</b></li>
                                        <li>Tickets : <b>12</b></li>
                                        </ul>
                                        


                                    
                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
        
                        
        
                     
                

                    </div> <!-- container-fluid -->

                </div> <!-- content -->
<?php include 'footer.php';?>
