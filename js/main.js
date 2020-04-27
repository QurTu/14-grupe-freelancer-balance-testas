import account from "./data.js";



const newArray = account.sort((a, b) => parseFloat(a.month) - parseFloat(b.month));
const mensiai = ["sausi", "vasris" , "kovas", "balandis", "geguze" , "birzelis" , "liepa" , "rugpjutis" , 'rugesjis', "spalis", "lapkritis", "gruodis"]

renderTable();

function renderTable () {
    document.querySelector('.table-content').innerHTML = ``;
    for(let i = 0 ; i < newArray.length ; i++) {
    
  let  HTML = `<div class="table-row">
    <div class="cell" >${newArray[i].month}</div>
    <div class="cell">${mensiai[i ]}</div>
    <div class="cell">${ arSkaicius(newArray[i].income)}</div>
    <div class="cell">${arSkaicius(newArray[i].expense)}</div>
    <div class="cell">${ arSkaicius(newArray[i].income)  - arSkaicius(newArray[i].expense)} </div>
</div>`
document.querySelector('.table-content').insertAdjacentHTML("beforeend", HTML);
}


}

function arSkaicius(a) {
    if(typeof a === "number") {
        return a;
    }
    return 0
}