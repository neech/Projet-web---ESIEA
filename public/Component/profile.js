const Profil  = Vue.component('Profil', {
    props: ['userprofile','theories'],
    data: function () {
        return {
            theories_user : []
        }
    },
    template: `
    <div class="profile">
        <h2> Welcome , {{ userprofile.pseudo }} </h2>
        
        <p>{{ userprofile.mail }} mail</p>
        <p>{{ userprofile.nbPost }} posts</p>
        <p>{{ userprofile.nbComment }} comments</p>
        <h4>Post list </h4>
        <hr style="border-radius: 2px; border-color: black">

        <div class="headers">
            <span><h5 style="float: left">Post title</h5></span>
            <span><h5 style="float: right">Comments</h5></span>
            <span><h5 style="text-align: center">Date</h5></span>
        </div>

        <section  v-for="theory in theories_user" >
            <router-link :to="{ name: 'Theory', params: { id: theory.id}}">
            <theory-horizontal
            v-bind:key="theory.id" 
            v-bind:theory="theory">
            </theory-horizontal>
            </router-link>
        </section>
    </div>
        `,
    mounted () {
        console.log(this)
var self = this
        axios.get('/theory/user', {
            params: {
              ID_USER: store.state.profil_user.id
            }
          })
          .then(function (response) {
            console.log(self.theories_user)

            if(self.theories_user !== null && self.theories_user != undefined)
            self.theories_user.splice(0,  self.theories_user.length)

             response.data.forEach(t => {
                self.theories_user.push(t);
             })

             console.log(self.theories_user)
          })

        
    }
  })
  