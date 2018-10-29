Vue.component('connexion-page', {
    template: `
    <div class="carre1">
    <form style="margin-top: 10%">
            <p style="color: black">
                Nom d'utilisateur :
            </p>
            <p>
                <input type="text" id="username" class="box" />
            </p>
            <p style="color: black">
                Mot de passe :
            </p>
            <p>
                <input type="password" id="password" class="box"/>
            </p>    
            <p>
                <input type="submit" id="submit" value="Se connecter"  style="border-style: solid; border-radius: 5px"/>
            </p>
            <p style="color: black">
                Pas encore inscrit? <a href="Inscription.html"><b>Inscrivez-vous!</b></a>
            </p>
        </form>
      `
  })