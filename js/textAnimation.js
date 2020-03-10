
function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

//exponential easing in - accelerating from zero velocity
Math.easeInExpo = function (t, b, c, d) {
  return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
};

// exponential easing out - decelerating to zero velocity
Math.easeOutExpo = function (t, b, c, d) {
  return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
};

// exponential easing in/out - accelerating until halfway, then decelerating
Math.easeInOutExpo = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
  t--;
  return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
};



function updateTitles(proj){


  var ti = document.getElementsByTagName("h1")[0];
  var cat = document.getElementsByTagName("h2")[0];
  var tb = document.getElementsByClassName("text-box")[0].getElementsByTagName('a')

  for(var i = 0; i < tb.length; i++){
    tb[i].setAttribute("href", '../work'+'?project='+key[proj]);


  }

  //console.log(title[proj])
  ti.textContent = title[proj];
  cat.textContent = category[proj];




}




$(window).on("unload", function(e) {
  var scrollPosition = $(this).scrollTop();

  localStorage.setItem("scrollPosition", scrollPosition);
  localStorage.setItem("doLoad", true);
});

function moveScroll(){
  if(localStorage.getItem("doLoad") == 'true'){
    $(window).scrollTop(localStorage.getItem("scrollPosition"));
    localStorage.setItem("doLoad", false);
  }
}

window.setTimeout(moveScroll, 100);

function animateText(){


  if($( window ).width()>1024){
    var srollPos =  $(window).scrollTop();

    var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    var numberOfProjects = title.length;

    //console.log("max - "  + scrollMaxY);
    //console.log("scroll - " + srollPos);


    var pH = scrollMaxY - (162);
    var inc = (srollPos/pH);

    var scrollMap= Math.sin( ((inc*Math.PI*((numberOfProjects-2)+numberOfProjects)) +( (Math.PI/2)))  );
    scrollMap = (1+scrollMap)/2;
    scrollMap = Math.easeInExpo (scrollMap,0,1,1);


    var projNumber = Math.min(Math.floor(inc*numberOfProjects),numberOfProjects-1);
    //console.log(numberOfProjects);
    if(scrollMap==-1)scrollMap=0;
    //console.log(scrollMap);
    updateTitles(projNumber);
    //scrollMap = map_range(scrollMap,-1,1,0,1);

    $('h1').css('opacity', scrollMap);
    $('h2').css('opacity', scrollMap);
    $('.sp').css('opacity', scrollMap);

    $('h1').css({'transform' : 'rotateX('+ (1-scrollMap)*90 +'deg)'});
    $('h2').css({'transform' : 'rotateX('+ (1-scrollMap)*90 +'deg)'});
    $('.sp').css({'transform' : 'rotateX('+ (1-scrollMap)*90 +'deg)'});

    if ($(window).scrollTop() > 0) {
      //$('h1').css('opacity', 0);
    } else {
      //  $('h1').css('opacity', 1);
    }
  }

}


$(document).ready(function() {
  $(window).scroll(function() {
    animateText();
  });
});





$( ".main" ).wrap( "<div class='scroll'></div>" );
