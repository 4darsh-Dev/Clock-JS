// Author -- Adarsh Maurya

let minute = 0;
let hour = 0;
let second = 0;

let d = new Date();
setInterval(
    function(){
        d = new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes()* 6;
        hour = d.getHours()* 30 + Math.round(minute/12);
        document.getElementById("second-hand").style.transform = "rotate("+ second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate("+ minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate("+ hour + "deg)";
    },1000
)
