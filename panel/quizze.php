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
                                            <h4 class="page-title mb-0">Quizzes</h4>
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="#"><?php echo $sitename;?></a></li>
                                                <li class="breadcrumb-item active" aria-current="page">Quizzes</li>
                                            </ol>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="float-right d-none d-md-block">
                                                <div class="dropdown">
                                                    <button class="btn btn-primary btn-rounded " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="ti-settings mr-1"></i> Random Test
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                        <div class="wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div  class="card-body">
                                <p class="text-muted m-b-30 font-14"><nav aria-label="...">
                                    <ul class="pagination">
                                        <li class="page-item disabled">
                                            <a class="page-link"  href="#" tabindex="-1">Ktheu</a>
                                        </li>
                                        <li id="p-1" class="page-item faqe ">
                                            <a  class="page-link flag" data-flag="1" href="#">1</a></li>
                                        <li id="p-2" class="page-item faqe">
                                            <a class="page-link flag" data-flag="2" href="#">2 <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li id="p-3" class="page-item">
                                            <a class="page-link flag" data-flag="3" href="#">3</a></li>
                                        <li  class="page-item disabled">
                                            <a class="page-link" href="#">Vazhdo</a>
                                        </li>
                                    </ul>
                                </nav>
                                
                                    <table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                     <!-- Simple card -->
                                        <div id="page-1" class="row slide">
                                             <!-- Simple card -->
                                            <div id="1" class="card col-md-4 col-sm-12">
                                                <img class="card-img-top img-fluid" src="assets/images/auto.png" alt="Card image cap">
                                                <div class="card-body">
                                                    <h4 class="card-title font-20 mt-0"> Testi 1</h4>
                                                    <p class="card-text">Pyetje nga testet e meparshme të provimit me shkrim.</p>
                                                   <button class="btn btn-primary btn-block waves-effect waves-light" onclick="window.location.href = 'testi-1/'">Fillo Testin</button>
                                                </div>
                                            </div>
                                            <!-- Simple card -->
                                            <div id="2" class="card col-md-4 col-sm-12">
                                                <img class="card-img-top img-fluid" src="assets/images/auto.png" alt="Card image cap">
                                                <div class="card-body">
                                                    <h4 class="card-title font-20 mt-0">Testi 2</h4>
                                                    <p class="card-text">Pyetje nga testet e meparshme të provimit me shkrim..</p>
                                                        <button class="btn btn-primary btn-block waves-effect waves-light"onclick="window.location.href = 'testi-1/'">Fillo Testin</button>
                                                    </div>
                                            </div>
                                            <!-- Simple card -->
                                            <div id="2" class="card col-md-4 col-sm-12">
                                                <img class="card-img-top img-fluid" src="assets/images/auto.png" alt="Card image cap">
                                                <div class="card-body">
                                                    <h4 class="card-title font-20 mt-0">Testi 3</h4>
                                                    <p class="card-text">Pyetje nga testet e meparshme të provimit me shkrim..</p>
                                                        <button class="btn btn-primary btn-block waves-effect waves-light"onclick="window.location.href = 'testi-1/'">Fillo Testin</button>
                                                    </div>
                                            </div>
                                            <!-- Simple card -->
    
                                   


                                       

                                            </div><!-- end col -->
                                   
               

                                       </div>

                                    </table>
                                    <nav aria-label="...">
                                        <ul class="pagination">
                                            <li class="page-item disabled">
                                                <a class="page-link"  href="#" tabindex="-1">Kthehu</a>
                                            </li>
                                            <li id="p-1" class="page-item faqe ">
                                                <a  class="page-link flag" data-flag="1" href="#">1</a></li>
                                            <li id="p-2" class="page-item faqe">
                                                <a class="page-link flag" data-flag="2" href="#">2 <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li id="p-3" class="page-item">
                                                <a class="page-link flag" data-flag="3" href="#">3</a></li>
                                            <li  class="page-item disabled ">
                                                <a class="page-link" href="#">Vazhdoxt</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> <!-- end container -->
        </div>
        <!-- end wrapper -->

        
        
                        
        
                     
                

                    </div> <!-- container-fluid -->

                </div> <!-- content -->
<?php include 'footer.php';?>
