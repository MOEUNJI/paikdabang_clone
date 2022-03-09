function openNav(){
    document.getElementById("mySideBar").classList.toggle("active1"); 
    document.getElementById("ham1").classList.toggle("active1");
    document.getElementById("ham2").classList.toggle("active1");
    document.getElementById("ham3").classList.toggle("active1");
}

let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides  = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;
    if( slideIndex > slides.length){
        slideIndex = 1;
    }
        
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
}

$(function () {
   $(window).scroll(function(){
       if($(this).scrollTop() > 200){
           $("#btn1").fadeIn();
       }
       else {
           $("#btn1").fadeOut()
       }
   });

   $("#btn1").click(function(){
    $("html, body").animate({"scrollTop":"0px"},300);
   });
   return false;
});
