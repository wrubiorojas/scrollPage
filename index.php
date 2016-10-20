<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en" ng-app="vmSignage"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en" ng-app="vmSignage"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en" ng-app="vmSignage"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" ng-app="vmSignage"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/main.css">
  <!-- jQuery JavaScript Library v3.1.0 -->
  <script src="node_modules/jquery/dist/jquery.min.js"></script>
  <!-- Modernizr 2.8.3 (Custom Build) | MIT & BSD -->
  <script src="node_modules/modernizr/modernizr.min.js"></script>
  <!-- Bootstrap v3.3.7 (http://getbootstrap.com) -->
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="node_modules/scrollmagic/minified/plugins/highlight.pack.js"></script>
  <script src="node_modules/scrollmagic/minified/plugins/velocity.min.js"></script>
  <script src="node_modules/scrollmagic/minified/plugins/greensock/TweenMax.min.js"></script>
  <!-- ScrollMagic v2.0.5 | (c) 2015 Jan Paepke -->
  <script src="node_modules/scrollmagic/minified/ScrollMagic.min.js"></script>
  <script src="node_modules/scrollmagic/minified/plugins/animation.gsap.min.js"></script>
  <!-- AngularJS v1.5.8 -->
  <script src="node_modules/angular/angular.min.js"></script>
  <!-- State-based routing for AngularJS  - version v1.0.0-beta.2 -->
  <script src="node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>
  <!-- @license AngularJS v1.5.8 -->
  <script src="node_modules/angular-resource/angular-resource.min.js"></script>
</head>
<body>
  <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <nv-directive ng-if="isAuthorized"></nv-directive>
  <ui-view></ui-view>

  <script src="node_modules/scrollmagic/minified/plugins/animation.velocity.min.js"></script>
  <script src="node_modules/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js"></script>  
  <script src="node_modules/bootstrap/dist/js/bootstrapValidator.min.js"></script>
  <script src="app.js"></script>
  <!-- Directive -->
  <script src="components/navbar/navbar.dt.js"></script>
  <script src="components/home/signage/active-zone/actZone.dt.js"></script>
  <script src="components/home/signage/slideshow/slideshow.dt.js"></script>
  <script src="components/home/signage/header/header.dt.js"></script>
  <script src="components/home/signage/marquee/marquee.dt.js"></script>
  <script src="components/home/contact/contact.dt.js"></script>
  <!-- Controllers -->
  <script src="components/home/home.ctr.js"></script>

  <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
  <script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X','auto');ga('send','pageview');
  </script>
</body>
</html>
