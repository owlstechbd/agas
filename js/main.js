
// scrolling menu
$('.menu a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -0
  },500);
});

// scrolling menu
$('.navbar-nav a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -0
  },500);
});

// scrolling menu
$('.call-btn a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -0
  },500);
});

// for change menu color

$('.menu  li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});

// animation

  new WOW().init();

  baguetteBox.run('.tz-gallery');