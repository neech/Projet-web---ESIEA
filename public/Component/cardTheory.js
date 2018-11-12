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
    </div>
  </div>
      `
})


const ListTheory = Vue.component('list_theory', {
  props: ['theories'],
  template: `
  <div class="list" >
  <card-theory 
  v-for="theory in theories" 
  v-bind:key="theory.id" 
  v-bind:theory="theory"
  v-on:on-theory-clicked="onTheoryClicked">
  </card-theory>
  </div>
      `,
      created () {
        console.log("jnklm")
        console.log(this)
    }
      
})
