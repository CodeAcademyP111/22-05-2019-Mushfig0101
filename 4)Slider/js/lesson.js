
// slider
var slider = document.querySelector("#slider");
var right = document.querySelector(".right");
var left = document.querySelector(".left");


document.body.addEventListener("keyup", function (event) {

    if (event.which == 37) {//sol
        
        // left.addEventListener("click", function () { })
        // console.log(slider.children[0])
        var active = document.querySelector(".active");
      
        if (active.previousElementSibling != null) {
         
            active.previousElementSibling.classList.add("active");
            active.classList.remove("active");
        } else {
      
            var count = slider.children[0].childElementCount;
            slider.children[0].children[count - 1].classList.add("active");
            active.classList.remove("active");
        }

    }
    // if(event.which==38){//yuxari
    //   
    //   }

    if (event.which == 39) {//sag
     
        // right.addEventListener("click", function () { })
        // console.log(slider.children[0])
        var active = document.querySelector(".active");



        if (active.nextElementSibling != null) {
        
            active.nextElementSibling.classList.add("active");
            active.classList.remove("active");
        } else {
           
            slider.children[0].children[0].classList.add("active");
            active.classList.remove("active");
        }



    }

    // if(event.which==40){//asagi
    //
    // }




})
// var slider=document.createElement("div");
// var item =document.createElement("div");
// var right =documen.createElement("span");
// var left=document.createElement("span");





