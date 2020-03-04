// Your code goes here
// 1 

let cards = document.querySelectorAll(".destination");
cards.forEach(x=>{
    x.style.border = "3px #333 solid";
    x.style.padding = "2rem 3rem";
    x.style.textAlign = "center";
    x.style.display = "flex";
    x.style.justifyContent = "space-between";
    x.style.flexDirection = "column";
    x.style.alignItems = "center";
    x.addEventListener("mouseover", (event)=>{
        x.style.transform = "scale(1.1)";
        x.style.transitionDuration = "1s";
        event.stopPropagation();
    })
    x.addEventListener("mouseout", (e)=>{
        x.style.transform = "scale(1)";
    })
})


//2 

let btn = document.querySelectorAll(".btn");
btn.forEach((x,i)=>{
    x.addEventListener("click", (e)=>{
        let container = document.querySelector(".content-pick");
        container.style.justifyContent = "space-evenly";
        cards[i].style.display = "none";
    })
})


// 3

// const wiggleTween = TweenLite.to(btn, 1, {
//     x: 5,
//     ease: "myWiggle",
//     paused: false
//   });

// btn.forEach((x,i)=>{
//     x.addEventListener("mouseover", function() {
//         wiggleTween.restart();
//     }  
// )})

//4

let body = document.querySelector("body");
body.addEventListener("copy", (e)=>{
    body.style.display= "none";
})

//5
body.addEventListener("paste", (e)=>{
    body.style.display= "block";
})


//6
let img = document.querySelectorAll("img");
img.forEach(x=>{
    x.addEventListener("mousemove", (e)=>{
        console.log(e);
        body.style.background =  `rgb(${e.offsetX},${e.offsetY}, 100)`;
        btn.forEach(x=>{
            x.style.color =  `rgb(${e.offsetX},${e.offsetY}, 100)`;
        })
    })
})

//7
let lastImg = img[img.length-1];
console.log(lastImg);
lastImg.addEventListener("mouseleave", (e)=>{
    lastImg.style.display = "none";
})




// 8
let navLinks = document.querySelectorAll("a");
navLinks.forEach(x=>{
    x.addEventListener("click", (e)=>{
        x.href="http://www.google.com";
        e.preventDefault();
    })
})


// 9
let nav = document.querySelector("nav");
nav.addEventListener('click',(e)=>{
    nav.style.background = "red";
    e.stopPropagation();
})

//10
let header = document.querySelector("header");
header.addEventListener('click',(e)=>{
    header.style.background = "blue";
})