var addf = document.querySelector('#add')
var istatus = document.querySelector('h5')

var addr = document.querySelector('#remove')

var check = 0;
addf.addEventListener('click', function(){
    if(check == 0){
       istatus.innerHTML = "Friend"
       istatus.style.color = 'Green'
    check = 1; 
    }else{
        istatus.innerHTML = "Stranger"
        check = 0;
        istatus.style.color = 'red'
    }
})
addr.addEventListener('click', function(){
    if(check == 1){
       istatus.innerHTML = "Stranger"
       istatus.style.color = 'red'
    check = 0; 
    }
})