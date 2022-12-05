function addTitle(title, type){

  //Add Title
  var textBox = document.createElement("Section");
  textBox.className = "title-box";
  var h1 = document.createElement("h1");
  textBox.appendChild(h1);
  var text = document.createTextNode(title);
  h1.appendChild(text);
  //Add type
  var h2 = document.createElement("h2");
  textBox.appendChild(h2);
  var text = document.createTextNode(type);
  h2.appendChild(text);
  textBox.appendChild(h2);

  //Add line
  var line = document.createElement("Div");
  line.className = "sp";
  var h6 = document.createElement("h6");
  var text = document.createTextNode("~");
  h6.appendChild(text);
  //line.appendChild(h6);
  textBox.appendChild(line);

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(textBox);

  var mcontainer = body.getElementsByClassName("container")[0];
  mcontainer.appendChild(textBox);
}

function addCover(coverPath){

  //Add Title
  var cover = document.createElement("Section");
  cover.className = "canvas";
  var image = document.createElement("IMG");
  image.src = coverPath;
  cover.appendChild(image);

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(cover);

  var mcontainer = body.getElementsByClassName("container")[0];
  mcontainer.appendChild(cover);
}


function addImages(imagesPath){

  for (var i = 0; i < imagesPath.length; i++) {

    //Add Title
    var cover = document.createElement("Section");
    cover.className = "canvas";
    var image = document.createElement("IMG");
    var imageloc = imagesPath[i];
    image.src = imageloc;
    cover.appendChild(image);

    // Appending the div element to body
    var mainDiv = document.getElementsByTagName('body');
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(cover);

    var mcontainer = body.getElementsByClassName("container")[0];
    mcontainer.appendChild(cover);

  }
}


function addMainVideo(videoURl){

  var cover = document.createElement("Section");
  cover.className = "videocanvas";

  var container = document.createElement("Section");
  container.className = "embed-container";

  var iframe = document.createElement("iframe");
  iframe.setAttribute("src",
  videoURl
  + "?showinfo=0&controls=0");



  iframe.setAttribute("frameborder",0);
  iframe.setAttribute("webkitallowfullscreen",1);
  iframe.setAttribute("mozallowfullscreen",1);
  iframe.setAttribute("allowfullscreen",1);

  container.appendChild(iframe);
  cover.appendChild(container);
  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(cover);

  var mcontainer = body.getElementsByClassName("container")[0];
  mcontainer.appendChild(cover);

}

function addSecodaryVideos(secondaryVideos){

  for (var i = 0; i < secondaryVideos.length; i++) {


    var cover = document.createElement("Section");
    cover.className = "videocanvas";

    var container = document.createElement("Section");
    container.className = "embed-container";

    var iframe = document.createElement("iframe");
    iframe.setAttribute("src",
    secondaryVideos[i]);

    iframe.setAttribute("frameborder",0);

    iframe.setAttribute("autoplay",1);
    iframe.setAttribute("loop",1);
    iframe.setAttribute("webkitallowfullscreen",1);
    iframe.setAttribute("mozallowfullscreen",1);
    iframe.setAttribute("allowfullscreen",1);

    container.appendChild(iframe);
    cover.appendChild(container);
    // Appending the div element to body
    var mainDiv = document.getElementsByTagName('body');
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(cover);

    var mcontainer = body.getElementsByClassName("container")[0];
    mcontainer.appendChild(cover);

  }

}

function addText(text){

  //Add Title
  var textBox = document.createElement("Section");
  textBox.className = "text-box";



  var h1 = document.createElement("h1");
  textBox.appendChild(h1);

  var paragraphs = text.split('<p>');


  for( var i = 0; i < paragraphs.length; i++){

    var text = document.createTextNode(paragraphs[i]);

    h1.appendChild(text);
    h1.appendChild(document.createElement("br"));
    h1.appendChild(document.createElement("br"));

  }




  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(textBox);

  var mcontainer = body.getElementsByClassName("container")[0];
  mcontainer.appendChild(textBox);
}

function addTools(tools){

  //Add Title
  var toolBox = document.createElement("Section");
  toolBox.className = "tool-box";


  var h3 = document.createElement("h3");
  var text = document.createTextNode("Technologies");
  h3.appendChild(text);
  toolBox.appendChild(h3);

  var ul = document.createElement("ul");
  toolBox.appendChild(ul);

  for(var i = 0; i < tools.length; i++){

    var li = document.createElement("li");

    var text = document.createTextNode(tools[i]);
    li.appendChild(text);

    ul.appendChild(li);
  }

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(toolBox);

  var mcontainer = body.getElementsByClassName("container")[0];
  mcontainer.appendChild(toolBox);
}

