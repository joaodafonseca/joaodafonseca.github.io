

function getPosts(json) {

  var numberOfPosts=0;

  $.ajax({
    url: "https://api.tumblr.com/v2/blog/"+json[0].tumblr_user+".tumblr.com/posts?api_key="+json[0].api_key,
    dataType: 'jsonp',
    async: false,
    success: function(posts){


      for(var i = 0; i < posts.response.posts.length; i++){

        if(posts.response.posts[i].photos)numberOfPosts+=posts.response.posts[i].photos.length;
        if(posts.response.posts[i].type=="video")numberOfPosts+=1;


      }



      numberOfPosts = Math.min(Math.max(0,numberOfPosts), max_number_of_posts);//posts.response.total_posts;

      loadAllContent(numberOfPosts, json);
    }
  });
  contentImageURL = [];
  contentVideoURL = [];

  return numberOfPosts;
}


function loadNext20Posts(offSet, numberOfPosts, json) {
  //console.log(json[0]);
  $.ajax({
    url: "https://api.tumblr.com/v2/blog/"+json[0].tumblr_user+".tumblr.com/posts?api_key="+json[0].api_key+"&offset="+offSet,
    dataType: 'jsonp',
    success: function(posts){
      var postings = posts.response.posts;


      for (var i in postings) {
        var p = postings[i];

        if(posts.response.posts[i].photos){

          for(var ph = 0; ph <p.photos.length; ph++){
            if(p.type=="photo"){


              var path = p.photos[ph].alt_sizes[6].url;
              var format = path.substring(path.length-3,path.length);

              if(format != "gif"){
                //console.log(format);

                contentImageURL.push({
                  src: p.photos[ph].alt_sizes[1].url//p.photos[ph].alt_sizes[3].url//p.photos[ph].original_size.url//p.photos[ph].alt_sizes[1].url
                });
              }
            }else if(p.type=="video"){
              /*
              contentImageURL.push({
              video:{
              loop: true,
              mute: true,
              src: p.video_url
            }
          });
          */
        }

        numberOfImagesLoaded++;
      }
    }else if(p.type=="video"){


      contentImageURL.push({


        width: p.thumbnail_width,
        height: p.thumbnail_height,
        src: p.video_url

      });
      numberOfImagesLoaded++;
    }

    //wait to load all posts


    if(numberOfImagesLoaded == numberOfPosts){

      //ADD IMAGE HERE
      for(var i = 0; i < numberOfPosts; i++){

        var url = contentImageURL[i].src;

        var type = url.split(".").pop();

        if(type != "mp4"){


          var a = document.createElement('a');
          a.className = "swipebox";
          a.href =  url;

          var image = document.createElement("IMG");
          image.src = url;
          image.alt ="image";

          a.appendChild(image)

          var mainDiv = document.getElementsByTagName('body');
          var body = document.getElementsByTagName("body")[0];
          body.appendChild(a);

          var mcontainer = body.getElementsByClassName("grid")[0];
          mcontainer.appendChild(a);

        }else{

          var div = document.createElement('Div');
          div.style.width = contentImageURL[i].width+"px";
          div.style.height = contentImageURL[i].height+"px";
          div.style.position = "absolute";
          //div.style.background = "red";


          var video =  document.createElement("video");
          var source =  document.createElement("source");
          source.src = url;

          video.appendChild(source);
          video.autoplay = true;
          video.loop = true;
          video.muted = true;
          video.style.width = 100+"%";
          video.style.height = 100+"%";

          /*
          var iframe = document.createElement("iframe");
          iframe.setAttribute("src", url);
          iframe.setAttribute("frameborder",0);
          iframe.setAttribute("controls",0);
          iframe.setAttribute("loop",1);

          iframe.style.width = 100+"%";
          iframe.style.height = 100+"%";
          div.appendChild(iframe)

          */
          div.appendChild(video);
          var mainDiv = document.getElementsByTagName('body');
          var body = document.getElementsByTagName("body")[0];
          body.appendChild(div);

          var mcontainer = body.getElementsByClassName("grid")[0];
          mcontainer.appendChild(div);

          /*

          var a = document.createElement('a');
          a.className = "swipebox";
          a.href =  url;
          a.style.width = contentImageURL[i].width;
          a.style.height =contentImageURL[i].height;

          var iframe = document.createElement("iframe");
          iframe.setAttribute("src", url);
          iframe.setAttribute("frameborder",0);
          iframe.setAttribute("webkitallowfullscreen",1);
          iframe.setAttribute("mozallowfullscreen",1);
          iframe.style.width = 100+"%";
          iframe.style.height = 100+"%";
          a.appendChild(iframe)

          var mainDiv = document.getElementsByTagName('body');
          var body = document.getElementsByTagName("body")[0];
          body.appendChild(a);

          var mcontainer = body.getElementsByClassName("grid")[0];
          mcontainer.appendChild(a);



          */

        }
      }


      if(i>numberOfPosts-1){


        var rHeight =220;
        var gMargins = 20;
        var justifyLastRow = 'nojustify';

        if($( window ).width()<700){
          rHeight =120;
          gMargins = 3;
          justifyLastRow = 'justify';

        }



        $(".grid").justifiedGallery({
          rowHeight : rHeight,
          maxRowHeight : "500%",
          lastRow : justifyLastRow,
          margins : gMargins,
          border : 0,
          captions : false,
          randomize : true
        }).on('jg.complete', function () {
          $('.swipebox').swipebox();
        });

      }
    }
  }
}
});

}


function loadAllContent(numberOfPosts, json){
  var numberOfImagesPerCall = 20;
  var numberOfCalls = Math.ceil(numberOfPosts/numberOfImagesPerCall)

  //console.log(numberOfCalls);

  for(var i = 0; i < numberOfCalls; i++){
    loadNext20Posts(numberOfImagesPerCall*i, numberOfPosts,json);
  }
}


function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '../playground/config.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(JSON.parse(xobj.responseText));

    }
  };
  xobj.send(null);



}


$(window).on('resize', function() {


  var rHeight =200;
  var gMargins = 20;
  var justifyLastRow = 'nojustify';

  if($( window ).width()<700){
    rHeight =120;
    gMargins = 3;
    justifyLastRow = 'justify';

  }



  $(".grid").justifiedGallery({
    rowHeight : rHeight,
    maxRowHeight : "150%",
    lastRow : justifyLastRow,
    margins : gMargins,
    border : 0,
    refreshSensitivity:	200,
    captions : false,
    randomize : false
  }).on('jg.complete', function () {
    $('.swipebox').swipebox();
  });


});




//_________________________________________________
var numberOfImagesLoaded=0;
var contentImageURL;
var contentVideoURL;
var max_number_of_posts = 1000;

loadJSON(getPosts);

$(window).on('pageshow',function(){
    var vids = document.querySelectorAll('video');
    for (var i = 0; i < vids.length; i++){
        vids[i].play();
    }
})
