const convtron = document.getElementById('conv-tron')
const convcfa = document.getElementById('conv-cfa')


convtron.addEventListener('input', ()=> {
    const tron = convtron.value
    console.log(tron)
  const taux =  convtron.getAttribute('data-taux')
    console.log(taux)
    const tronNombre = parseFloat(tron)
    console.log(tronNombre)
    const conversion = tronNombre * taux
    console.log(conversion)
   
 

})