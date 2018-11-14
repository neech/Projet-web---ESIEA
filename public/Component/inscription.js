const Signup = Vue.component('inscription-page', {
    template: `
    <div class="inscription">
        <h3 id="header"> SIGN UP </h3>
        
        <div id="carre2">
                <form id="form">
                        
                        <!-- <p style="color: black;";>
                                Nom : <input type="text" id="lastname" id="box"/>
                                Prénom : <input type="text" id="name" id="box"/>
                        </p>
                        <p>
                                Date de naissance : <input type="date" id="end" name="trip" min="1900-01-01" max="2018-12-31" id="box"/>
                        </p>
                        -->

                        <p>
                                <input type="text" id="pseudo" placeholder="Pseudo" id="box"/>
                        </p>
                        <p>
                                <input type="text" id="mail" placeholder="E-mail" id="box"/>
                        </p>
                        <p>
                                <input type="password" id="password" placeholder="Password" id="box"/>
                        </p>
                        <p>
                                <input type="password" id="confirm" placeholder="Confirm the password" id="box" />
                        </p>
                        <p>
                                <input type="submit" id="submit" value="Sign up" style="border-style: solid; border-radius: 5px"/>
                        </p>
                </form>
        </div> 
    </div>
      `
  })