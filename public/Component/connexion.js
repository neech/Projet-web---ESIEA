const Login  = Vue.component('connexion-page', {
    template: `
    <div class="carre1">
    <form style="margin-top: 10%">
            <p >
                Nom d'utilisateur :
            </p>
            <p>
                <input type="text" id="username" class="box" />
            </p>
            <p >
                Mot de passe :
            </p>
            <p>
                <input type="password" id="password" class="box"/>
            </p>    
            <p>
                <input type="submit" id="submit" value="Se connecter"  style="border-style: solid; border-radius: 5px"/>
            </p>
            <p >
                Pas encore inscrit?        <router-link class="nav-link" to="/Signup"><b>Inscrivez-vous!</b></router-link>
            </p>
        </form>
        </div>
      `
  })