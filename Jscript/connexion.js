let boutton = document.querySelector("#connexion")
let formul = document.querySelector("form")
formul.addEventListener("submit", (e) =>{
    e.preventDefault();
    let userlist = JSON.parse(localStorage.getItem("tab_LS"))
    let result ;
    userlist.forEach((user) => {
        if (document.querySelector("#nom").value == user.nom && document.querySelector("#mot_de_passe").value ===user.mot_de_passe){
            result = user
        }
        else("nom ou mot de passe incorrect !")
    });
    if (typeof result !=="undefined"){
        localStorage.setItem("session", JSON.stringify(result))
        window.location.replace("./../acceuil_com/connect.html");
    }
    else{
        alert("nom ou mot de passe incorrect !")
        window.location.reload()
    }

    // let nom = document.querySelector("#nom").value
    // let mot_de_passe = document.querySelector("#mot_de_passe").value

    if (document.querySelector("#nom").value ==="Anonymous" && document.querySelector("#mot_de_passe").value ==="Anonymous"){
        alert("Bienvenus Anonymous !")
        admin_Anonyme ={
            nom:nom,
            mot_de_passe:mot_de_passe
        }
        userlist.push(admin_Anonyme)
        localStorage.setItem('tab_LS', JSON.stringify(userlist))
        window.location.replace("../admin/adimn.html")
    }
    
    
    userlist.push(user)
    localStorage.setItem("tab_LS", JSON.stringify(userlist))
})



