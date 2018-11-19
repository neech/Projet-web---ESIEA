const CardTheory = Vue.component('card-theory', {
  props: ['theory'],
  template: `
    <div class="card" v-on:click="$emit('on-theory-clicked', theory)" >
    <img :src="theory.urlImage" alt="Avatar"  >
    <div class="container"  >
      <h4><b>{{ theory.titre }}</b></h4> 
      <p>{{ theory.description }}</p> 
      <hr>
      <p>{{ theory.nbComment }} <i class="far fa-comment"></i> </p> 

      <ul v-if="getUserId == theory.id_user"   @click.native="e.preventDefault()"> <i class="far fa-trash-alt"></i></ul> 
      <ul v-if="getUserId == theory.id_user" > <i class="far fa-edit"></i></ul> 

    </div>
  </div>
      `,
      computed: {
        getUserId () {
          console.log(store.getters.getUserId)
            return store.getters.getUserId
        }
    }
})


const ListTheory = Vue.component('list_theory', {
  props: ['theories'],
  template: `
  <div class="list" >
  <section  v-for="theory in theories" >
  <router-link :to="{ name: 'Theory', params: { id: theory.id}}">
  <card-theory 
  v-bind:key="theory.id" 
  v-bind:theory="theory">
    </card-theory> 
    </router-link>
    </section>
  </div>
      `,
      created () {
        console.log("affichage de la liste des théories")
        store.dispatch('getAllTheories')
    }
      
})
