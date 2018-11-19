const CardTheory = Vue.component('card-theory', {
  props: ['theory'],
  template: `
    <div class="card" v-on:click="$emit('on-theory-clicked', theory)" >
    <img :src="theory.urlImage" alt="Avatar"  >
    <div class="container"  >
      <h4><b>{{ theory.titre }}</b></h4> 
      <p>{{ theory.description }}</p> 
      <hr>
      
      <div style="width: 15%">
        <span style="float: left">
          <p>{{ theory.nbComment }} <i class="far fa-comment"></i> </p>
        </span>
        <span style="float: right">
          <ul v-if="getUserId == theory.id_user" > <i class="far fa-edit"></i></ul> 
        </span>
        <span style="text-align: center">
          <ul v-if="getUserId == theory.id_user"  v-on:click="counter += 1"> <i class="far fa-trash-alt"></i></ul> 
        </span>
      </div>

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
