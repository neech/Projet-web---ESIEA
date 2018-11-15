const Login  = Vue.component('connexion-page', {
    template: `
    <div class="connection">
        <h3 id="header"> LOGIN </h3>

        <div id="carre1">
            <form id="form">
                <p>
                    Username :
                </p>
                <p>
                    <input type="text" id="username" placeholder="Username" id="box" />
                </p>
                <p>
                    <input type="password" id="password" placeholder="Password" id="box"/>
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