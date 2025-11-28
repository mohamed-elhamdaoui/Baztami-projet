const save = document.getElementById("save");
const desc = document.getElementById("description")
const montant = document.getElementById("montant")
const type = document.getElementById("type")
const date = document.getElementById("date")
const cardsContainer = document.getElementById("cards-container")
const btn = document.getElementById("snap");
const swap = document.getElementById("mode");
let dark = false;
let overlay = document.getElementById("overlay");
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

// contrast.style.background = "rgba(0, 0, 0, 0.3)";

function opnPopup() {
  overlay.classList.remove("hidden");
  document.body.classList.add("overflow-hidden")
  desc.value = "";
  montant.value = "";
  type.value = "revenu";
  date.value = "";
}

function closePopup() {
  overlay.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

function saveTransaction() {
  let id = Date.now();
  let description = desc.value;
  let price = montant.value
  let choix = type.value
  let datevalue = date.value

  const red = `<div id="${id}" class=" shadow-md rounded-2xl text-gray-800 w-full h-fit  hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg bg-${choix == "revenu" ? "green" : "red"}-400" >
    <h1 class="text-lg font-semibold mb-2 capitalize  ">${description}</h1>
    <p class="text-xl font-bold">${price} €</p>
    
    <p class="text-meduim text-gray-600">${datevalue}</p>
    <div class="flex justify-center gap-3 my-3">
    <button onclick="update(${id})" class="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition">Modifier</button>
    <button onclick="deletEelem(${id})" class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">Supprimer</button>
    </div>
</div>`;

  cardsContainer.insertAdjacentHTML("afterbegin", red);

  let transactions = JSON.parse(localStorage.getItem("transactions")) || []
  let transaction = {
    id: id,
    description: description,
    price: price,
    type: choix,
    date: datevalue,
  };
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions))

  closePopup()
}





var t = JSON.parse(localStorage.getItem("transaction"));
// let soldeee = document.getElementById("solde");
// let sum = 0;
// console.log(t.forEach(elem => {
//   if(elem.type === "revenu") {
//     console.log(elem.montant) ;
//     sum += parseInt(elem.montant) 
//   }
// }))
// soldeee.textContent = sum;

// solde.innerText = montant ;

t.forEach(data => {

  const card = `<div id="${data.id}" class=" shadow-md rounded-2xl text-gray-800 w-full h-fit  hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg bg-${data.type == "revenu" ? "green" : "red"}-400">
    <h1 class="text-lg font-semibold mb-2 capitalize  ">${data.description}</h1>
    <p class="text-xl font-bold">${data.montant} €</p>
    
    <p class="text-meduim text-gray-600">${data.date}</p>
    <div class="flex justify-center gap-3 my-3">
    <button onclick="update(${data.id})" class="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition">Modifier</button>
    <button onclick="deletEelem(${data.id})" class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">Supprimer</button>
    </div>
</div>`;

  cardsContainer.insertAdjacentHTML("afterbegin", card);

});











const saveUpdt = document.getElementById("save-updt");

const descUpdt = document.getElementById("description-updt")
const montantUpdt = document.getElementById("montant-updt")
const typeUpdt = document.getElementById("type-updt")
const dateUpdt = document.getElementById("date-updt")

const popupUpdt = document.getElementById("popup-updt")

const cancelUpdt = document.getElementById("close-updt");
cancelUpdt.addEventListener("click", () => {
  popupUpdt.style.visibility = "hidden";
  contrast.style.background = "";
});

function update(id) {

  var data = JSON.parse(localStorage.getItem("transaction"));
  var elem = findElem(data, id)

  descUpdt.value = elem.description
  console.log(descUpdt.value)
  montantUpdt.value = elem.montant
  typeUpdt.value = elem.type
  dateUpdt.value = elem.date
  popupUpdt.style.visibility = "visible"
  contrast.style.background = "rgba(0, 0, 0, 0.3)";



  saveUpdt.onclick = () => {
    let obj = {
      description: descUpdt.value,
      montant: montantUpdt.value,
      type: typeUpdt.value,
      date: dateUpdt.value,
      id: id
    };

    let newArray = deleteElement(data, id)
    newArray.push(obj);
    localStorage.setItem("transaction", JSON.stringify(newArray))
    popupUpdt.style.visibility = "hidden"
    contrast.style.background = "";
    window.location.reload()
  }
}

function deletEelem(id) {
  var data = JSON.parse(localStorage.getItem("transaction"));
  let newArray = deleteElement(data, id)
  localStorage.setItem("transaction", JSON.stringify(newArray))
  location.reload()
}

function findElem(data, id) {
  for (let i = 0; i <= data.length; i++) {
    if (data[i].id === id) {
      return data[i];
    }
  }
}


function deleteElement(data, id) {
  let newArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].id !== id) {
      newArray.push(data[i])
    }
  }
  return newArray
}









// let balance = 0;
// let income = 0;
// let expenses = 0;




// save.addEventListener("click", () => {

//   if (type.value == "revenu") {
//     income = income + parseInt(montant.value);
//   } else {
//     expenses = expenses + parseInt(montant.value);
//   }
//   balance = income - expenses
//   console.log(balance)

//   solde.innerHTML = balance
//   revenue.innerHTML = income
//   depense.innerHTML = expenses

// })


// solde.innerHTML = price


// let a: number = 0;
// let b: string = "0";
// let c: any[] = [];

// console.log(a == b); // Erreur détectée : comparaison entre number et string
// console.log(a == c); // Erreur détectée : comparaison entre number et array

let data = JSON.parse(localStorage.getItem("transaction"));
console.log(data.length)

let solde = document.getElementById("solde");
// solde.innerHTML = '<p>hello</p>'
let revenue = document.getElementById("revenu");
let depense = document.getElementById("depense");

let sum = 0
let sumDespo = 0
data.forEach(elem => {
  if (elem.type === "revenu") {
    console.log(elem.montant)

    sum += Number(elem.montant)
  } else {
    sumDespo += Number(elem.montant)
  }

});
console.log(sumDespo)

revenue.textContent = sum
depense.textContent = sumDespo

solde.textContent = sum - sumDespo


