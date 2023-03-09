// File: app.js
// Author: Schermann Tilla Réka
// Copyright: 2023, Schermann Tilla Réka
// Group: Szoft I-2-E
// Date: 2023.03.08
// Github: https://github.com/schtilla/
// Licenc: GNU GPL

const table = document.querySelector("#tablazat");

var employees = [
    {name: "Cassis", wheel: 28, usage: "offroad", price: 557900},
    {name: "Alboin 900", wheel: 28, usage: "Szetrekkingged", price: 519900},
    {name: "Asgard", wheel: 29, usage: "technikás utak", price: 519900},
    {name: "Ruga", wheel: 29, usage: "hegyi", price: 372900},
    {name: "Reptila", wheel: 28, usage: "városi", price: 308900},
    {name: "Sirmium", wheel: 29, usage: "hegyi", price: 264900}
];

(function tablazatKeszites(){
    employees.forEach((emp)=>{

        let row = document.createElement("tr");

        let dataName = document.createElement("td");
        let dataWheel = document.createElement("td");
        let dataUsage = document.createElement("td");
        let dataPrice = document.createElement("td");  
        
        dataName.textContent=emp.name;
        dataWheel.textContent=emp.wheel;
        dataUsage.textContent=emp.usage;
        dataPrice.textContent=emp.price;

        table.append(row);

        row.append(dataName);
        row.append(dataWheel);
        row.append(dataUsage);
        row.append(dataPrice);

    });
})();