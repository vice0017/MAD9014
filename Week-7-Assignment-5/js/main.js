//MyWidget Script
/**************************
Add a link for a CSS file that styles .mywidget
Add a script tag that points to CDN version of jQuery 1.*
Add a script tag that loads your script file from http://m.edumedia.ca/
**************************/
var scriptsLoaded = 0;

document.addEventListener("DOMContentLoaded", function(){
  
  var css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("href", "css/main.css"); 
  //loads the CSS file and applies it to the page
  css.addEventListener("load", loadCount);
  document.querySelector("head").appendChild(css);

  var jq = document.createElement("script");
  jq.addEventListener("load", loadCount);
  jq.setAttribute("src","//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");
  document.querySelector("head").appendChild(jq);

 
});

function buildWidget(cls){
  //now do the ajax call then build your page
}

function loadCount(){
  scriptsLoaded++;
    if(scriptsLoaded === 2){
      //call the function in My widget script to load the JSON and build the widget
      buildWidget(".mywidget");
      console.log("both scripts loaded");
    }
}