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
                                            <h4 class="page-title mb-0">Dashboard</h4>
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="#"><?php echo $sitename;?></a></li>
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

                   
        
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Users List</h4>
                                        <div class="table-responsive mt-4">
                                            <table class="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">(#) Id</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Registred on</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Quizzes Entered</th>
                                                        <th scope="col" >AVG Score</th>
                                                        <th scope="col" >Action</th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">#5</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-2.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Rafael Reardon
                                                            </div>
                                                        </td>
                                                        <td>30/05/2020</td>
                                                        <td><span class="badge badge-success">Completed</span></td>
                                                        <td>15</td>
                                                        <td>85%</td>
                                                        <td>
                                                           <div>
                                                                <a href="#" class="btn btn-primary btn-sm"><i class="mdi mdi-lead-pencil"></i> </a>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="sa-params"><i class="mdi mdi-delete"></i></i></button>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="ajax-alert"><i class="mdi mdi-send"></i></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#4</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-3.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Thomas Hirsch
                                                            </div>
                                                        </td>
                                                        <td>30/05/2020</td>
                                                        <td><span class="badge badge-danger">Not Yet</span></td>
                                                        <td>10</td>
                                                        <td>75%</td>
                                                        <td>
                                                           <div>
                                                                <a href="#" class="btn btn-primary btn-sm"><i class="mdi mdi-lead-pencil"></i> </a>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="sa-params"><i class="mdi mdi-delete"></i></i></button>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="ajax-alert"><i class="mdi mdi-send"></i></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#3</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-4.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Archer Desaillly
                                                            </div>
                                                        </td>
                                                        <td>28/05/2020</td>
                                                        <td><span class="badge badge-success">Completed</span></td>
                                                        <td>17</td>
                                                        <td>83%</td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm"><i class="mdi mdi-lead-pencil"></i> </a>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="sa-params"><i class="mdi mdi-delete"></i></i></button>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="ajax-alert"><i class="mdi mdi-send"></i></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#2</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-5.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Michael Flannery
                                                            </div>
                                                        </td>
                                                        <td>31/05/2020</td>
                                                        <td><span class="badge badge-danger">Not Yet</span></td>
                                                        <td>5</td>
                                                        <td>52%</td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm"><i class="mdi mdi-lead-pencil"></i> </a>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="sa-params"><i class="mdi mdi-delete"></i></i></button>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="ajax-alert"><i class="mdi mdi-send"></i></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#1</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-6.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Jamie Fishbourne
                                                            </div>
                                                        </td>
                                                        <td>30/05/2020</td>
                                                        <td><span class="badge badge-danger">Not Yet</span></td>
                                                        <td>1</td>
                                                        <td>35%</td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm"><i class="mdi mdi-lead-pencil"></i> </a>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="sa-params"><i class="mdi mdi-delete"></i></i></button>
                                                                <button type="button" class="btn btn-danger btn-sm waves-effect waves-light" id="ajax-alert"><i class="mdi mdi-send"></i></i></button>
                                                            </div>
                                                        </td>
                                                    </tr>
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