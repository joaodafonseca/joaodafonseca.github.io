// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 20;//$('.nav').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 1);

function hasScrolled() {


  var x = document.getElementById("myTopnav");

  if(x.className === "nav responsive"){
//  if($( window ).width()<700){

    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= -delta)
    return;

    // If they scrolled down and are past the .navbar, add class ..nav-up.
    // This is necessary so you never see what is "behind" the .navbar.
    if (st > 1){
      // Scroll Down

      $('.nav').removeClass('nav-down').addClass('nav-up');



    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
        $('.nav').removeClass('nav-up').addClass('nav-down');


      }
    }

    lastScrollTop = st;
  }


  if($(".nav").css("top")=='-1000px'){
  var x = document.getElementById("myTopnav");
  x.className = "nav";
}
  //else{
  //  $('.nav').removeClass('nav-down');
    //$('.nav').removeClass('nav-up');
  //}
}



function calcVH() {
  var x = document.getElementById("myTopnav");

  if(x.className === "nav responsive"){
    $('.nav').innerHeight( $(this).outerHeight() );
  }else     $('.nav').innerHeight(0);
}

$(window).on('orientationchange', function() {
  calcVH();
});
