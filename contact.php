<?php $page = 'contact';
// Give a unique $page to use for classes and if statements
?>

<?php include("inc/header-top.php");
// Change this path based on folder depth
?>

<?php
// <script>'s in the <head>
?>

<?php include($INC."inc/header-bottom.php"); ?>

<section id="wrapper">
  <div class="container">
      <div class="row">
            <aside id="sidebar" class="span3 box-padding-left">


                <div class="contact-widget widget">

                <h5>Info</h5>

                <div class="address">
                    <i class="fa fa-building-o"></i>
                    <p>B29&nbspAtanasoff</p>
                </div><!-- /address -->

                <div class="time">
                    <i class="fa fa-clock-o"></i>
                    <p>Wed&nbspat&nbsp6pm</p>
                </div><!-- /time -->

                <div class="email">
                    <i class="fa fa-envelope-o"></i>
                    <p id="email-address"></p>
                </div><!-- /email -->

                <br><br>

                </div><!-- /contact-widget -->

            </aside><!-- /sidebar -->

            <div id="google-map" class="clearfix">
                    
            </div><!-- /google-map -->

            <div id="content" class="span7 offset1 box-padding-right">

                <h1>Contact Us</h1>
                <br>

                <p>Hi there! If you're here, you're probably looking to get in touch with someone at CSE club. You can <strong><a class="mailto" href="">email us</a></strong> or message us on <strong><a href="https://www.facebook.com/isucse" target="_blank">Facebook</i></a></strong>.  We'll be happy to get back to you!</p>

                <hr>

                <h2>Speaking at the club</h2>
                <br>

                <p>Want some facetime with our talented members? Look no further. Just as much as you'd love to tell us about opportunities, and your company, our members would like to hear. Set something up with us. </p>

                <hr>

                <h2>Sponsoring the club</h2>
                <br>

                <p>We're always happy to be supported by companies. Talk to us about what you can do, and we'll tell you where your funds would go to help make CSE club a success.</p>

            </div><!-- /content -->
      </div><!-- /row -->
  </div><!-- /container -->
</section><!-- /wrapper -->

<?php include($INC."inc/footer-top.php"); ?>

<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script src="js/gmaps.js"></script>
<script type="text/javascript">
    var map;
    $(document).ready(function(){
      map = new GMaps({
        div: '#google-map',
        lat: 42.028416,
        lng: -93.649725
       ,
      });
      map.addMarker({
        lat: 42.028416,
        lng: -93.649725,
      });
      });

      var netid = 'cassidoo';
      var domain = 'iastate';
      var tld = 'edu';
      $('#email-address').text(netid + '@' + domain + '.' + tld);
      $('.mailto').attr('href', 'mailto:' + netid + '@' + domain + '.' + tld);

</script>

<?php include($INC."inc/footer-bottom.php"); ?>