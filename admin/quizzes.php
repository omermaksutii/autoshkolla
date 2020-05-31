<?php
session_start();
date_default_timezone_set('UTC');
include "../config/db.php";




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
                                            <h4 class="page-title mb-0">Inscructors</h4>
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="#"><?php echo $sitename;?></a></li>
                                                <li class="breadcrumb-item active" aria-current="page">Inscructors</li>
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

                   
        
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Inscructor List</h4>
                                        <div class="table-responsive mt-4">
                                            <table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                     <!-- Simple card -->
                                        <div id="page-1" class="row slide">
                                             <!-- Simple card -->
                                            <div id="1" class="card col-md-4 col-sm-12">
                                                <img class="card-img-top img-fluid" src="../panel/assets/images/auto.png" alt="Card image cap">
                                                <div class="card-body">
                                                    <h4 class="card-title font-20 mt-0"> Testi 1 - Mitrovice</h4>
                                                    <p class="card-text">Pyetje nga testet e meparshme të provimit me shkrim.</p>
                                                   <button class="btn btn-primary btn-block waves-effect waves-light" onclick="window.location.href = 'quizze-edit.php'">Fillo Testin</button>
                                                </div>
                                            </div>
                                            <!-- Simple card -->
                                            <div id="2" class="card col-md-4 col-sm-12">
                                                <img class="card-img-top img-fluid" src="../panel/assets/images/auto.png" alt="Card image cap">
                                                <div class="card-body">
                                                    <h4 class="card-title font-20 mt-0">Testi 1 - Prishtine</h4>
                                                    <p class="card-text">Pyetje nga testet e meparshme të provimit me shkrim..</p>
                                                        <button class="btn btn-primary btn-block waves-effect waves-light"onclick="window.location.href = 'quizze-edit.php'">Fillo Testin</button>
                                                    </div>
                                            </div>
                                            <!-- Simple card -->
                                            <div id="2" class="card col-md-4 col-sm-12">
                                                <img class="card-img-top img-fluid" src="../panel/assets/images/auto.png" alt="Card image cap">
                                                <div class="card-body">
                                                    <h4 class="card-title font-20 mt-0">Testi 1 - Ferizaj</h4>
                                                    <p class="card-text">Pyetje nga testet e meparshme të provimit me shkrim..</p>
                                                        <button class="btn btn-primary btn-block waves-effect waves-light"onclick="window.location.href = 'quizze-edit.php'">Fillo Testin</button>
                                                    </div>
                                            </div>
                                            <!-- Simple card -->
    
                                   


                                       

                                            </div><!-- end col -->
                                   
               

                                       </div>

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