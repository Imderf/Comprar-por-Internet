// [ SCROLLTOP ] //
$(window).scroll(function(){
    if ($(window).scrollTop() >= 900) {
        $('.nav').addClass('fixed-nav');
    }
    else {
        $('.nav').removeClass('fixed-nav');
    }
});
// [ END SCROLLTOP ] //
// [ MENU NAV ] //
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// [ END MENU NAV ] //
// IMAGEN HEADER
$(document).ready(function(){
  $(".conten-img img").animate({
    marginLeft: "831px",
  }, 4000, regreso );
  function ingreso() {
     $( ".conten-img img" ).animate({
     marginLeft: "831px",
   }, 3000, regreso );
   }
  function regreso() {
     $( ".conten-img img" ).animate({
     marginLeft: "0",
   }, 3000, ingreso );
   }
});
// ANCLA
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {

      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html,body').animate({scrollTop: targetOffset}, 1000);
              return false;
          }
      }
  });
});