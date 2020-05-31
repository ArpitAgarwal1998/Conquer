//jshint esversion: 8
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

//---------------------------------------------------NAVBAR HIGHLIGHTING------------------------------------

var nextValue, temp;
var section_ids = $('*[id^="section"]').splice(1,);
var links = $('.nav-link').splice(0,section_ids.length);
$(window).scroll(function()
{
    let scrollValue = Number($(window).scrollTop());
    for(i=0;i<section_ids.length;i++)
    {
        let sectionValue = Number(section_ids[i].offsetTop-1);
        if((i+1)<section_ids.length)
        {
           nextValue = Number(section_ids[i+1].offsetTop-1);
        }
        else
        {
           nextValue = scrollValue+1;
        }
        if ((scrollValue >= sectionValue)&&(scrollValue<nextValue))
        {
            var idValue = section_ids[i].id;
            idValue = idValue[0] + idValue[idValue.length-1];
            for(let value of links)
            {
                if (value.classList.contains('active'))
                {
                    value.classList.remove('active');
                }
                if (idValue == value.id)
                {
                    value.classList.add('active');
                }

            }

        }

    }
});
