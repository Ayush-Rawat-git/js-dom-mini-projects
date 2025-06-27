var elem = document.querySelectorAll('.elem')
console.log(elem)
elem.forEach(function(val) {
    
    val.addEventListener('mouseenter',function(){
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener('mouseleave',function(){
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener('mousemove',function(pose){
        val.childNodes[3].style.left = pose.x + "px"
        val.childNodes[3].style.top = pose.y + "px" 
    })
});


















// var elemimg = document.querySelector('#elem1 img')

// elem1.addEventListener('mousemove', function(event){
//     console.log(event)
//     elemimg.style.left = event.offsetX + "px"
//     elemimg.style.top = event.offsetY + "px"
// })

// elem1.addEventListener('mouseenter', function(event){
//     console.log(event)
//     elemimg.style.opacity = 1;
// })
// elem1.addEventListener('mouseleave', function(event){
//     console.log(event)
//     elemimg.style.opacity = 0;
// })


