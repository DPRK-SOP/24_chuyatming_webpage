// Slide button
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    console.log(items[0]);
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    // items[items.length - 1].style.filter = "blur(33px)";
    document.querySelector('.slide').prepend(items[items.length - 1]) 
    
})