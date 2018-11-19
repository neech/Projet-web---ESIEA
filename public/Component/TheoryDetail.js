const TheoryDetail = Vue.component('theory-detail', {
    props: ['theory'],
    template: `
    <div class="theoryDetail">
        <h1><b>{{ theory.titre }}</b></h1> 
        <img :src="theory.urlImage" alt="Avatar" > 

        <div style="float: right; width: 8%; margin-top: 1%; margin-bottom: 3%">
            <span style="float: right" >
                <ul v-if="getUserId == theory.id_user" v-on:click="edit_theory" > <i class="far fa-edit"></i></ul> 
            </span>
            <span style="float: left">
                <ul v-if="getUserId == theory.id_user || isAdmin"  v-on:click="delete_theory"> <i class="far fa-trash-alt"></i></ul> 
            </span>
        </div>

        <p style="float: left">{{ theory.description }}</p>
        
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

  