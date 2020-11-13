document.addEventListener('DOMContentLoaded',()=>{
    var slides = document.querySelectorAll(".mySlides")
    // let onload
    for(let i =0 ; i<=2; i++){
        slides[i].style.display = "block";
    }
    // if(window.innerwidth > 500){
    //   onload = setInterval(()=>{
    //     plusSlides(3)
    //   },3000)
    // }

    window.addEventListener('resize',()=>{
      // clearInterval(resizeId)
      // console.log('resize cleared')
      // clearInterval(onload)
      // console.log("onload cleared")
      // if(window.innerWidth>500){

      //   resizeId = setInterval(()=>{
      //     // console.log('in resize')
      //     plusSlides(3)
      //   }, 3000)
      // }
      if(window.innerWidth > 500){
        for (let i of slides){
          i.style.display = "none";
        }
        console.log("All none done")
        for(let i =0 ; i<=2; i++){
          slides[i].style.display = "block";
        }
      }
      if(window.innerWidth<500){
        for(let i of slides){
          i.style.display = "block"
        }
      }
    })
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