
function addImage(imagePath){
  //Add Title
  var cover = document.createElement("Section");
  cover.className = "photo";
  var image = document.createElement("IMG");
  var imageloc = '../'+imagePath;
  image.src = imageloc;
  cover.appendChild(image);

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(cover);

  var mcontainer = body.getElementsByClassName("canvas")[0];
  mcontainer.appendChild(cover);
}


function addBio(text){

  //Add Title
  var textBox = document.createElement("Section");
  textBox.className = "bio-box";

  var h3 = document.createElement("h3");
  var t = document.createTextNode("About");
  h3.appendChild(t);
  textBox.appendChild(h3);



  var h1 = document.createElement("h1");
  var paragraphs = text.split('<p>');


  for( var i = 0; i < paragraphs.length; i++){

    var text = document.createTextNode(paragraphs[i]);

    h1.appendChild(text);
    h1.appendChild(document.createElement("br"));
    h1.appendChild(document.createElement("br"));

  }




  //var t = document.createTextNode(text);
  //h1.appendChild(t);
  textBox.appendChild(h1);

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(textBox);

  var mcontainer = body.getElementsByClassName("top-text-container")[0];
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

  var h1 = document.createElement("h1");

  var t = document.createTextNode(tools);
  h1.appendChild(t);
  toolBox.appendChild(h1);

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(toolBox);

  var mcontainer = body.getElementsByClassName("top-text-container")[0];
  mcontainer.appendChild(toolBox);
}

function addContacts(contacts){

  //Add Title
  var contactsBox = document.createElement("Section");
  contactsBox.className = "contacts-box";


  var h3 = document.createElement("h3");
  var text = document.createTextNode("Contacts");
  h3.appendChild(text);
  //contactsBox.appendChild(h3);

  var ul = document.createElement("ul");
  contactsBox.appendChild(ul);

  for(var i = 0; i < contacts.length; i++){

    var li = document.createElement("li");

    var splitstring = contacts[i].split(',');

    var a1 = document.createElement('a');
    var link = splitstring[1];
    if(splitstring[0]=="email.")link = "mailto:"+link+"?Subject=Let's talk awesomeness!";
    a1.href = link;

    var h4 = document.createElement("h4");
    var text = document.createTextNode(splitstring[0]);
    h4.appendChild(text);
    a1.appendChild(h4)

    var a2 = document.createElement('a');
    a2.href = link;

    var h1 = document.createElement("h1");
    var text = document.createTextNode(splitstring[1]);
    h1.appendChild(text);
    a2.appendChild(h1)

    if(splitstring[0]=="email."){
      li.appendChild(a1);
      li.appendChild(a2);

    }else{
      li.appendChild(h4);
      li.appendChild(h1);
    }


    ul.appendChild(li);
  }

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(contactsBox);

  var mcontainer = body.getElementsByClassName("canvas")[0];
  mcontainer.appendChild(contactsBox);

}





function addSocial(social){

  //Add Title
  var contactsBox = document.createElement("Section");
  contactsBox.className = "social-box";


  //contactsBox.appendChild(h3);

  var ul = document.createElement("ul");
  contactsBox.appendChild(ul);

  for(var i = 0; i < social.length; i++){

    var li = document.createElement("li");

    var splitstring = social[i].split(',');

      var a1 = document.createElement('a');
      var link = "https://"+splitstring[1];
      a1.href = link;

      var h4 = document.createElement("h4");
      var text = document.createTextNode(splitstring[0]);
      h4.appendChild(text);
      a1.appendChild(h4)

    //  social.appendChild(a1);
      li.appendChild(a1);


    ul.appendChild(li);


  }

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(contactsBox);

  var mcontainer = body.getElementsByClassName("canvas")[0];
  mcontainer.appendChild(contactsBox);

}


function addEducation(education){

  //Add Title
  var contactsBox = document.createElement("Section");
  contactsBox.className = "Edu-box";


  var h3 = document.createElement("h3");
  var text = document.createTextNode("Education");
  h3.appendChild(text);
  contactsBox.appendChild(h3);

  var ul = document.createElement("ul");
  contactsBox.appendChild(ul);

  for(var i = 0; i < education.length; i++){

    var li = document.createElement("li");


    var splitstring = education[i].split(',');


    var li = document.createElement("li");

    var h4 = document.createElement("h4");
    var text = document.createTextNode(splitstring[0]);
    h4.appendChild(text);

    var h1 = document.createElement("h1");
    var text = document.createTextNode(splitstring[1]);
    h1.appendChild(text);

    li.appendChild(h4);
    li.appendChild(h1);

    ul.appendChild(li);

  }

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(contactsBox);

  var mcontainer = body.getElementsByClassName("top-text-container")[0];
  mcontainer.appendChild(contactsBox);

}

function addExperience(experience){

  //Add Title
  var contactsBox = document.createElement("Section");
  contactsBox.className = "Exp-box";


  var h3 = document.createElement("h3");
  var text = document.createTextNode("Experience");
  h3.appendChild(text);
  contactsBox.appendChild(h3);

  var ul = document.createElement("ul");
  contactsBox.appendChild(ul);

  for(var i = 0; i < experience.length; i++){

    var li = document.createElement("li");


    var splitstring = experience[i].split(',');


    var li = document.createElement("li");


    // var year = document.createElement("h1");
    // var textYear = document.createTextNode(splitstring[3]);
    // year.appendChild(textYear);

    var h4 = document.createElement("h4");
    var text = document.createTextNode(splitstring[0]);
    h4.appendChild(text);
    var a = document.createElement('a');
    a.href =  "http://"+splitstring[2];
    a.target ="_blank";
    a.appendChild(h4);

    var h1 = document.createElement("h1");
    var text = document.createTextNode(splitstring[1]);
    h1.appendChild(text);

  //  li.appendChild(year);
    li.appendChild(a);
    li.appendChild(h1);

    ul.appendChild(li);





  }

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(contactsBox);

  var mcontainer = body.getElementsByClassName("top-text-container")[0];
  mcontainer.appendChild(contactsBox);

}

function addImpressum(){
  // Creating a div element

  var impressumBox = document.createElement("Section");
  impressumBox.className = "impressum-box"


  var a = document.createElement('a');
  a.href =  '../impressum'; // Insted of calling setAttribute

  var h3 = document.createElement("h3");
  var text = document.createTextNode("impressum");
  h3.appendChild(text);
  a.appendChild(h3);

  impressumBox.appendChild(a);

  // Appending the div element to body
  var mainDiv = document.getElementsByTagName('body');
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(impressumBox);

  var mcontainer = body.getElementsByClassName("top-text-container")[0];
  mcontainer.appendChild(impressumBox);

}


$(document).ready( function(){

  $.getJSON('../assets/json/data.json', function(data) {

    var lp = data.data.about;

    addBio(lp.bio);
    addTools(lp.tools);
    addImage(lp.photo);

    addContacts(lp.contacts);
    addSocial(lp.social)
    addEducation(lp.education);
    addExperience(lp.experience);
    addImpressum();
    /*
    addCover('../'+lp.cover);
    addTitle(lp.title,lp.category);
    addVideo(lp.videoURL);
    addText(lp.text);
    if(lp.images.length>0)addImages(lp.images);
    if(lp.tools.length>0)addTools(lp.tools);
    if(lp.credits.length>0)addCredits(lp.credits);

    */

  });
});
