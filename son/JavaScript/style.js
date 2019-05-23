
var left_p = 0;
var top_p = 0;

var span = document.querySelector("#idSpan")
var container = document.querySelector(".container");

document.body.addEventListener("keyup", function (ev) {
    if (ev.which == 37 && left_p > 0) {//sol
    
        left_p -= 10; 
    }

    if (ev.which == 38 && top_p > 0) {//yuxari
        top_p -= 10;
    }
    if (ev.which == 39 && left_p < 580) {//sag
        left_p += 10;
    }
    if (ev.which == 40 && top_p < 280) {//asagi
        top_p += 10;
    }

    span.style.left = left_p + "px";
    span.style.top = top_p + "px";


//     var top = parseFloat(span.style.left);
//     var left = parseFloat(span.style.top);
//     console.log(left)

//     if (top < 0) {
//         top = 0;
//         span.style.top = top + "px";
//     }
//     if (left < 0) {
//         left = 0;
//         span.style.left = left + "px";
//     }
//     if (left > 50) {
//         left = 50
//         span.style.left = left + "px";
//     }
})




// var rect = container.getBoundingClientRect();
// var offset   = containerRect.top - bodyRect.top;
// console.log(offset);

// span.style.left = left_p + "px";
// span.style.top = top_p + "px"

