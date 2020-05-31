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
                        

                    
                        <!-- end row -->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Add New User</h4><br><br><br>
                                         <form action="users.php">
            	<div id="wizard">
            		<!-- SECTION 1 -->
	                <h4></h4>
	                <section>
	                	<div class="form-header">
	                		<div class="avartar">
								<a href="#">
									<img src="assets/images/users/avatar-6.jpg" class="rounded-circle" alt="">
								</a>
								<div class="avartar-picker">
									<input type="file" name="file-1[]" id="file-1" class="inputfile" data-multiple-caption="{count} files selected" multiple />
									<label for="file-1">
										<i class="zmdi zmdi-camera"></i>
										<span>Choose Picture</span>
									</label>
								</div>
							</div>
							<div class="form-group">
								<div class="form-holder active">
									<input type="text" placeholder="Title" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value="" selected >Select Region</option>
                                        <option value="" >Mitrovice</option>
                                        <option value="" >Prishtine</option>
                                        <option value="" >Ferizaj</option>
                                        <option value="" >Prizren</option>
                                        <option value="" >Pej</option>
                                        <option value="" >Gjakov</option>
                                    </select>
								</div>
								<div class="form-holder">
									<input type="text" placeholder="City" class="form-control">
								</div>
							</div>
	                	</div>
	                	<div class="form-holder">
							<input type="text" placeholder="Short Description" class="form-control">
						</div>
						
	                </section>
	                
					<!-- SECTION 2 -->
	                <h4></h4>
	                 <section>
	                	<div class="form-header">
	                		<div class="avartar">
								<a href="#">
									<img src="assets/images/users/avatar-6.jpg" class="" alt="">
								</a>
								<div class="avartar-picker">
									<input type="file" name="file-1[]" id="file-1" class="inputfile" data-multiple-caption="{count} files selected" multiple />
									<label for="file-1">
										<i class="zmdi zmdi-camera"></i>
										<span>Choose Picture</span>
									</label>
								</div>
							</div>
							<div class="form-group">
								<div class="form-holder active">
									<input type="text" placeholder="Title" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value="" selected >Question Type</option>
                                        <option value="" >Multiple Answer</option>
                                        <option value="" >Signle with Pic</option>
                                        <option value="" >Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer One" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Two" class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Three" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Four" class="form-control">
                            </div>  
                        </div>
						
	                </section>

	                <!-- SECTION 2 -->
	                <h4></h4>
	                 <section>
	                	<div class="form-header">
	                		<div class="avartar">
								<a href="#">
									<img src="assets/images/users/avatar-6.jpg" class="" alt="">
								</a>
								<div class="avartar-picker">
									<input type="file" name="file-1[]" id="file-1" class="inputfile" data-multiple-caption="{count} files selected" multiple />
									<label for="file-1">
										<i class="zmdi zmdi-camera"></i>
										<span>Choose Picture</span>
									</label>
								</div>
							</div>
							<div class="form-group">
								<div class="form-holder active">
									<input type="text" placeholder="Title" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value="" selected >Question Type</option>
                                        <option value="" >Multiple Answer</option>
                                        <option value="" >Signle with Pic</option>
                                        <option value="" >Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer One" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Two" class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Three" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Four" class="form-control">
                            </div>  
                        </div>
						
                    </section>
                    <!-- SECTION 2 -->
	                <h4></h4>
	                 <section>
	                	<div class="form-header">
	                		<div class="avartar">
								<a href="#">
									<img src="assets/images/users/avatar-6.jpg" class="" alt="">
								</a>
								<div class="avartar-picker">
									<input type="file" name="file-1[]" id="file-1" class="inputfile" data-multiple-caption="{count} files selected" multiple />
									<label for="file-1">
										<i class="zmdi zmdi-camera"></i>
										<span>Choose Picture</span>
									</label>
								</div>
							</div>
							<div class="form-group">
								<div class="form-holder active">
									<input type="text" placeholder="Title" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value="" selected >Question Type</option>
                                        <option value="" >Multiple Answer</option>
                                        <option value="" >Signle with Pic</option>
                                        <option value="" >Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer One" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Two" class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Three" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Four" class="form-control">
                            </div>  
                        </div>
						
                    </section>
                    <!-- SECTION 2 -->
	                <h4></h4>
	                 <section>
	                	<div class="form-header">
	                		<div class="avartar">
								<a href="#">
									<img src="assets/images/users/avatar-6.jpg" class="" alt="">
								</a>
								<div class="avartar-picker">
									<input type="file" name="file-1[]" id="file-1" class="inputfile" data-multiple-caption="{count} files selected" multiple />
									<label for="file-1">
										<i class="zmdi zmdi-camera"></i>
										<span>Choose Picture</span>
									</label>
								</div>
							</div>
							<div class="form-group">
								<div class="form-holder active">
									<input type="text" placeholder="Title" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value="" selected >Question Type</option>
                                        <option value="" >Multiple Answer</option>
                                        <option value="" >Signle with Pic</option>
                                        <option value="" >Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer One" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Two" class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Three" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Four" class="form-control">
                            </div>  
                        </div>
						
                    </section>
                    <!-- SECTION 2 -->
	                <h4></h4>
	                 <section>
	                	<div class="form-header">
	                		<div class="avartar">
								<a href="#">
									<img src="assets/images/users/avatar-6.jpg" class="" alt="">
								</a>
								<div class="avartar-picker">
									<input type="file" name="file-1[]" id="file-1" class="inputfile" data-multiple-caption="{count} files selected" multiple />
									<label for="file-1">
										<i class="zmdi zmdi-camera"></i>
										<span>Choose Picture</span>
									</label>
								</div>
							</div>
							<div class="form-group">
								<div class="form-holder active">
									<input type="text" placeholder="Title" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value="" selected >Question Type</option>
                                        <option value="" >Multiple Answer</option>
                                        <option value="" >Signle with Pic</option>
                                        <option value="" >Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer One" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Two" class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Three" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Answer Four" class="form-control">
                            </div>  
                        </div>
						
	                </section>
            	</div>
            </form>
            <script>
                
            </script>
                                        
                                         
                                                                              
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                        
        
                        
        
                     
                

                    </div> <!-- container-fluid -->

                </div> <!-- content -->
<?php include 'footer.php';?>
