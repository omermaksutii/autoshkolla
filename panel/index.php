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
                                                <span class="badge badge-light text-info mt-2 mb-2"></span> 
                                                <p class="text-white-50"></p>
                                            </div>
                                            
                                            <span class="peity-pie" data-peity='{ "fill": ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.2)"]}' data-width="54" data-height="54">5/8</span>
                                        </div>
                                    </div>
                                    <div class="ml-3 mr-3">
                                        <div class="bg-white p-3 mini-stats-desc rounded">
                                            <h5 class="float-right mt-0"><?php echo $users;?></h5>
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
                                            <h5 class="float-right mt-0">1</h5>
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
                                                <span class="badge badge-light text-primary mt-2 mb-2"></span> 
                                                <p class="text-white-50"></p>
                                            </div>
                                            
                                            <span class="peity-pie" data-peity='{ "fill": ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.2)"]}' data-width="54" data-height="54">3/8</span>
                                        </div>
                                    </div>
                                    <div class="ml-3 mr-3">
                                        <div class="bg-white p-3 mini-stats-desc rounded">
                                            <h5 class="float-right mt-0">25</h5>
                                            <h6 class="mt-0 mb-3">Questions</h6>
                                            <p class="text-muted mb-0">Total Questions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card mini-stats">
                                    <div class="p-3 mini-stats-content">
                                        <div class="mb-4">
                                            <div class="float-right text-right">
                                                <span class="badge badge-light text-info mt-2 mb-2"></span> 
                                                <p class="text-white-50"></p>
                                            </div>
                                            <span class="peity-donut" data-peity='{ "fill": ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.2)"], "innerRadius": 18, "radius": 32 }' data-width="54" data-height="54">3/5</span>
                                        </div>
                                    </div>
                                    <div class="ml-3 mr-3">
                                        <div class="bg-white p-3 mini-stats-desc rounded">
                                            <h5 class="float-right mt-0">23</h5>
                                            <h6 class="mt-0 mb-3">City's</h6>
                                            <p class="text-muted mb-0">Total Citys</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
        
                       
        
                    <div class="row">
                            <div class="col-xl-9">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title mb-5">Details</h4>
                                        Hello <span class="badge badge-primary  "><?php echo $usrid; ?></span><br>
                                        If you have any <b>Question</b> ,<b>Problem</b>, <b>Suggestion</b> or <b>Request</b> Please feel free to <a class="label label-default " href="tickets.php"><i class="fa fa-pencil-square-o"></i> Open a Ticket</a><br>
                                        
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">News</h4>
                                        <?php 
                                        $qq = @mysqli_query($conn, "SELECT * FROM news ORDER by id desc LIMIT 3") or die("error here"); 
                                        while($r = mysqli_fetch_assoc($qq)){				
                                            echo'<div class="alert alert-success bg-success text-white"><b>'.stripcslashes($r['content']).'</b></h5><p class="list-group-item-text">'.$r['date'].'</p></div>'; 
                                        }
                                        ?>
            
                                    
                                    </div>
                                </div>
                
                            </div>
                        </div>
                        <!-- end row -->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="mt-0 header-title">5 Last Quizzes</h4>
                                        <div class="table-responsive mt-4">
                                            <table class="table table-hover mb-0">
                                           
                                                <thead>
                                                    <tr>
                                                        <th scope="col">(#) Id</th>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">City</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Score</th>
                                                        <th scope="col">Message</th>                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <?php 
                                                $result = "SELECT * from results WHERE usrid ='$usrid' ORDER by id desc LIMIT 5";
                                                $results = mysqli_query($conn, $result);
                                                while($row = mysqli_fetch_array($results))
                                                {
                                                 echo "<tr>
                                                                  <td>$row[id]</td>
                                                                  <td>$row[title]</td>
                                                                  <td><span class='badge badge-success'>$row[city]</span></td>
                                                                  <td>$row[date]</td>
                                                                  <td><span class='badge badge-primary'>$row[score]%</span></td>
                                                                       <td> ";
                                        if ($row['score'] == "70") {
                                        echo "<font color=red>[Nuk e Keni Kaluar]</font>";
                                        }
                                        else {
                                        echo "<font color=green>[Keni Kaluar]</font>";	    
                                            }
                                            echo "</td>
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
