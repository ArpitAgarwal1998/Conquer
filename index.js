//jshint esversion: 8
$(document).ready(function() {

  $('a.nav-link').on('click', function(event) {

    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;

      $('html,body').animate({
        scrollTop: ($(hash).offset().top - 100)
      }, 800, function() {});
      window.location.hash = hash;
    }
  });

  //---------------------------------------------------NAVBAR HIGHLIGHTING------------------------------------

  var nextValue, temp;
  var section_ids = $('*[id^="section"]');
  var links = $('.nav-link').splice(0, section_ids.length);
  $(window).scroll(function() {
    //------------------Scroll Top Icon--------------
    if (Number($(window).scrollTop()) > 500) {
      $('.icon-top').removeClass('disp');
    }

    if (Number($(window).scrollTop()) < 500) {
      if ($('.icon-top').hasClass('disp') !== true) {
        $('.icon-top').addClass('disp');
      }
    }

    // -----------Navbar Highlight------------------
    let scrollValue = Number($(window).scrollTop());
    for (i = 0; i < section_ids.length; i++) {
      let sectionValue = Number(section_ids[i].offsetTop - 100);
      if ((i + 1) < section_ids.length) {
        nextValue = Number(section_ids[i + 1].offsetTop - 100);
      } else {
        nextValue = scrollValue + 1;
      }
      if ((scrollValue >= sectionValue) && (scrollValue < nextValue)) {
        var idValue = section_ids[i].id;
        idValue = idValue[0] + idValue[idValue.length - 1];
        for (let value of links) {
          if (value.classList.contains('active')) {
            value.classList.remove('active');
          }
          if (idValue == value.id) {
            value.classList.add('active');
          }

        }

      }

    }
  });


  // --------------------------------------Media Querying--------------------------------------

  var x = window.matchMedia("(max-width:765px)");
  var mls = $('.ml-0');
  var mrs = $('.mr-0');
  if (x.matches) {
    mls.removeClass('ml-0');
    mrs.removeClass('mr-0');

    $(window).resize(function() {
      var ht = Math.round(window.screen.width / 10);

      if (ht < 76) {
        $('#section1').css('height', ht + 'vh');
        console.log(ht);
      }
    });
  }

});

function myFunction() {
  var x = document.getElementById("topnav");
  // var navLinks = $('[i^="s"]')
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function functionTop() {
  $('body,html').animate({
    scrollTop: 0
  }, 800);
}
