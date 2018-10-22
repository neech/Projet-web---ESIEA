Vue.component('mini-theory', {
    props: ['theory'],
    template: `
    <div class="card">
    <img :src="theory.urlImage" alt="Avatar" >
    <div class="container">
      <h4><b>{{ theory.titre }}</b></h4> 
      <p>{{ theory.description }}</p> 
    </div>
  </div>
      `
  })
