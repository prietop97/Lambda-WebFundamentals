let wholeDigits = document.querySelector(".digits")

let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let colon = document.querySelector("#colon");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

let start = document.querySelector(".start");
let reset = document.querySelector(".reset")


// secondTens.textContent = 0;
// secondOnes.textContent = 0;
// msHundreds.textContent = 0;
// msTens.textContent = 0;

// let countUp = function(time) {
//     time.textContent = Number(time.textContent) + 1;
//     return time;
// }

secondTens.textContent = 0;
secondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;



function startOnClick(){
    let counter = setInterval(function(){
        msTens.textContent = Number(msTens.textContent) + 1;
        if(msTens.textContent == 10){
            msTens.textContent = Number(msTens.textContent) - 10;
            msHundreds.textContent = Number(msHundreds.textContent) + 1;
            if(msHundreds.textContent == 10){
                msHundreds.textContent = Number(msHundreds.textContent) - 10;
                secondOnes.textContent = Number(secondOnes.textContent) + 1;
            }
            if(secondOnes.textContent == 10){
                secondOnes.textContent = Number(secondOnes.textContent) - 10;
                secondTens.textContent = Number(secondTens.textContent) + 1;
                clearInterval(counter);
                wholeDigits.classList.add("redDigit");
            }
        };
    },10);
}


start.addEventListener("click", startOnClick);
reset.addEventListener("click", function(e){
    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    wholeDigits.classList.remove("redDigit");
})