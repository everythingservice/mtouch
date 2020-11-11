document.addEventListener('DOMContentLoaded',()=>{
  var slides = document.getElementsByClassName("mySlides");
    document.querySelector('#prev').onclick = showSlides(-3);
    document.querySelector('#next').onclick = showSlides(3);
        for(let i =0 ; i<=2; i++){
            console.log("ye hona chahiye");
            slides[i].style.display = "block";
        }
})

var slideIndex = 3;


function showSlides(n) {
  slideIndex += n
  n = slideIndex
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length){
      slideIndex = 3;
    }
  if(n < 1){
      slideIndex = slides.length;
    }
  for (i = 0; i < slides.length; i++){
      console.log("nahi hona chahiye");
      slides[i].style.display = "none";
  }

for(i =1 ; i<=3; i++){
    slides[slideIndex - i].style.display = "block";

}
}