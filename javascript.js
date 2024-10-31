document.getElementsById(" fill").click(function(){
    

    
});
var a=document.getElementsByClassName("submit")[0]

a.click(function(){
    
    console.log("hii")
    a.setAttribute("href","./completion.html");

});
document.getElementById("submit").addEventListener("click",function(event){
    

 window.location.href="completion.html"
});
document.getElementsById("contact").addEventListener("click",function(){
    document,getElementById("contact").setAttribute("href","./completion.html");
});
document.getElementsByClassName("time")