

// function convertirCryptoEnEuros() {
//   var montantCrypto = parseFloat(document.getElementById("montantCrypto").value);
//   var cryptoSelectionnee = document.getElementById("bit").value; // Obtenez la crypto-monnaie sélectionnée

//   // Remplacez le taux de conversion par les taux réels pour chaque crypto-monnaie
//   var tauxConversion = 0; // Remplacez par le taux de conversion approprié pour la crypto-monnaie sélectionnée

//   if (isNaN(montantCrypto)) {
//       document.getElementById("resultat").innerHTML = "Veuillez entrer un montant valide.";
//       return;
//   }

//   var montantEuros = montantCrypto * tauxConversion;
//   document.getElementById("resultat").innerHTML = "Le montant en euros pour " + cryptoSelectionnee + " est : " + montantEuros.toFixed(2) + " €";
// }

// function convertirCryptoEnEuros() {
//   var montantCrypto = parseFloat(document.getElementById("montantCrypto").value);
//   var cryptoSelectionnee = document.getElementById("bit").value; // Obtenez la crypto-monnaie sélectionnée
//   var tauxConversion = parseFloat(document.getElementById("bit").selectedOptions[0].getAttribute("data-taux")); // Obtenez le taux de conversion

//   if (isNaN(montantCrypto)) {
//       document.getElementById("resultat").innerHTML = "Veuillez entrer un montant valide.";
//       return;
//   }

//   var montantEuros = montantCrypto * tauxConversion;
//   document.getElementById("resultat").innerHTML = "Le montant en euros pour " + cryptoSelectionnee + " est : " + montantEuros.toFixed(2) + " €";
// }



// function convertirCryptoEnEuros() {
//   var montantCrypto = parseFloat(document.getElementById("montantCrypto").value);
//   var cryptoSelectionnee = document.getElementById("bit").value; // Obtenez la crypto-monnaie sélectionnée
//   var tauxConversion = parseFloat(document.getElementById("bit").selectedOptions[0].getAttribute("data-taux")); // Obtenez le taux de conversion

//   if (isNaN(montantCrypto)) {
//       document.getElementById("resultat").innerHTML = "Veuillez entrer un montant valide.";
//       return;
//   }

//   var montantEuros = montantCrypto * tauxConversion;
//   document.getElementById("resultat").innerHTML = "Le montant en euros pour " + cryptoSelectionnee + " est : " + montantEuros.toFixed(2) + " €";
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var lienConfirme = document.getElementById("confirme");

//   lienConfirme.addEventListener("click", function (e) {
//       e.preventDefault();

//       convertirCryptoEnEuros();
//   });
// });

// Fonction pour convertir la crypto-monnaie en euros
function convertirCryptoEnEuros() {
  // Récupérez le montant de crypto-monnaie entré par l'utilisateur
  var montantCrypto = parseFloat(document.getElementById("montantCrypto").value);
  // Récupérez la crypto-monnaie sélectionnée dans le menu déroulant
  var cryptoSelectionnee = document.getElementById("bit").value;
  // Récupérez le taux de conversion de la crypto-monnaie sélectionnée
  var tauxConversion = parseFloat(document.getElementById("bit").selectedOptions[0].getAttribute("data-taux"));

  // Vérifiez si l'entrée de l'utilisateur est valide
  if (isNaN(montantCrypto)) {
    document.getElementById("resultat").innerHTML = "Veuillez entrer un montant valide.";
    return;
  }

  // Effectuez la conversion
  var montantEuros = montantCrypto * tauxConversion;

  // Affichez le résultat
  document.getElementById("resultat").innerHTML = "Le montant en euros pour " + cryptoSelectionnee + " est : " + montantEuros.toFixed(2) + " €";
}

// Ajoutez un écouteur d'événement pour le bouton "Confirme"
document.addEventListener("DOMContentLoaded", function () {
  var lienConfirme = document.getElementById("confirme");

  lienConfirme.addEventListener("click", function (e) {
    e.preventDefault();

    // Appelez la fonction pour effectuer la conversion
    convertirCryptoEnEuros();
  });
});

