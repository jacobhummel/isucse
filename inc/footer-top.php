<footer id="main-footer">
    <div class="container inner-footer box-padding-both">
        <div class="row">

          <div class="span3">
            <h5>FOLLOW US</h5>
            <div class="footer-social">
              <a href="https://www.facebook.com/isucse" target="_blank"><i class="fa fa-facebook"></i></a>
            </div>
          </div>   
          <div class="span3">
            <h5>MEETING TIME</h5>
            <p>Wednesday 6-7pm</p>
          </div>
          <div class="span3">
            <h5>LOCATION</h5>
            <p>B29 Atanasoff Hall</p>
          </div>
          <div class="span3">
            <h5>FOOD</h5>
            <p>Pizza and pop</p>
          </div>              
        </div>
    </div>
</footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js"></script>
<script src="<?php echo $ROOT.'js/main.js'; ?>"></script>

<script type="text/javascript">
$(function() {
  $('.navigation ul li').removeClass('nav-active');
  $('.<?php echo $page; ?>').addClass('nav-active');
});
</script>