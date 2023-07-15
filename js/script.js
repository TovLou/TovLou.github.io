/*
var header = $('header');

var range = 200;

$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css({ 'opacity': calc });

  if (calc > '1') {
    header.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    header.css({ 'opacity': 0 });
  }
  
});

*/


$(document).ready(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#content-warning").load("content-warning.html");

      $('.click-expand').on('click', function(){
        $(this).find('.expand-title').toggleClass('opened closed');
        $(this).find('.expand-text').toggleClass('hidden');
    })
});

$(window).on('scroll', function () {

    var header = $('header');
    var range = 100;

    var scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 2,
        calc = 1 - (scrollTop - offset + range) / range;

    header.css({ 'opacity': calc });

    if (calc > '1') {
        header.css({ 'opacity': 1 });
        $('.logo-reverse').css("opacity", .8);
        $('.logo-default').css("opacity", 0);
    } else if ( calc < '0' ) {
        header.css({ 'opacity': 0 });
        $('.logo-reverse').css("opacity", 0);
        $('.logo-default').css("opacity", .8);
    }

});
