
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
        <title><?php echo $sitename;?></title>
        <meta content="Admin Dashboard" name="description" />
        <meta content="Themesbrand" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <!-- App Icons -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!--Morris Chart CSS -->
        <link rel="stylesheet" href="../plugins/morris/morris.css">
        <link href="../plugins/sweet-alert2/sweetalert2.min.css" rel="stylesheet" type="text/css">


        <!-- Basic Css files -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <link href="assets/css/metismenu.min.css" rel="stylesheet" type="text/css">
        <link href="assets/css/icons.css" rel="stylesheet" type="text/css">
        <link href="assets/css/style.css" rel="stylesheet" type="text/css">
        <link href="assets/css/form-w.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="../inscructor/fonts/material-design-iconic-font/css/material-design-iconic-font.css">


    </head>


    <body class="fixed-left">

        <!-- Loader -->
        <div id="preloader"><div id="status"><div class="spinner"></div></div></div>

        <!-- Begin page -->
        <div id="wrapper">

            <!-- Top Bar Start -->
            <div class="topbar">

                <!-- LOGO -->
                <div class="topbar-left">
                    <a href="index.html" class="logo">
                        <img src="assets/images/logo.png" alt="" height="20" class="logo-large">
                        <img src="assets/images/logo-sm.png" alt="" height="22" class="logo-sm">
                    </a>
                </div>

                <nav class="navbar-custom">
                    
                    <ul class="navbar-right d-flex list-inline float-right mb-0">
                        <li class="list-inline-item dropdown notification-list flags-dropdown d-none d-sm-inline-block">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="dropdown" href="#" role="button"
                            aria-haspopup="false" aria-expanded="false">
                                <img src="assets/images/flags/us_flag.jpg" alt="" class="flag-img">
                                United States <i class="mdi mdi-chevron-down"></i>
                            </a>
                        </li>
                      
                        <!-- User-->
                        <li class="list-inline-item dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button"
                            aria-haspopup="false" aria-expanded="false">
                                <img src="assets/images/users/avatar-6.jpg" alt="user" class="rounded-circle">
                                <span class="d-none d-md-inline-block ml-1">Omer Maksuti<i class="mdi mdi-chevron-down"></i> </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                                <a class="dropdown-item" href="profile.php"><i class="dripicons-user text-muted"></i> Profile</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="logout.php"><i class="dripicons-exit text-muted"></i> Logout</a>
                            </div>
                        </li>

                    </ul>

                    <ul class="list-inline menu-left mb-0">
                        <li class="float-left">
                            <button class="button-menu-mobile open-left waves-effect">
                                <i class="mdi mdi-menu"></i>
                            </button>
                        </li>                        
                    </ul>

                </nav>

            </div>
            <!-- Top Bar End -->

            <!-- ========== Left Sidebar Start ========== -->
            <div class="left side-menu">
                <div class="slimscroll-menu" id="remove-scroll">

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <!-- Left Menu Start -->
                        <ul class="metismenu" id="side-menu">
                            <li class="menu-title">Main</li>
                            <li>
                                <a href="index.php" class="waves-effect">
                                    <i class="dripicons-meter"></i><span class="badge badge-info badge-pill float-right"></span> <span> Home </span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="ion-ios7-person"></i><span> Users <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                                <ul class="submenu">
                                    <li><a href="users.php">Users List</a></li>
                                    <li><a href="user.php">Add New</a></li>
                                </ul>
                            </li>
                             <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="ion-ribbon-a"></i><span> Inscructors <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                                <ul class="submenu">
                                    <li><a href="inscructors.php">Inscructor List</a></li>
                                    <li><a href="inscructor.php">Add New</a></li>
                                </ul>
                            </li>
                            
                             <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="fa-check-circle-o"></i><span> Quizzes <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                                <ul class="submenu">
                                    <li><a href="quizzes.php">Quizze List</a></li>
                                    <li><a href="quizze.php">Add New</a></li>
                                </ul>
                            </li>
                             <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="ion-android-settings"></i><span> Settings <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                                <ul class="submenu">
                                    <li><a href="general.php">General</a></li>
                                </ul>
                            </li>

                             <li>
                                <a href="javascript:void(0);" class="waves-effect"><i class="mdi mdi-pencil"></i><span> Support <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                                <ul class="submenu">
                                    <li><a href="tickets.php">Ticked History</a></li>
                                </ul>
                            </li>

                            

                            

                            

                        </ul>

                    </div>
                    <!-- Sidebar -->
                    <div class="clearfix"></div>

                </div>
                <!-- Sidebar -left -->

            </div>
            <!-- Left Sidebar End -->