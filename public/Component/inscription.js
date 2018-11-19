const Signup = Vue.component('inscription-page', {
        data: function () {
                return {
                  new_user: { id:-1, pseudo: "", password : ""},
                  verif_password : null
                }
              },
              methods:{
                checkForm: function (e) {
                 
                  if (this.new_user.pseudo && this.new_user.password && this.verif_password && this.verif_password == this.new_user.password) {
                        axios.post(`user`, {
                                user: this.new_user
                              }).then(response => {
                                      if(response.data == true)
                                alert('an account with this pseudo already exist');
                                      else
                                router.push('/login')})
                  }
                  else
                  alert('Verify each fields');
                }
              },
    template: `
    <div class="inscription">
        <h3 id="header"> SIGN UP </h3>
        
        <div id="carre2">
                <form 
                id="form"
                @submit.prevent="checkForm">
                        
                        <!-- <p style="color: black;";>
                                Nom : <input type="text" id="lastname" class="box"/>
                                Prénom : <input type="text" id="name" class="box"/>
                        </p>
                        <p>
                                Date de naissance : <input type="date" id="end" name="trip" min="1900-01-01" max="2018-12-31" class="box"/>
                        </p>
                        -->

                        <p>
                                <input type="text" id="pseudo" v-model.trim="new_user.pseudo" placeholder="Pseudo" class="box"/>
                        </p>
                        <!-- 
                        <p>
                                <input type="text" id="mail" v-model.trim="new_user.mail" placeholder="E-mail" class="box"/>
                        </p>
                        -->
                        <p>
                                <input type="password" id="password" v-model.trim="new_user.password" placeholder="Password" class="box"/>
                        </p>
                        <p>
                                <input type="password" id="confirm" v-model.trim="verif_password" placeholder="Confirm the password" class="box" />
                        </p>
                        <p>
                                <input type="submit" id="submit" value="Sign up" style="border-style: solid; border-radius: 5px"/>
                        </p>
                </form>
        </div> 
    </div>
      `
  })