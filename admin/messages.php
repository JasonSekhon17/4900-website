<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>W&F Admin : Messages</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Place favicon.ico in the root directory -->
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico">
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500italic,500,400italic,700italic,900,100,300' rel='stylesheet' type='text/css'>
		<!-- all css here -->
		<!-- bootstrap v3.3.6 css -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
		<!-- font-awesome css -->
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <!-- style css -->
        <link rel="stylesheet" href="css/style.css">
    </head>

<body>
<div class="navbar navbar-inverse navbar-twitch" role="navigation">
	<div class="container">
		<div class="navbar-header">
			<a class="navbar-brand" href="home.php">
				<span class="small-nav"><span class="logo"><img src="img/hqlogo.png"></img></span></span>
        <span class="full-nav"><span class="logoLong"><img src="img/hq.png"></img></span></span>
			</a>
		</div>
		<div class="">
			<ul class="nav navbar-nav">
				<li>
					<a href="home.php">
						<span class="small-nav" data-toggle="tooltip" data-placement="right" title="Home">
							<span class="fa fa-home"></span>
						</span>
						<span class="full-nav">Home</span>
					</a>
				</li>
				<li>
					<a href="create.php">
						<span class="small-nav" data-toggle="tooltip" data-placement="right" title="Create Account">
							<span class="fa fa-users"></span>
						</span>
						<span class="full-nav">Create Account</span>
					</a>
				</li>
				<li class="active">
					<a href="messages.php">
						<span class="small-nav" data-toggle="tooltip" data-placement="right" title="Messages">
							<span class="fa fa-comment"></span>
						</span>
						<span class="full-nav">Messages</span>
					</a>
				</li>
        <li>
  				<a href="orders.php">
  					<span class="small-nav" data-toggle="tooltip" data-placement="right" title="Orders">
  						<span class="fa fa-truck"></span>
  					</span>
  					<span class="full-nav">Orders</span>
  				</a>
  			</li>
        <li>
  				<a href="stats.php">
  					<span class="small-nav" data-toggle="tooltip" data-placement="right" title="Stats">
  						<span class="fa fa-line-chart"></span>
  					</span>
  					<span class="full-nav">Stats</span>
  				</a>
  			</li>
        <li>
  				<a href="#" class="logout-button">
  					<span class="small-nav" data-toggle="tooltip" data-placement="right" title="Logout">
  						<span class="fa fa-sign-out"></span>
  					</span>
  					<span class="full-nav">Logout</span>
  				</a>
  			</li>
			</ul>
		</div>
	</div>
</div>
<button type="button" class="btn btn-default btn-xs navbar-twitch-toggle">
	<span class="fa fa-chevron-right nav-open"></span>
	<span class="fa fa-chevron-left nav-close"></span>
</button>
<!-- all js here -->
<!-- firebase -->
    <script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
<!-- jquery latest version -->
    <script src="js/jquery-3.2.1.min.js"></script>
<!-- bootstrap js -->
    <script src="js/bootstrap.min.js"></script>
<!-- plugins js -->
    <script src="js/plugins.js"></script>
<!-- logout js -->
    <script src="js/logout.js"></script>
<!-- main js -->
    <script src="js/main.js"></script>
</body>
</html>
