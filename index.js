$(document).ready(function(){

  $('a.nav-link').on('click',function(event){

    if(this.hash !== ''){
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top},800,function(){
          window.location.hash = hash;
        });
    }
  });
});

function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
  x.className += " responsive";
  }
  else {
    x.className = "navbar";
  }
}
