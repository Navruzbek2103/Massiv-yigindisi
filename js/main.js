let array = [12, 23, 43, 345, 12, 243];
let elBody = document.querySelector("body");
let elHeading = document.createElement("h2")
let elParagraph = document.createElement("p");
let count = 0;
elHeading.innerHTML = "Massiv elementlari: " + array;
elParagraph.innerHTML = "Yig'indi: ";

elBody.appendChild(elHeading)
elBody.appendChild(elParagraph);


for(let i = 0; i < array.length; i++){
  count = count + array[i];
}
elParagraph.innerHTML = count