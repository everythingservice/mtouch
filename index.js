document.addEventListener('DOMContentLoaded',()=>{
    var slides = document.querySelectorAll(".mySlides")
    for(let i =0 ; i<=2; i++){
        slides[i].style.display = "block";
    }

    setInterval(()=>{
      plusSlides(3)
      console.log('palat')
    }, 3000)
})

var slideIndex = 3;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if(n > slides.length){
      slideIndex = 3;
    }
  if(n < 1){
      slideIndex = slides.length;
    }
  for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
  }

for(i =1 ; i<=3; i++){
    slides[slideIndex - i].style.display = "block";

}
}