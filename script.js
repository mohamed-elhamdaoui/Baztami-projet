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




