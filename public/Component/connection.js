

const Login = Vue.component('connexion-page', {
    data: function () {
        return {
            user_log: { id: -1, pseudo: "", password: "" }
        }
    },
    methods: {
        login: function (e) {
            console.log(store.state.profil_user)
            if (this.user_log.pseudo && this.user_log.password) {
                axios.post(`user/login`, {
                    user: this.user_log
                }).then(response => {
                    console.log(response.data)
                    var userCo = response.data

                    if (userCo === null) {
                        alert("This user exist or the password is wrong")
                        return
                    }

                    else {
                        store.commit('setUser', userCo)
                        router.push('/home')
                    }

                    console.log(store.state.profil_user)
                }).catch(error => {
                    console.log(error.response)
                });
            }
            else
                alert('Verify each fields');
        }
    },
    template: `
    <div class="connection" >
        <h3 id="header"> LOGIN </h3>

        <div id="carre1">
            <form id="form"
            @submit.prevent="login" >
                <p>
                    Username :
                </p>
                <p>
                    <input type="text" id="username" v-model.trim="user_log.pseudo" placeholder="Pseudo" class="box" />
                </p>
                <p>
                    <input type="password" id="password" v-model.trim="user_log.password"  placeholder="Password" class="box"/>
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