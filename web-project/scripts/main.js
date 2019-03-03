var myImage=document.querySelector("img");
myImage.onclick=function(){
  var mySrc=myImage.getAttribute("src");
  if(mySrc==="images/profile.jpg" ){
  myImage.setAttribute('src',"images/2.jpg");
}
else if(mySrc==="images/2.jpg" ){
    myImage.setAttribute('src',"images/14.jpg");
  }
  else if(mySrc==="images/14.jpg" ){
    myImage.setAttribute('src',"images/5.jpg");
  }  
  else
  myImage.setAttribute('src',"images/profile.jpg");
}

var myButton = document.getElementById("change");
var myHeading = document.querySelector("h2");
if(localStorage.getItem('name')){
    setUserName();
}
else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Welcome " +storedName;
}
function setUserName(){
     var myName = prompt('Please enter your name:');
     localStorage.setItem('name',myName);
     myHeading.textContent = "Welcome " +myName;
}

myButton.onclick =function() {
  setUserName();
}