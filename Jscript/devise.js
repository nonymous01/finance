const convtron = document.getElementById('conv-tron')
const convcfa = document.getElementById('conv-cfa')


convtron.addEventListener('input', ()=> {
    const tron = convtron.value
    const taux =  convtron.getAttribute('data-taux')
    const tronNombre = parseFloat(tron)
    const usb = 0.084
    const conversion = tronNombre * 0.847
    
    let Afficher = JSON.parse(localStorage.getItem("bien")) ||[]
    let solde = conversion
    Afficher.push(solde)
    localStorage.setItem("bien", JSON.stringify(Afficher))
})




//  let valuelement1 = document.getElementById("#conv-tron");
//  let valuelement2 = document.getElementById("#bit");
//  let valuelement3 = document.getElementById("#bit1");
//  let btnEL = document.getElementById("bit2")
//  let convert;
//  let convert1;
// const convertvalue =()=>{
//   let value1 = valuelement1.value;
//   let value2 = valuelement2.value;

//   switch(bit){
//     case "USD":
//       convert = value1 *2;
//       break
//     case "FCFA":
//       convert = value1 *0.5;
//       break
//     case "GBP":
//       convert = value1 * 4;
//       break
//     default:
//       convert="0"
//   }
//   switch(convert1){
//     case "tron":
//       convert1 = 50*convert;
//       break
//     case "bitcoin":
//       convert1 = 262222*convert;
//   }

// };
 

// btnEL.addEventListener("click", convertvalue )

