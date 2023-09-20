// const convtron = document.getElementById('conv-tron')
// const convcfa = document.getElementById('conv-cfa')


// convtron.addEventListener('input', ()=> {
//     const tron = convtron.value
//     console.log(tron)

//   const taux =  convtron.getAttribute('data-taux')
//     console.log(taux)

//     const tronNombre = parseFloat(tron)
//     console.log(tronNombre)

//     const conversion = tronNombre * taux
//     console.log(conversion)
   
// })


document.addEventListener('DOMContentLoaded', function () {
  const confirmeLink = document.getElementById('confirme');

  confirmeLink.addEventListener('click', function (e) {
      e.preventDefault(); // Empêche le lien de naviguer immédiatement

      // Récupérez les valeurs nécessaires
      const montantCryptoInput = document.getElementById('montantCrypto');
      const convtronInput = document.getElementById('conv-tron');
      const bit = document.getElementById('crypto');

      const montantCrypto = parseFloat(montantCryptoInput.value);
      const tauxConversion = parseFloat(cryptoSelect.selectedOptions[0].getAttribute('data-taux'));
      const conversion = montantCrypto * tauxConversion;

      // Générez l'URL avec les paramètres de la conversion
      const resultatURL = `compte.html?conversion=${conversion}`;

      // Redirigez l'utilisateur vers la nouvelle page avec l'URL générée
      window.location.href = resultatURL;
  });
});
