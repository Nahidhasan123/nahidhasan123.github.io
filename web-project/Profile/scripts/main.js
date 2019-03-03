var myImage=document.querySelector("img");
myImage.onclick=function(){
  var mySrc=myImage.getAttribute("src");
  if(mySrc==="images/sadia.jpg" ){
  myImage.setAttribute('src',"images/sadia1.jpg");
}
else if(mySrc==="images/sadia1.jpg" ){
    myImage.setAttribute('src',"images/sadia2.jpg");
  }
  else if(mySrc==="images/sadia2.jpg" ){
    myImage.setAttribute('src',"images/sadia4.jpg");
  }  
  else
  myImage.setAttribute('src',"images/sadia.jpg");
}