function addCredits(credits){


  //Add Title
  var creditsBox = document.createElement("Section");
  creditsBox.className = "credits-box";


  var h3 = document.createElement("h3");
  var text = document.createTextNode("Credits");
  h3.appendChild(text);
  creditsBox.appendChild(h3);

  var ul = document.createElement("ul");
  creditsBox.appendChild(ul);

  for(var i = 0; i < credits.length; i++){

    var splitstring = credits[i].split(',');


    var li = document.createElement("li");

    var h3 = document.createElement("h4");
    var text = document.createTextNode(splitstring[0]);
    h3.appendChild(text);
    var h1 = document.createElement("h1");
    var text = document.createTextNode(splitstring[1]);
    h1.appendChild(text);

    li.appendChild(h3);
    li.appendChild(h1);

    ul.appendChild(li);
  }

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(creditsBox);

  var mcontainer = body.getElementsByClassName("container")[0];
  mcontainer.appendChild(creditsBox);

}

function addExhibitions(exhibitions){


  //Add Title
  var creditsBox = document.createElement("Section");
  creditsBox.className = "credits-box";


  var h3 = document.createElement("h3");
  var text = document.createTextNode("Exhibitions");
  h3.appendChild(text);
  creditsBox.appendChild(h3);

  var ul = document.createElement("ul");
  creditsBox.appendChild(ul);

  for(var i = 0; i < exhibitions.length; i++){

    var splitstring = exhibitions[i].split(',');


    var li = document.createElement("li");

    var h3 = document.createElement("h4");
    var text = document.createTextNode(splitstring[0]);
    h3.appendChild(text);
    var h1 = document.createElement("h1");
    var text = document.createTextNode(splitstring[1]);
    h1.appendChild(text);

    li.appendChild(h3);
    li.appendChild(h1);

    ul.appendChild(li);
  }

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(creditsBox);

  var mcontainer = body.getElementsByClassName("container")[0];
  mcontainer.appendChild(creditsBox);

}


function addAwards(awards){


  //Add Title
  var creditsBox = document.createElement("Section");
  creditsBox.className = "credits-box";


  var h3 = document.createElement("h3");
  var text = document.createTextNode("Awards");
  h3.appendChild(text);
  creditsBox.appendChild(h3);

  var ul = document.createElement("ul");
  creditsBox.appendChild(ul);

  for(var i = 0; i < awards.length; i++){

    var splitstring = awards[i].split(',');


    var li = document.createElement("li");

    var h3 = document.createElement("h4");
    var text = document.createTextNode(splitstring[0]);
    h3.appendChild(text);
    var h1 = document.createElement("h1");
    var text = document.createTextNode(splitstring[1]);
    h1.appendChild(text);

    li.appendChild(h3);
    li.appendChild(h1);

    ul.appendChild(li);
  }

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(creditsBox);

  var mcontainer = body.getElementsByClassName("container")[0];
  mcontainer.appendChild(creditsBox);

}


function madeAtOnf(){

  //Add Title
  var madeOnfBox = document.createElement("Section");
  madeOnfBox.className = "made-onf";



    var h1 = document.createElement("h1");
    var text = document.createTextNode("made as part of ");
    h1.appendChild(text);
    madeOnfBox.appendChild(h1);

    var a = document.createElement('a');
    a.href = "http://www.onformative.com";
    a.target ="_blank";

    var h3 = document.createElement("h4");
    var text = document.createTextNode("onformative");
    h3.appendChild(text);
    a.appendChild(h3)

    madeOnfBox.appendChild(a);


    // Appending the div element to body
    var mainDiv = document.getElementsByTagName('body');
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(madeOnfBox);

    var mcontainer = body.getElementsByClassName("container")[0];
    mcontainer.appendChild(madeOnfBox);


}

function querystring(key) {
  var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
  var r=[], m;
  while ((m=re.exec(document.location.search)) != null) r[r.length]=m[1];
  return r;
}

$(document).ready( function(){

  var projectName = querystring('project');

  $.getJSON('../assets/json/data.json', function(data) {

    var lp = eval('data.data.work.'+ projectName);



    addTitle(lp.title,lp.category);
    addMainVideo(lp.mainVideo);

    addText(lp.text);
    addCover(lp.cover);
    if(lp.secondaryVideos.length>0)addSecodaryVideos(lp.secondaryVideos);
    if(lp.images.length>0)addImages(lp.images);
    if(lp.tools.length>0)addTools(lp.tools);
    if(lp.credits.length>0)addCredits(lp.credits);
    if(lp.madeAtOnf=="true")madeAtOnf();
    if(lp.exhibitions.length>0)addExhibitions(lp.exhibitions);
    if(lp.awards.length>0)addAwards(lp.awards);



  });
});


document.addEventListener("fullscreenchange", changeHandler, false);
document.addEventListener("webkitfullscreenchange", changeHandler, false);
document.addEventListener("mozfullscreenchange", changeHandler, false);


var isFullScreen = false;
function changeHandler(e) {


   isFullScreen = !isFullScreen;

   if(isFullScreen)$('.nav').css('z-index', 0);
   else $('.nav').css('z-index', 1);


}
