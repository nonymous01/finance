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

  // Mettez à jour l'élément HTML avec le résultat de la conversion
  document.getElementById("compt").textContent = montantEuros.toFixed(2) + " €";
}
