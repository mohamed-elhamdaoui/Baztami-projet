const btn = document.getElementById("snap");
const swap = document.getElementById("mode") ;
let dark = false ;

btn.addEventListener("click" , () => {
  if(!dark){
    swap.style.background = "linear-gradient(to bottom, #2C2A28, #0E0C0B)";
    swap.style.color = "#E8E6E3";
    dark = true ;
  }
  else {
    swap.style.background = "linear-gradient(to bottom, #f6f6f6, #eaeaea)";
    swap.style.color = "#222";
    dark = false ;
  }
}) ;




const plus_btn = document.getElementById("open") ;
const pop = document.getElementById("popup");
const contrast = document.getElementById("mode") ;
plus_btn.addEventListener("click" ,() =>{
  pop.style.visibility = "visible"
  
  contrast.style.background = "rgba(0, 0, 0, 0.3)";
}) ;


const cancel = document.getElementById("close") ;

  cancel.addEventListener("click" , ()=> {
  pop.style.visibility = "hidden" ;
  contrast.style.background = "";
}) ;
