Vue.component('create-theory', {
    props: ['theory'],
    template: `
    <div class="createTheory">
    <h1><b>{{ theory.titre }}</b></h1> 
    <img :src="theory.urlImage" alt="Avatar" >
      <p>{{ theory.description }}</p> 
      </div>
      `
  })

  