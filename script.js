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


let montantUpdt = document.getElementById("montant-updt");
let descUpdt = document.getElementById("description-updt");

let typeUpdt = document.getElementById("type-updt");
let dateUpdt = document.getElementById("date-updt");

let popupUpdt = document.getElementById("popup-updt");

let cancelUpdt = document.getElementById("close-updt");


let solde = document.getElementById("solde");
// solde.innerHTML = '<p>hello</p>'
let revenue = document.getElementById("revenu");
let depense = document.getElementById("depense");
let infos = JSON.parse(localStorage.getItem("transactions")) || [];

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
  popup.classList.remove("invisible")
  document.body.classList.add("overflow-hidden")
  desc.value = "";
  montant.value = "";
  type.value = "revenu";
  date.value = "";
}

function closePopup() {
  overlay.classList.add("hidden");
  popup.classList.add("invisible")
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
    <button onclick="updateTrnsc(${id})" class="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition">Modifier</button>
    <button onclick="deleteTransaction(${id})" class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">Supprimer</button>
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


  closePopup();
  statistic();
}

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

loadCards();


function loadCards() {
  let t = JSON.parse(localStorage.getItem("transactions")) || []
  if (t) {
    cardsContainer.innerHTML = ``;
    t.forEach((data) => {
      const card = `<div id="${data.id}" class=" shadow-md rounded-2xl text-gray-800 w-full h-fit  hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg bg-${data.type == "revenu" ? "green" : "red"}-400">
    <h1 class="text-lg font-semibold mb-2 capitalize  ">${data.description}</h1>
    <p class="text-xl font-bold">${data.price} €</p>
    
    <p class="text-meduim text-gray-600">${data.date}</p>
    <div class="flex justify-center gap-3 my-3">
    <button onclick="updateTrnsc(${data.id})" class="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition">Modifier</button>
    <button onclick="deleteTransaction(${data.id})" class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">Supprimer</button>
    </div>
</div>`;
      cardsContainer.insertAdjacentHTML("afterbegin", card);
    })
  }

  statistic();
}



function deleteTransaction(id) {
  let data = JSON.parse(localStorage.getItem("transactions"))
  let arr = data.filter((e) => e.id != id)


  localStorage.setItem("transactions", JSON.stringify(arr))
  loadCards();
  statistic()
}

let popup = document.getElementById("popup");
// let popupUpdt = document.getElementById("popup-updt")
overlay.addEventListener("click", (e) => {
  // console.log(e.target)

  if (e.target == overlay) {
    overlay.classList.add("hidden")
  }

})
let spc

function updateTrnsc(id) {
  let data = JSON.parse(localStorage.getItem("transactions")) || [];
  smId = id
  overlay.classList.remove("hidden")
  // popup.classList.add("hidden")
  popupUpdt.classList.remove("invisible")

  spc = data.find(e => e.id == id)
  descUpdt.value = spc.description
  // console.log(descUpdt.value)
  montantUpdt.value = spc.price
  typeUpdt.value = spc.type
  dateUpdt.value = spc.date
  // document.getElementById(id)
  // document.getElementById(id).children[0].textContent = "wesh al3alam"
  console.log(spc)



}

let saveUpdt = document.getElementById("save-updt");
saveUpdt.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("transactions")) || [];
  let index = data.findIndex(e => e.id == smId)
  data[index].description = descUpdt.value;
  data[index].price = montantUpdt.value;
  data[index].type = typeUpdt.value;
  data[index].date = dateUpdt.value;
  // spc.description = descUpdt.value;
  // spc.price = montantUpdt.value
  // spc.type = typeUpdt.value
  // spc.date = dateUpdt.value
  localStorage.setItem("transactions", JSON.stringify(data));
  loadCards();
  closePopup();


})

// function saveUpdte(smId) {

//   console.log(smId)
// }

// montantUpdt.addEventListener("input",()=>{
//   console.log(montantUpdt.value)
// })




cancelUpdt.addEventListener("click", () => {
  overlay.classList.add("hidden")
  popupUpdt.classList.add("invisible");

  // contrast.style.background = "";
});

// function update(id) {

//   var data = JSON.parse(localStorage.getItem("transaction"));
//   var elem = findElem(data, id)

//   descUpdt.value = elem.description
//   console.log(descUpdt.value)
//   montantUpdt.value = elem.montant
//   typeUpdt.value = elem.type
//   dateUpdt.value = elem.date
//   popupUpdt.style.visibility = "visible"
//   contrast.style.background = "rgba(0, 0, 0, 0.3)";



//   saveUpdt.onclick = () => {
//     let obj = {
//       description: descUpdt.value,
//       montant: montantUpdt.value,
//       type: typeUpdt.value,
//       date: dateUpdt.value,
//       id: id
//     };

//     let newArray = deleteElement(data, id)
//     newArray.push(obj);
//     localStorage.setItem("transaction", JSON.stringify(newArray))
//     popupUpdt.style.visibility = "hidden"
//     contrast.style.background = "";
//     window.location.reload()
//   }
// }

// function deletEelem(id) {
//   var data = JSON.parse(localStorage.getItem("transaction"));
//   let newArray = deleteElement(data, id)
//   localStorage.setItem("transaction", JSON.stringify(newArray))
//   location.reload()
// }

// function findElem(data, id) {
//   for (let i = 0; i <= data.length; i++) {
//     if (data[i].id === id) {
//       return data[i];
//     }
//   }
// }


// function deleteElement(data, id) {
//   let newArray = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].id !== id) {
//       newArray.push(data[i])
//     }
//   }
//   return newArray
// }









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









function statistic() {
  let data = JSON.parse(localStorage.getItem("transactions"));
  let sum = 0
  let sumDespo = 0
  data.forEach(elem => {
    if (elem.type === "revenu") {
      console.log(elem.price)

      sum += Number(elem.price)
    } else {
      sumDespo += Number(elem.price)
    }

  });
  console.log(sumDespo)

  revenue.textContent = sum
  depense.textContent = sumDespo

  solde.textContent = sum - sumDespo
}