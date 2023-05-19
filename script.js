// Author -- Adarsh Maurya

let elem = document.getElementsByClassName("time-box-para")[0];


const updateFunc = function(){
    let date = new Date()
        
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh- 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    
    elem.innerText= `${hh}:${mm}:${ss} ${session} `;
    let sint = setInterval(updateFunc, 1000);

    
}
updateFunc();

let digiBox = document.getElementById("digi-box");
let agBox = document.getElementById("ag-box");
let agBtn = document.getElementById("ag");
let dgBtn = document.getElementById("dg");


const changeCl = function(){
    digiBox.classList.add("d-none");
    agBox.classList.remove("d-none");
    dgBtn.classList.remove("btn-clicked");
    agBtn.classList.add("btn-clicked");
}
const changeCl2 = function(){
    agBox.classList.add("d-none");
    digiBox.classList.remove("d-none");
    dgBtn.classList.toggle("btn-clicked");
    agBtn.classList.toggle("btn-clicked");
}

agBtn.addEventListener("click", changeCl )

dgBtn.addEventListener("click", changeCl2)



