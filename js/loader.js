var order = ['first', 'second', 'third', 'forth', 'fifth', 'sixt'];

function addProject(imagePath, count, key, title, type){
  // Creating a div element



  var sectionScroll = document.createElement("Div");
  sectionScroll.className = "section";


  var midleBox = document.createElement("Section");
  midleBox.className = "middle-box";


  sectionScroll.appendChild(midleBox);

  var canvasContainer = document.createElement("Section");
  canvasContainer.className = "canvas"
  midleBox.appendChild(canvasContainer);

  var a = document.createElement('a');
  a.href =  '../work'+'?project='+key; // Insted of calling setAttribute

  //Add images
  var image = document.createElement("IMG");
  image.src = imagePath;
  a.appendChild(image);
  canvasContainer.appendChild(a);


  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(sectionScroll);

  var mcontainer = body.getElementsByClassName("middle-container")[0];
  var fp = $('#fullpage').find('.middle-container').prevObject[0];

  //console.log($('#fullpage').find('.middle-container'));
  fp.appendChild(sectionScroll);

}


function addMobileTextDix( title, type, key){


  // Creating a div element


  var textBox = document.createElement("Section");
  textBox.className = "text-box-mobile";
  //  midleBox.appendChild(textBox);

  //Add Title
  var at = document.createElement('a');
  at.href =  'work'+'?project='+key; // Insted of calling setAttribute

  var h1 = document.createElement("h1");
  at.appendChild(h1)
  textBox.appendChild(at);

  var text = document.createTextNode(title);
  h1.appendChild(text);

  //Add type
  var h2 = document.createElement("h2");
  var text = document.createTextNode(type);
  h2.appendChild(text);
  textBox.appendChild(h2);

  //Add line
  var line = document.createElement("Div");
  line.className = "sp";
  var h6 = document.createElement("h6");
  var text = document.createTextNode("~");
  h6.appendChild(text);
  //  line.appendChild(h6);
  textBox.appendChild(line);

  // Appending the div element to body

  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(textBox);

  var mcontainer = body.getElementsByClassName("middle-container")[0];
  var fp = $('#fullpage').find('.middle-container').prevObject[0];

  //console.log($('#fullpage').find('.middle-container'));
  fp.appendChild(textBox);

}

function addFixedDix( title, type, key){
  // Creating a div element
  var midleBox = document.createElement("Section");
  midleBox.className = "middle-box"

  var textBox = document.createElement("Section");
  textBox.className = "text-box";
  //  midleBox.appendChild(textBox);

  //Add Title
  var at = document.createElement('a');
  at.href =  '../work'+'?project='+key;

  var h1 = document.createElement("h1");
  at.appendChild(h1)
  textBox.appendChild(at);

  var text = document.createTextNode(title);
  h1.appendChild(text);


  var at2 = document.createElement('a');
  at2.href =  '../work'+'?project='+key;
  //Add type
  var h2 = document.createElement("h2");
  var text = document.createTextNode(type);
  h2.appendChild(text);
  at2.appendChild(h2)
  textBox.appendChild(at2);



  var at3 = document.createElement('a');
  at3.href =  '../work'+'?project='+key;
  //Add line
  var line = document.createElement("Div");
  line.className = "sp";

  at3.appendChild(line)

  //line.appendChild(h6);
  textBox.appendChild(at3);

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(textBox);

  var mcontainer = body.getElementsByClassName("middle-container")[0];
  mcontainer.appendChild(textBox);

}


var commentState = true;

var windowWidth = $( window ).width();
if (windowWidth < 1024) {commentState = false;}
else {commentState = true;}


function commentUncommentMobileTextBox(){

  var windowWidth = $( window ).width();
  var tempHeight = $(".fp-section").css('height');

  if (windowWidth < 1024) {

    if(commentState == false){

      $("#fullpage").contents().each(function(index, node) {
        if (node.nodeType == 8) {
          // node is a comment
          $(node).replaceWith(node.nodeValue);
        }
      });

      commentState = true;
      $.fn.fullpage.setAutoScrolling(false);
      $.fn.fullpage.setFitToSection(false);
      $.fn.fullpage.setResponsive(false);
      //    $(".middle-box").appendTo(".container .middle-container");
      //  tempHeight = $(".fp-section").css('height');
      //  $(".fp-section").css('height', 400);
      //$(".fp-table").css('height', 400);
    }


  }
  else {
    if(commentState == true){

      //var $mainNav = $('.main-nav');
      var my_element_jq = $('.text-box-mobile');
      if(my_element_jq.get(0).outerHTML){
        var comment = document.createComment(my_element_jq.get(0).outerHTML);
        my_element_jq.replaceWith(comment);
      }

      commentState = false;
      $.fn.fullpage.setAutoScrolling(true);
      $.fn.fullpage.setFitToSection(true);

      //  $(".fp-section").css('height', tempHeight);
    }
  }

}


var title  = [];
var category  = [];
var key  = [];

$(document).ready( function(){



  $.getJSON('../assets/json/data.json', function(data) {

    var count=0;



    $.each(data.data.work, function(i,f) {
      if(f.active=="true"){

        title[count] = f.title;
        category[count] = f.category;
        key[count] = i;

        count++;
      }
    });

    //animateText()
    addFixedDix(title[0],category[0], key[0]);

    $.each(data.data.work, function(i,f) {
      if(f.active=="true"){
        addMobileTextDix( f.title, f.category, i);
        addProject(f.cover,count,i, f.title, f.category);

      }
      //  count++;

    });





    //  console.log(title);
    $('#fullpage').fullpage({

      sectionsColor: [],
      autoScrolling: true,
      continuousVertical: false,
      scrollBar:true,




      /*
      onLeave: function(index, nextIndex, direction){
      if(deleteLog){
      $('#callbacksDiv').html('');
    }
    $('#callbacksDiv').append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
    console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
  },
  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
  if(deleteLog){
  $('#callbacksDiv').html('');
}
$('#callbacksDiv').append('<p>onSlideLeave - anchorLink:' + anchorLink + " index:" + index + " slideIndex:" + slideIndex +" direction:" + direction + " nextSlideIndex:" + nextSlideIndex + '</p>');
console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
},
afterRender: function(){
$('#callbacksDiv').append('<p>afterRender</p>');
console.log("afterRender");





},
afterResize: function(){
$('#callbacksDiv').append('<p>afterResize</p>');
console.log("afterResize");
},
afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
$('#callbacksDiv').append('<p>afterSlideLoad - anchorLink:' + anchorLink + " index:" + index + " slideAnchor:" + slideAnchor +" slideIndex:" + slideIndex + '</p>');
deleteLog = true;
console.log("afterSlideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);
console.log("----------------");
},
afterLoad: function(anchorLink, index){
console.log("after Load  " + index);
$('#callbacksDiv').append('<p>afterLoad - anchorLink:' + anchorLink + " index:" + index + '</p>');
deleteLog = true;
console.log('===============');
console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index );
}

}

*/
});


commentUncommentMobileTextBox();

$(window).resize(function(e) {
  commentUncommentMobileTextBox();
});

});
});
