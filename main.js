"use strict"

const prev = document.getElementById("left");
const next = document.getElementById("right")
const slideImages = document.querySelector(".slide-images");
const line = document.querySelector('.line');


const scroll_direction_right = (slideImages.scrollWidth - slideImages.clientWidth) / 2 ;


let currentPosition = 0;

next.addEventListener("click",(e)=>{
    e.preventDefault();
    let slideAmount = slideImages.clientWidth * 1;
    slideImages.scrollBy({left:slideAmount,behavior:"smooth"});
    if(slideImages.scrollLeft >= scroll_direction_right ){
        next.style.display = "none";
    };
    let maxPosition = slideImages.scrollWidth - slideImages.clientWidth;
    if(currentPosition < maxPosition){
        currentPosition += 223;
        linePosition()

    }
   
});

prev.addEventListener("click",(e)=>{
    e.preventDefault();
    let slideAmount = slideImages.clientWidth * -1;
    slideImages.scrollBy({left:slideAmount,behavior:"smooth"});
    if(slideImages.scrollLeft ){
        next.style.display = "block";
        if(currentPosition > 0){
            currentPosition -= 223;
            linePosition()
        }
    }
  });


function linePosition(){  
    line.style.cssText = 
    `transform: translateX(${currentPosition}px);
     transition: 0.5s;`;
}







     




// slideImages.scrollLeft ֊֊ դա էնա թե կոնկրետ  ինչքան պիքսելա slideImages(իմ նկարիները պահված են էդ div ի մեջ) մեջի եղածը սլայդ եղել հորիզոնական;


