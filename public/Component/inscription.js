Vue.component('inscription-page', {
    template: `
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
                    Pseudo : <input type="text" id="pseudo" class="box"/>
            </p>
            <p style="color: black">
                    E-mail : <input type="text" id="mail" class="box"/>
            </p>
            <p style="color: black">
                    Paasword : <input type="password" id="password" class="box"/>
            </p>
            <p style="color: black">
                    Confirm the password : <input type="password" id="confirm" class="box" />
            </p>
            <p>
                <input type="submit" id="submit" value="S'inscrire" style="border-style: solid; border-radius: 5px"/>
            </p>
    </form>
</div> 
      `
  })