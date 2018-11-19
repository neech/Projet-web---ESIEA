const TheoryDetail = Vue.component('theory-detail', {
    props: ['theory'],
    template: `
    <div class="theoryDetail">
        <h1><b>{{ theory.titre }}</b></h1> 
        <img :src="theory.urlImage" alt="Avatar" > 

        <div style="float: left; width: 60px; margin-bottom: 2%; margin-top:5px; position: absolute">
            <span class="iconeEdit" v-if="getUserId == theory.id_user" v-on:click="edit_theory" > <i class="far fa-edit"></i></span> 
            <span class="iconeDelete" v-if="getUserId == theory.id_user || isAdmin"  v-on:click="delete_theory"> <i class="far fa-trash-alt"></i><span> 
        </div>

        <div style="float: left; position: absolute; margin-top: 3%">
            {{ theory.description }}
        </div>
        
        <div class="fixedinput">
            <input type="text" id="comment" placeholder="Write a comment here" class="comment_input"/>  
            <i class="far fa-paper-plane"></i>
        </div>
    </div>
      `,
      computed: {
        getUserId () {
          console.log(store.getters.getUserId)
            return store.getters.getUserId
        },
        isAdmin () {
              return store.getters.isAdmin
          }
    },
    methods: {
        delete_theory: function (e) {


       if (this.theory.id_user == store.state.profil_user.id || store.state.profil_user.isAdmin ) {

                axios.delete(`theory`,{ data:  {
                    theory : this.theory,
                    user: store.state.profil_user
                }}).then(response => {

                    router.push('/home')

                }).catch(error => {
                    console.log(error.response)
                });
         }
        },
        edit_theory: function (e) {
                router.push({
                    name: 'create',
                    params: {
                        theory: this.theory         
                    }
                })
        }
    }
})

  