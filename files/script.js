
var typed = new Typed(".text", {
    strings: ["Programming" , "Cybersecurity" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})



    document.querySelector('img').addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
    
    var images = document.querySelectorAll('.abt-res');
    images.forEach(function(img) {
        img.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });
    });