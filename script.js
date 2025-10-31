const btn = document.getElementById("snap");
const swap = document.getElementById("mode");
let dark = false;

btn.addEventListener("click", () => {
  if (!dark) {
    swap.style.background = "linear-gradient(to bottom, #2C2A28, #0E0C0B)";
    swap.style.color = "#E8E6E3";
    dark = true;
  }
  else {
    swap.style.background = "linear-gradient(to bottom, #f6f6f6, #eaeaea)";
    swap.style.color = "#222";
    dark = false;
  }
});




const plus_btn = document.getElementById("open");
const pop = document.getElementById("popup");
const contrast = document.getElementById("mode");
plus_btn.addEventListener("click", () => {
  pop.style.visibility = "visible"

  contrast.style.background = "rgba(0, 0, 0, 0.3)";
  
  contrast.style.backdropFilter = "blur(10px)";

});


const cancel = document.getElementById("close");

cancel.addEventListener("click", () => {
  pop.style.visibility = "hidden";
  contrast.style.background = "";
});



const save = document.getElementById("save");
const desc = document.getElementById("description")
const montant = document.getElementById("montant")
const type = document.getElementById("type")
// console.log(type)
const date = document.getElementById("date")

// card created by form
const cardsContainer = document.getElementById("cards-container")
save.addEventListener("click", () => {
  let description = desc.value;
  let price = montant.value
  let choix = type.value
  let datevalue = date.value
  console.log(type.value)

  const red = `<div class=" shadow-md rounded-2xl text-gray-800 w-full h-fit  hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg" id="looz">
    <h1 class="text-lg font-semibold mb-2 capitalize  ">${description}</h1>
    <p class="text-xl font-bold">${price} €</p>
    
    <p class="text-meduim text-gray-600">${datevalue}</p>
    <div class="flex justify-center gap-3 my-3">
    <button class="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition">Modifier</button>
    <button class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">Supprimer</button>
    </div>
</div>`;
console.log

  // let card = document.createElement("div")


  cardsContainer.insertAdjacentHTML("afterbegin", red);
  if (choix == "revenu") {
    document.getElementById("looz").classList.add("bg-green-400")
  }
  else {
    document.getElementById("looz").classList.add("bg-red-400")
  }

  // card.classList = 'bg-green-500 w-50 h-fit py-3 w-[40%]'
  // let h1 = document.createElement("h1")
  // h1.innerHTML= description
  // card.appendChild(h1)

  // let field2 = document.createElement("h1")
  // field2.innerHTML = price
  // card.appendChild(field2)

  // let field3 =document.createElement("h1")
  // field3.innerHTML = choix
  // card.appendChild(field3)

  // let field4 = document.createElement("h1")
  // field4.innerHTML = Date
  // card.appendChild(field4)



  pop.style.visibility = "hidden";
  contrast.style.background = ""
});


let balance = 0 ;
let income = 0 ;
let expenses = 0 ;


let solde = document.getElementById("solde");
let revenue = document.getElementById("revenu");
let depense = document.getElementById("depense");

save.addEventListener("click" , ()=> {
  
  if(type.value == "revenu") {
    income = income + Number(montant.value) ;
  } else {
    expenses = expenses + Number(montant.value) ;
  }
  balance = income - expenses 
  console.log(balance)

  solde.innerHTML = balance
  revenue.innerHTML = income
  depense.innerHTML = expenses

})


// solde.innerHTML = price


// let a: number = 0;
// let b: string = "0";
// let c: any[] = [];

// console.log(a == b); // Erreur détectée : comparaison entre number et string
// console.log(a == c); // Erreur détectée : comparaison entre number et array