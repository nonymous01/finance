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
    });
    if (typeof result !=="undefined"){
        localStorage.setItem("session", JSON.stringify(result))
        window.location.replace("./../acceuil_com/connect.html");
    }
    else{
        //alert("nom ou mot de passe incorrect !")
         window.location.reload()
    }

    // let nom = document.querySelector("#nom").value
    // let mot_de_passe = document.querySelector("#mot_de_passe").value

    
    
    userlist.push(user)
    localStorage.setItem("tab_LS", JSON.stringify(userlist))
})



