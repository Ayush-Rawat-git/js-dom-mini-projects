var main = document.querySelector('.main');
var cursor = document.querySelector(".cursor")

main.addEventListener('mousemove',function(pose){
    console.log(pose);
    cursor.style.left = pose.x + "px"
    cursor.style.top = pose.y + "px"

    
})