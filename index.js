var sliders=document.querySelectorAll(".list-item");
var currentIndex=0;
function slide(n){
    console.log(sliders);
    currentIndex += n;
    if(currentIndex >= sliders.length){
        currentIndex=0;
    }
    if(currentIndex < 0){
        currentIndex=sliders.length-1;
    }

    for(var i=0;i<sliders.length;i++){
        sliders[i].classList.remove('active');
    }

    sliders[i].classList.add('active');

}
