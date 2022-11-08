console.log("Your index.js file is loaded correctly! My Dude!");
function handleClick() {
alert("Clicked"); 
}
var image = document.getElementById("TitleImg"); 
image.addEventListener("mouseover", function(){
    this.style ="box-style: 2px 2px 2px grey"; 
    this.width ="120"
}); 

image.addEventListener("mouseout", function(){
    this.width ="100"
}); 