let boutton = document.querySelector("#buttonn")
boutton.addEventListener("click", () =>{
    let userlist = JSON.parse(localStorage.getItem("tab_LS")) || []
    let nom = document.querySelector("#nom").value
    let email = document.querySelector("#email").value
    let Numero = document.querySelector("#Numero").value
    let mot_de_passe = document.querySelector("#mot_de_passe").value
    let confirme_mot_de_passe = document.querySelector("#confirme_mot_de_passe").value
    

    let user= {
        nom:nom,
        email:email,
        Numero:Numero,
        mot_de_passe:mot_de_passe,
        confirme_mot_de_passe
    }
    
    userlist.push(user)
    localStorage.setItem("tab_LS", JSON.stringify(userlist))

   
})

