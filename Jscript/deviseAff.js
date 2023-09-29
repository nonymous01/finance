let AfficheInfose = JSON.parse(localStorage.getItem("bien")) 
// localStorage.setItem("convertir", JSON.stringify(conversion))
let soldez = document.querySelector("#mon_solde")
// console.log(solde)
// soldez.innerHTML= AfficheInfose[AfficheInfose.length-1]
let soldeValue= AfficheInfose[AfficheInfose.length-1]

soldeValue += " TRX";

soldez.textContent = soldeValue;



