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
                                            <h4 class="page-title mb-0">AdminPanel</h4>
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
                            <div class="col-xl-3 col-md-6">
                                <div class="card mini-stats">
                                    <div class="p-3 mini-stats-content">
                                        <div class="mb-4">
                                            <div class="float-right text-right">
                                                <span class="badge badge-light text-info mt-2 mb-2">+10%</span> 
                                                <p class="text-white-50">From previous period</p>
                                            </div>
                                            
                                            <span class="peity-pie" data-peity='{ "fill": ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.2)"]}' data-width="54" data-height="54">5/8</span>
                                        </div>
                                    </div>
                                    <div class="ml-3 mr-3">
                                        <div class="bg-white p-3 mini-stats-desc rounded">
                                            <h5 class="float-right mt-0">5</h5>
                                            <h6 class="mt-0 mb-3">Users</h6>
                                            <p class="text-muted mb-0">Total Users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card mini-stats">
                                    <div class="p-3 mini-stats-content">
                                        <div class="mb-4">
                                            <div class="float-right text-right">
                                                <span class="badge badge-light text-danger mt-2 mb-2"></span> 
                                                <p class="text-white-50"></p>
                                            </div>
                                            
                                            <span class="peity-donut" data-peity='{ "fill": ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.2)"], "innerRadius": 18, "radius": 32 }' data-width="54" data-height="54">2/5</span>
                                        </div>
                                    </div>
                                    <div class="ml-3 mr-3">
                                        <div class="bg-white p-3 mini-stats-desc rounded">
                                            <h5 class="float-right mt-0">2</h5>
                                            <h6 class="mt-0 mb-3">Inscructors</h6>
                                            <p class="text-muted mb-0">Total Inscructors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card mini-stats">
                                    <div class="p-3 mini-stats-content">
                                        <div class="mb-4">
                                            <div class="float-right text-right">
                                                <span class="badge badge-light text-primary mt-2 mb-2"> +5% </span> 
                                                <p class="text-white-50">From previous period</p>
                                            </div>
                                            
                                            <span class="peity-pie" data-peity='{ "fill": ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.2)"]}' data-width="54" data-height="54">3/8</span>
                                        </div>
                                    </div>
                                    <div class="ml-3 mr-3">
                                        <div class="bg-white p-3 mini-stats-desc rounded">
                                            <h5 class="float-right mt-0">23</h5>
                                            <h6 class="mt-0 mb-3">City's</h6>
                                            <p class="text-muted mb-0">Total City's</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card mini-stats">
                                    <div class="p-3 mini-stats-content">
                                        <div class="mb-4">
                                            <div class="float-right text-right">
                                                <span class="badge badge-light text-info mt-2 mb-2"> +13% </span> 
                                                <p class="text-white-50">From previous period</p>
                                            </div>
                                            <span class="peity-donut" data-peity='{ "fill": ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.2)"], "innerRadius": 18, "radius": 32 }' data-width="54" data-height="54">3/5</span>
                                        </div>
                                    </div>
                                    <div class="ml-3 mr-3">
                                        <div class="bg-white p-3 mini-stats-desc rounded">
                                            <h5 class="float-right mt-0">5</h5>
                                            <h6 class="mt-0 mb-3">Passed</h6>
                                            <p class="text-muted mb-0">Users  passed official Exam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
                        <div class="row">
                            <div class="col-xl-4 col-md-6">
                                <div class="card messages">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Tickets From My Users</h4>

                                        <nav class="mt-4">
                                            <div class="nav nav-tabs latest-messages-tabs nav-justified" id="nav-tab" role="tablist">
                                                <a class="nav-item nav-link active" id="nav-first-tab" data-toggle="tab" href="#nav-first" role="tab" aria-controls="nav-first" aria-selected="true">
                                                    <h4 class="mt-0">30 MAY</h4>
                                                    <p class="text-muted mb-0">Open</p>
                                                </a>
                                                <a class="nav-item nav-link" id="nav-second-tab" data-toggle="tab" href="#nav-second" role="tab" aria-controls="nav-second" aria-selected="false">
                                                    <h4 class="mt-0">30 MAY</h4>
                                                    <p class="text-muted mb-0">Answered</p>
                                                </a>
                                            </div>
                                        </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane show active" id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab">
                                                <div class="p-2 mt-2">
                                                    <ul class="list-unstyled latest-message-list mb-0">
                                                        <li class="message-list-item">
                                                            <a href="#" class="text-dark">
                                                                <div class="media">
                                                                    <img class="mr-3 thumb-md rounded-circle" src="assets/images/users/avatar-2.jpg" alt="">
                                                                    <div class="media-body">
                                                                        <h6 class="mt-0">Michael Bowen</h6>
                                                                        <p class="text-muted mb-0">Hey! there I'm available...</p>
                                                                        <p class="time text-muted">Just Now</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li class="message-list-item">
                                                            <a href="#" class="text-dark">
                                                                <div class="media">
                                                                    <img class="mr-3 thumb-md rounded-circle" src="assets/images/users/avatar-3.jpg" alt="">
                                                                    <div class="media-body">
                                                                        <h6 class="mt-0">Danny Benson</h6>
                                                                        <p class="text-muted mb-0">I've finished it! See you so...</p>
                                                                        <p class="time text-muted">12 min ago</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li class="message-list-item">
                                                            <a href="#" class="text-dark">
                                                                <div class="media">
                                                                    <img class="mr-3 thumb-md rounded-circle" src="assets/images/users/avatar-4.jpg" alt="">
                                                                    <div class="media-body">
                                                                        <h6 class="mt-0">Brady Smith</h6>
                                                                        <p class="text-muted mb-0">This theme is awesome!</p>
                                                                        <p class="time text-muted">23 min ago</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul><br><div style="margin-bottom:10px;"></div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">
                                                <div class="p-2 mt-2">
                                                    <ul class="list-unstyled latest-message-list mb-0">
                                                        <li class="message-list-item">
                                                            <a href="#" class="text-dark">
                                                                <div class="media">
                                                                    <img class="mr-3 thumb-md rounded-circle" src="assets/images/users/avatar-5.jpg" alt="">
                                                                    <div class="media-body">
                                                                        <h6 class="mt-0">Albert Jones</h6>
                                                                        <p class="text-muted mb-0">Hey! there I'm available...</p>
                                                                        <p class="time text-muted"> 09:42am</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li class="message-list-item">
                                                            <a href="#" class="text-dark">
                                                                <div class="media">
                                                                    <img class="mr-3 thumb-md rounded-circle" src="assets/images/users/avatar-6.jpg" alt="">
                                                                    <div class="media-body">
                                                                        <h6 class="mt-0">Danny Benson</h6>
                                                                        <p class="text-muted mb-0">I've finished it! See you so...</p>
                                                                        <p class="time text-muted">11:07am</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li class="message-list-item">
                                                            <a href="#" class="text-dark">
                                                                <div class="media">
                                                                    <img class="mr-3 thumb-md rounded-circle" src="assets/images/users/avatar-5.jpg" alt="">
                                                                    <div class="media-body">
                                                                        <h6 class="mt-0">Daniel Anderson</h6>
                                                                        <p class="text-muted mb-0">Nice to meet you</p>
                                                                        <p class="time text-muted">34 min ago</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul><br><div style="margin-bottom:10px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-xl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">User News</h4>
                                        
                                        <div class="p-2">
                                            <ul class="list-unstyled rec-acti-list mb-0">
                                               <?php
                                                    $qq = @mysqli_query($conn, "SELECT * FROM news ORDER by id desc LIMIT 4") or die("error here");
                                                    while ($r = mysqli_fetch_assoc($qq)) {
                                                        echo  '<li class="rec-acti-list-item">';
                                                        echo      '<div>';
                                                        echo          '<p class="text-muted mb-0">'.$r['date'].'</p>';
                                                        echo          '<h6 class="mb-0"><a href="#" class="text-dark">'.stripcslashes($r['content']).'</a></h6>';
                                                        echo          '<div class="delete-icon">';
                                                        echo               '<a href="#" class="text-primary"><i class="mdi mdi-delete-forever h4"></i></a>';
                                                        echo          '</div>';
                                                        echo      '</div>';
                                                        echo  '</li>';
                                                        // echo'<div class="alert alert-success bg-success text-white"><b>'.stripcslashes($r['content']).'</b></h5><p class="list-group-item-text">'.$r['date'].'</p></div>';
                                                    }
