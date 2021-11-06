const text = document.getElementById("text");
const inner = document.getElementById("inner");
const succes = document.querySelector("#succes");
const wrapper = document.querySelector(".wrapper");
const button = document.getElementById("button");
const clear =  document.getElementById("clear")
const inputs = document.querySelectorAll("input")
const Element = document.createElement("h4");
clear.addEventListener("click", function (){//qizil
    Element.setAttribute("class", "success");
    Element.innerText = "unccsesifull send 🤒";
    wrapper.appendChild(Element);
    const success = document.querySelector("h4");
    success.setAttribute("class", "unsuccess");
    Element.style.display = "block"
    newElement.style.display = "none"

    for(let key of inputs) {
        key.value = ""
    }
})

const newElement = document.createElement("h4");

button.addEventListener("click", function () { // yashil

  newElement.setAttribute("class", "success");
  newElement.innerText = "Succsesifull send✅";
  wrapper.appendChild(newElement);
  const success = document.querySelector("h4");
  success.setAttribute("class", "success");
  Element.style.display = "none"
  newElement.style.display = "block"
  
});




function wordFocus() {
  const textValue = document.getElementById("text").value;
  inner.innerText = `👩‍💻 Name : ${textValue}`;
}

function ageFocus() {
  const ageValue = document.getElementById("age").value;
  item.innerText = `⚡️ age : ${ageValue}`;
}

function marriedFocus() {
  const marriedValue = document.getElementById("married").value;
  itemMarried.innerText = `👰 is married: ${marriedValue}`;
}

