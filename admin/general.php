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
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">General Settings</h4>
                                        <div class="table-responsive mt-4">
                                            <div class="form-holder col-md-6">
                                                <input type="text" placeholder="Site Name" class="form-control">
                                            </div>
                                             <div class="form-holder col-md-6">
                                                <input type="text" placeholder="Site URL" class="form-control">
                                            </div> 
                                            
                                            <h4 class="mt-0 header-title">Allow Inscructors To Create Users</h4>
                                        
            
                                            <div>
                                                <input type="checkbox" id="switch1" switch="none" checked/>
                                                <label for="switch1" data-on-label="Yes"
                                                        data-off-label="No"></label>
                                            </div>
                                            <div class="form-group mb-0">
                                                <div>
                                                    <button type="submit" class="btn btn-pink waves-effect waves-light">
                                                        Save
                                                    </button>
                                                    <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Email Settings</h4>
                                        <div class="table-responsive mt-4">
                                            <div class="row">
                                                <div class="form-holder col-md-6">
                                                <input type="text" value="AutoShkolla" class="form-control">
                                            </div>
                                             <div class="form-holder col-md-6">
                                                <input type="text" value="support@autoshkolla.com" class="form-control">
                                            </div> 
                                            </div>
                                             <div class="row">
                                                <div class="form-holder col-md-6">
                                                <input type="text" placeholder="Subject" class="form-control">
                                            </div>
                                            </div>
                                             <div class="row">
                                              <textarea name="" id="" cols="5" rows="10" class="form-control"  placeholder="Dear {firstname},

Here is your account login details:

Email Address: {email}
Password: {password}

Login Panel: {clientarealink}

AutoShkolla"></textarea>
                                            </div>
                                            <div class="form-group mb-0">
                                                <div>
                                                    <button type="submit" class="btn btn-pink waves-effect waves-light">
                                                        Save
                                                    </button>
                                                    <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                         
                                         
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                    </div> <!-- container-fluid -->

                </div> <!-- content -->

               <?php include 'footer.php';?>