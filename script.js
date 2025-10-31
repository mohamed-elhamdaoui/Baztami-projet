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

var id = Date.now();


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





let cntr = 0;


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

  const red = `<div id="${id}" class=" shadow-md rounded-2xl text-gray-800 w-full h-fit  hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg bg-${choix == "revenu" ? "green" : "red"}-400" >
    <h1 class="text-lg font-semibold mb-2 capitalize  ">${description}</h1>
    <p class="text-xl font-bold">${price} €</p>
    
    <p class="text-meduim text-gray-600">${datevalue}</p>
    <div class="flex justify-center gap-3 my-3">
    <button onclick="update(${id})" class="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition">Modifier</button>
    <button onclick="deletEelem(${id})" class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">Supprimer</button>
    </div>
</div>`;

  console.log(choix)
  // let card = document.createElement("div")


  cardsContainer.insertAdjacentHTML("afterbegin", red);
  // if (choix == "revenu") {
  //   document.getElementById("looz").classList.add("bg-green-400")
  // }
  // else {
  //   document.getElementById("looz").classList.add("bg-red-400")
  // }

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



  let arr = localStorage.getItem("transaction");
  if (arr === null) {
    arr = [];
  } else {
    arr = JSON.parse(arr);
  }




  let obj = {
    description: description,
    montant: price,
    type: choix,
    date: datevalue,
    id: id
  };

  arr.push(obj);



  localStorage.setItem("transaction", JSON.stringify(arr));

  // let wesh = JSON.parse("transaction")




  pop.style.visibility = "hidden";
  contrast.style.background = ""
});





console.log()




var t = JSON.parse(localStorage.getItem("transaction"));

t.forEach(data => {

  const card = `<div id="${id}" class=" shadow-md rounded-2xl text-gray-800 w-full h-fit  hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg bg-${data.type == "revenu" ? "green" : "red"}-400">
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
  window.location.reload()
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









let balance = 0;
let income = 0;
let expenses = 0;


let solde = document.getElementById("solde");
let revenue = document.getElementById("revenu");
let depense = document.getElementById("depense");

save.addEventListener("click", () => {

  if (type.value == "revenu") {
    income = income + Number(montant.value);
  } else {
    expenses = expenses + Number(montant.value);
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