?>
                                            </ul><br><div style="margin-bottom:5px;"></div>
                                        </div>
                                        <form>
                                            <div class="row">
                                                <div class="col-8 rec-acti-input">
                                                    <input type="text" name="rec-input-text" class="form-control" placeholder="Add news for Users">
                                                </div>
                                                <div class="col-4 rec-acti-send">
                                                    <button class="btn-primary btn-block btn" type="button"><i class="mdi mdi-plus mr-1"></i>Add</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Inscructor News</h4>
                                        
                                        <div class="p-2">
                                            <ul class="list-unstyled rec-acti-list mb-0">
                                                 <?php
                                                    $qq = @mysqli_query($conn, "SELECT * FROM inscnews ORDER by id desc LIMIT 4") or die("error here");
                                                    while ($r = mysqli_fetch_assoc($qq)) {
                                                      echo  '<li class="rec-acti-list-item">';
                                                      echo      '<div>';
                                                      echo          '<p class="text-muted mb-0">'.$r['date'].'</p>';
                                                      echo          '<h6 class="mb-0"><a href="#" class="text-dark">'.stripcslashes($r['content']).'</a></h6>';
                                                      echo          '<div class="delete-icon">';
                                                      echo               '<a href="#" class="text-primary"><i class="mdi mdi-delete-forever h4"></i></a>';
                                                      echo          '</div>';
                                                      echo      '</div>';
                                                      echo  '</li>';
                                                        // echo'<div class="alert alert-success bg-success text-white"><b>'.stripcslashes($r['content']).'</b></h5><p class="list-group-item-text">'.$r['date'].'</p></div>';
                                                    }
                                                ?>
                                               
                                            </ul><br><div style="margin-bottom:5px;"></div>
                                        </div>
                                        <form>
                                            <div class="row">
                                                <div class="col-8 rec-acti-input">
                                                    <input type="text" name="rec-input-text" class="form-control" placeholder="Add news for Inscructors">
                                                </div>
                                                <div class="col-4 rec-acti-send">
                                                    <button class="btn-primary btn-block btn" type="button"><i class="mdi mdi-plus mr-1"></i>Add</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
        
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">Random Users</h4>
                                        <div class="table-responsive mt-4">
                                            <table class="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">(#) Id</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Registred on</th>
                                                        <th scope="col">Inscructor</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Quizzes Entered</th>
                                                        <th scope="col" >AVG Score</th>
                                                        <th scope="col" >Action</th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">#16252</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-2.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Rafael Reardon
                                                            </div>
                                                        </td>
                                                        <td>30/05/2020</td>
                                                        <td>AutoShkolla</td>
                                                        <td><span class="badge badge-success">Completed</span></td>
                                                        <td>15</td>
                                                        <td>85%</td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#16253</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-3.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Thomas Hirsch
                                                            </div>
                                                        </td>
                                                        <td>30/05/2020</td>
                                                        <td>AutoNiti</td>
                                                        <td><span class="badge badge-danger">Not Yet</span></td>
                                                        <td>10</td>
                                                        <td>75%</td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#16254</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-4.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Archer Desaillly
                                                            </div>
                                                        </td>
                                                        <td>28/05/2020</td>
                                                        <td>AutoShkolla</td>
                                                        <td><span class="badge badge-success">Completed</span></td>
                                                        <td>17</td>
                                                        <td>83%</td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#16255</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-5.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Michael Flannery
                                                            </div>
                                                        </td>
                                                        <td>31/05/2020</td>
                                                        <td>AutoShkolla</td>
                                                        <td><span class="badge badge-danger">Not Yet</span></td>
                                                        <td>5</td>
                                                        <td>52%</td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">#16256</th>
                                                        <td>
                                                            <div>
                                                                <img src="assets/images/users/avatar-6.jpg" alt="" class="thumb-sm rounded-circle mr-2"> Jamie Fishbourne
                                                            </div>
                                                        </td>
                                                        <td>30/05/2020</td>
                                                        <td>AutoShkolla</td>
                                                        <td><span class="badge badge-danger">Not Yet</span></td>
                                                        <td>1</td>
                                                        <td>35%</td>
                                                        <td>
                                                            <div>
                                                                <a href="#" class="btn btn-primary btn-sm">Edit</a>
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