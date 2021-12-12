
// variables
var a =1;
let body = document.body;
let OpenModalBtn = document.querySelector(".start__link");
let CloseModalBtn = document.querySelector(".close");
let Modal = document.querySelector(".modal");
let AboutUsBtn = document.querySelector('.about__us__btn');
let hamburger = document.querySelector('.hamburger__menu__svg');
let nav = document.querySelector("nav");
let NextBtn = document.querySelector(".next");
let BackBtn = document.querySelector(".back");
let SliderImg = document.querySelector('.slider__img');

let SlideOne= document.querySelector('.left_one');
let ImgSlideOne = document.querySelector('.img__slide__one');
let SlideTwo = document.querySelector('.left_two');
let ImgSlideTwo = document.querySelector('.img__slide__two');
let SlideThree = document.querySelector('.left_three');
let ImgSlideThree = document.querySelector('.img__slide__three');
let SlideFour = document.querySelector('.left_four');
let ImgSlideFour = document.querySelector('.img__slide__four');
let SlideFive = document.querySelector('.left_five');
let ImgSlideFive = document.querySelector('.img__slide__five');
let SlideSix = document.querySelector('.left_six');
let ImgSlideSix = document.querySelector('.img__slide__six');
// add even listeners
OpenModalBtn.addEventListener('click',OpenModal);
AboutUsBtn.addEventListener('click',OpenModal)
CloseModalBtn.addEventListener('click',CloseModal);
hamburger.addEventListener('click',openMenu)
NextBtn.addEventListener('click',()=>{
  a++;
  clearInterval(SlideInterval);
  if(a==7){
    a=1
  }
  slider()
})
BackBtn.addEventListener('click',()=>{
  a--;
  clearInterval(SlideInterval);
  if(a==0){
    a=6
  }
  slider()
})
body.addEventListener('click',(e)=>{
  if(e.target ==hamburger || e.target==nav){  
  }else{
    nav.classList.add('close__offside')
  }
},true);
//main function
function OpenModal(){
  Modal.classList.remove("close__modal");
  nav.classList.add('close__offside');
}
function CloseModal(){
  Modal.classList.add("close__modal");
}
function openMenu(){
  nav.classList.remove('close__offside');
}
// slider function

function slider() {
  if (a==1) {
    SlideTwo.classList.add('diactive_left')
    SlideSix.classList.add('diactive_left')
    SlideOne.classList.remove('diactive_left')
    SlideOne.classList.add('active_left')
    SlideOne.classList.remove('active_left')
    ImgSlideTwo.classList.add('diactive__img')
    ImgSlideTwo.classList.remove('active__img')
    ImgSlideSix.classList.add('diactive__img')
    ImgSlideSix.classList.remove('active__img')
    ImgSlideOne.classList.remove('diactive__img')
    ImgSlideOne.classList.add('active__img')
    
  }else if(a==2){
    
    SlideOne.classList.add('diactive_left')
    SlideThree.classList.add('diactive_left')
    SlideTwo.classList.remove('diactive_left')
    SlideTwo.classList.add('active_left')
    SlideTwo.classList.remove('active_left')
    ImgSlideOne.classList.remove('active__img')
    ImgSlideOne.classList.add('diactive__img')
    ImgSlideThree.classList.remove('active__img')
    ImgSlideThree.classList.add('diactive__img')
    ImgSlideTwo.classList.remove('diactive__img')
    ImgSlideTwo.classList.add('active__img')
  }else if(a==3){
    SlideTwo.classList.add('diactive_left')
    SlideFour.classList.add('diactive_left')
    SlideThree.classList.remove('diactive_left')
    SlideThree.classList.add('active_left')
    SlideThree.classList.remove('active_left')
    ImgSlideTwo.classList.remove('active__img')
    ImgSlideTwo.classList.add('diactive__img')
    ImgSlideFour.classList.remove('active__img')
    ImgSlideFour.classList.add('diactive__img')
    ImgSlideThree.classList.remove('diactive__img')
    ImgSlideThree.classList.add('active__img')
  }else if(a==4){
    SlideThree.classList.add('diactive_left')
    SlideFive.classList.add('diactive_left')
    SlideFour.classList.remove('diactive_left')
    SlideFour.classList.add('active_left')
    SlideFour.classList.remove('active_left')
    ImgSlideThree.classList.remove('active__img')
    ImgSlideThree.classList.add('diactive__img')
    ImgSlideFive.classList.remove('active__img')
    ImgSlideFive.classList.add('diactive__img')
    ImgSlideFour.classList.remove('diactive__img')
    ImgSlideFour.classList.add('active__img')
  }else if(a==5){
    SlideFour.classList.add('diactive_left')
    SlideSix.classList.add('diactive_left')
    SlideFive.classList.remove('diactive_left')
    SlideFive.classList.add('active_left')
    SlideFive.classList.remove('active_left')
    ImgSlideFour.classList.remove('active__img')
    ImgSlideFour.classList.add('diactive__img')
    ImgSlideSix.classList.remove('active__img')
    ImgSlideSix.classList.add('diactive__img')
    ImgSlideFive.classList.remove('diactive__img')
    ImgSlideFive.classList.add('active__img')
  }else if(a==6){
    ImgSlideOne.classList.remove('active__img')
    ImgSlideOne.classList.add('diactive__img')
    SlideOne.classList.add('diactive_left')
    SlideFive.classList.add('diactive_left')
    SlideSix.classList.remove('diactive_left')
    SlideSix.classList.add('active_left')
    SlideSix.classList.remove('active_left')
    ImgSlideOne.classList.remove('active__img')
    ImgSlideOne.classList.add('diactive__img')
    ImgSlideFive.classList.remove('active__img')
    ImgSlideFive.classList.add('diactive__img')
    ImgSlideSix.classList.remove('diactive__img')
    ImgSlideSix.classList.add('active__img')
  }
}

let SlideInterval =setInterval(() => {
  a++
  if (a==7) {
    a=1
  }
  slider()
}, 5000);

  
