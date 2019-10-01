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
    x.addEventListener("mouseover", (e)=>{
        x.style.transform = "scale(1.1)";
        x.style.transitionDuration = "1s";
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




