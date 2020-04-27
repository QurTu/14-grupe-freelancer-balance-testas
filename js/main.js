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

document.querySelector('.table-footer').innerHTML = ``;
 let HTML = `<div class="cell"></div>
<div class="cell"></div>
<div class="cell">${metuIn()} Eur</div>
<div class="cell">${metuOut()}</div>
<div class="cell">${metuBalance()}</div>
`
document.querySelector('.table-footer').innerHTML = HTML;


}

function metuBalance () {
    let n = 0;
    for(let i = 0; i < newArray.length ; i++) {
        
        n += arSkaicius(newArray[i].income)  - arSkaicius(newArray[i].expense);
    }
    return n;
    }

function metuOut () {
    let n = 0;
    for(let i = 0; i < newArray.length ; i++) {
        n += arSkaicius(newArray[i].expense);
    }
    return n;
    }
function metuIn () {
    let n = 0;
    for(let i = 0; i < newArray.length ; i++) {
        n += arSkaicius(newArray[i].income);
    }
    return n;
    }


function arSkaicius(a) {
    if(typeof a === "number") {
        return a;
    }
    return 0
}