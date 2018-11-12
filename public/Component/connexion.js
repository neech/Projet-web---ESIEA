const Login  = Vue.component('connexion-page', {
    template: `
    <div class="connexion">
        <h3 style="text-align:center; margin-top: 3%"> LOGIN </h3>

        <div class="carre1">
        <form style="margin-top: 3%">
                <p >
                    Username :
                </p>
                <p>
                    <input type="text" id="username" class="box" />
                </p>
                <p >
                    Password :
                </p>
                <p>
                    <input type="password" id="password" class="box"/>
                </p>    
                <p>
                    <input type="submit" id="submit" value="Login"  style="border-style: solid; border-radius: 5px"/>
                </p>
                <p >
                    Not a member ? <router-link class="nav-link" to="/Signup"><b>Sign up!</b></router-link>
                </p>
            </form>
        </div>
    </div>
      `
  })