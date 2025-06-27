var arr = [
  {
    dp: "https://media.istockphoto.com/id/537396968/photo/white-woman-face-peint-in-black-with-a-white-mask.webp?a=1&s=612x612&w=0&k=20&c=YUtdV9xJJIxMhG0SSfFfUkupW9pReCFd_bb8-E8lxaI=",
    story:
      "https://images.unsplash.com/photo-1587129970901-95ac2311fc21?q=80&w=417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    dp: "https://images.unsplash.com/photo-1531500603730-55413dc7f70f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1531500517716-7efd298a8fd9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    dp: "https://plus.unsplash.com/premium_photo-1668165258060-8103a0527d47?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
    story:
      "https://plus.unsplash.com/premium_photo-1668165258082-3ecb8c6aa5af?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    dp: "https://plus.unsplash.com/premium_photo-1670176619811-8969276780e5?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1670176620159-e328887494b1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
  },
];
var storiyan = document.querySelector(".storiyan")
var clutter = "";
arr.forEach(function (elem, index) {
  clutter += ` <div class="story">
                <img id = "${index}"src="${elem.dp}" alt="">
            </div>`;
});
console.log(clutter)
storiyan.innerHTML = clutter

storiyan.addEventListener("click", function(dets){
    document.querySelector(".fullscreen").style.display = "block"

    document.querySelector(".fullscreen").style.backgroundImage = `url(${
        arr[dets.target.id].story
    })`
    setTimeout(function(){
            document.querySelector(".fullscreen").style.display = "none"
    },2000)
})

