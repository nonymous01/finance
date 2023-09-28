
// const convtron = document.getElementById('conv-tron')
// const convcfa = document.getElementById('conv-cfa')


// convtron.addEventListener('input', ()=> {
//     const tron = convtron.value
//     const taux =  convtron.getAttribute('data-taux')
//     const tronNombre = parseFloat(tron)
//     const usb = 0.084
//     const conversion = tronNombre * 0.847
    
//     let Afficher = JSON.parse(localStorage.getItem("bien")) ||[]
//     let solde = conversion
//     Afficher.push(solde)
//     localStorage.setItem("bien", JSON.stringify(Afficher))
// })



// const nbretrait = document.querySelector('#nombre_retrait')
// const solde = document.querySelector('#monsolde')
// const lui =document.querySelector('#restat')

// restat.addEventListener('click', ()=> {

//         const retrait = nbretrait.value
//         const soldes = solde.value
//         const retraits_float = parseFloat(retrait)
//         const soldes_float = parseFloat(soldes)

//         const nouveau_solde = soldes_float - retraits_float
//         console.log(nouveau_solde)

//  })

 const nbretrait = document.getElementById('#nombre_retrait')
const solde = document.getElementById('#monsolde')
const lui =document.querySelector('#restat')
restat.addEventListener('click', ()=> {
    const retrait = nbretrait.value
    const retraitss = nbretrait.getAttribute('#nombre_retrait')
    const retraits_float = parseFloat(retrait)
    const soldes_float = parseFloat(soldes)
    const nouveau_solde = soldes_float - retraits_float
    console.log(nouveau_solde)
    // let Afficher = JSON.parse(localStorage.getItem("bien")) ||[]
    // let solde = conversion
    // Afficher.push(solde)
    // localStorage.setItem("bien", JSON.stringify(Afficher))
})

