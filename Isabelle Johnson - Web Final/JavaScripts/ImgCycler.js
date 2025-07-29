let slideIndex = 0;
let slides = document.getElementsByClassName("slide-img");


changeImg();

function changeImg(){
    let i;
    for(i=0; i<slides.length;i++){
        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length){slideIndex = 1;}

    slides[slideIndex-1].style.display = "block";
    
    setTimeout(changeImg, 3500);
}
