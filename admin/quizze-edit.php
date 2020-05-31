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
                                        <h4 class="mt-0 header-title">Edit Quiestions</h4><br><br><br>
                                         <form action="users.php">
            	<div id="wizard">
            		<!-- SECTION 1 -->
	                <h4></h4>
	                <section>
	                	<div class="form-header">
	                		<div class="avartar">
								<a href="#">
									<img src="../panel/assets/images/auto.png" class="" alt="" width:150px;>
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
									<input type="text" value="Testi 1" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value="">Select Region</option>
                                        <option value="" selected>Mitrovice</option>
                                        <option value="" >Prishtine</option>
                                        <option value="" >Ferizaj</option>
                                        <option value="" >Prizren</option>
                                        <option value="" >Pej</option>
                                        <option value="" >Gjakov</option>
                                    </select>
								</div>
								<div class="form-holder">
									<input type="text" value="Mitrovica" class="form-control">
								</div>
							</div>
	                	</div>
	                	<div class="form-holder">
							<input type="text" value="Pyetje nga testet e meparshme të provimit me shkrim." class="form-control">
						</div>
						
	                </section>
	                
					<!-- SECTION 2 -->
	                <h4></h4>
	                 <section>
	                	<div class="form-header">
	                		<div class="avartar">
								<a href="#">
									<img src="https://i.imgur.com/7i5pGID.png" class="" alt="">
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
									<input type="text" value="Çka duhet të keni parasysh në këtë situatë?" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value=""  >Question Type</option>
                                        <option value="" selected >Multiple Answer</option>
                                        <option value="" >Signle with Pic</option>
                                        <option value="" >Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1" checked>
                                <input type="text" value="Anashkalimin e obliguar nga ana e majtë." class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1" checked>
                                <input type="text" value="Në përshtatje të shpejtësisë." class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Vendkalimin e shënuar për këmbësorë." class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Question Four." class="form-control">
                            </div>
                        </div>
						
	                </section>

	                <!-- SECTION 2 -->
	                <h4></h4>
	                 <section>
	                	<div class="form-header">
	                		<div class="avartar">
								<a href="#">
									<img src="https://i.imgur.com/t24r2zK.png" class="" alt="">
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
									<input type="text" value="Çka paralajmëron kjo shenjë e trafikut?" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value=""  >Question Type</option>
                                        <option value="" >Multiple Answer</option>
                                        <option value="" selected>Signle with Pic</option>
                                        <option value="" >Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Afërsinë e bregdetit." class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1" checked>
                                <input type="text" value="Urën lëvizëse." class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Rrugën jo të rrafshtë." class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" placeholder="Question Four." class="form-control">
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
									<input type="text" value="Cilat mjete përfshihen në kategorinë B?" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value=""  >Question Type</option>
                                        <option value="" >Multiple Answer</option>
                                        <option value="" >Signle with Pic</option>
                                        <option value="" selected>Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Mjetet e udhëtarëve" class="form-control" checked>
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Motokulvitatorët" class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Vetem Vetura" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Kamioni" class="form-control">
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
									<input type="text" value="Ku ndalohet ndalja e mjetit?" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value="" selected >Question Type</option>
                                        <option value="" >Multiple Answer</option>
                                        <option value="" >Signle with Pic</option>
                                        <option value="" selected>Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1" checked>
                                <input type="text" value="Në nënkalime" class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Mbi rrjetin e kanalizimit" class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Brenda zonës urbane" class="form-control">
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
									<img src="https://i.imgur.com/Zv54Bzx.png" class="" alt="">
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
									<input type="text" value="Shoferi i automjetit të udhëtarëve hyn në trafik duke lëvizur prapa. Si e vlerësoni këtë situatë ?" class="form-control">
								</div>
								<div class="form-holder">
									<select name="" id="" class="form-control">
                                        <option value=""  >Question Type</option>
                                        <option value="" selected>Multiple Answer</option>
                                        <option value="" >Signle with Pic</option>
                                        <option value="" >Single without Pic</option>
                                    </select>
								</div>
							</div>
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1" checked>
                                <input type="text" value="Drejt, nëse nuk i pengon pjesëmarrësit tjerë në trafik." class="form-control">
                            </div>
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1" checked>
                                <input type="text" value="Drejt, nëse nuk i pengon pjesëmarrësit tjerë në trafik dhe i ndez të gjithë treguesit e drejtimit."" class="form-control">
                            </div>  
                        </div>
                        <div class="row">
                            <div class="form-holder1">
                                <input type="checkbox" class="form-check-input tik" id="exampleCheck1">
                                <input type="text" value="Jo Drejt!" class="form-control">
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
