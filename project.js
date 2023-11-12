let myInputWidth = document.getElementById("width");
let myInputHeight = document.getElementById("height");
let myInputBgcolor = document.getElementById("bg-color");
let myInputThickness = document.getElementById("thickness");
let myInputType = document.getElementById("type");
let myInputBorder = document.getElementById("border");
let myInputBorderColor = document.getElementById("border-color");
let myInputMargin = document.getElementById("margin");
let myInputPadding = document.getElementById("padding");
let myInputRotate = document.getElementById("rotate");
let myBtn = document.getElementById("btn");
let myCompleted = document.querySelector(".completed-container");

myBtn.addEventListener("click", ()=>{
    // myCompleted.style.width = myInputWidth.value + "px";  
    // myCompleted.style.height = myInputHeight.value + "px";
    // myCompleted.style.backgroundColor = myInputBgcolor.value;



 myCompleted.style.cssText =
    `
    width:${myInputWidth.value}px;
    height:${myInputHeight.value}px;
    background-color:${myInputBgcolor.value};
    font-style:${myInputThickness.value};
    border-style:${myInputType.value};
    border-color:${myInputBorderColor.value};
    margin:${myInputMargin.value}px;
    padding:${myInputPadding.value}px;
    transform:rotate(${myInputRotate.value}deg);
    
    `
   
});
   
