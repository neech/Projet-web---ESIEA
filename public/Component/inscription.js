const Signup = Vue.component('inscription-page', {
    template: `
    <div class="connexion">
        <h3 style="text-align:center; margin-top: 3%"> SIGN UP </h3>
        
        <div class="carre2">
                <form style="margin-top: 3%">
                        
                        <!-- <p style="color: black;";>
                                Nom : <input type="text" id="lastname" class="box"/>
                                Prénom : <input type="text" id="name" class="box"/>
                        </p>
                        <p style="color: black">
                                Date de naissance : <input type="date" id="end" name="trip" min="1900-01-01" max="2018-12-31" class="box"/>
                        </p>
                -->
                        <p style="color: black">
                                <!--Pseudo : --><input type="text" id="pseudo" placeholder="Pseudo" class="box"/>
                        </p>
                        <p style="color: black">
                                <!--E-mail : --><input type="text" id="mail" placeholder="E-mail" class="box"/>
                        </p>
                        <p style="color: black">
                                <!--Password : --><input type="password" id="password" placeholder="Password" class="box"/>
                        </p>
                        <p style="color: black">
                                <!--Confirm the password : --><input type="password" id="confirm" placeholder="Confirm the password" class="box" />
                        </p>
                        <p>
                                <input type="submit" id="submit" value="Sign up" style="border-style: solid; border-radius: 5px"/>
                        </p>
                </form>
        </div> 
    </div>
      `
  })