Vue.component('theory-detail', {
    props: ['theory'],
    template: `
    <div class="theoryDetail">
    <h1><b>{{ theory.titre }}</b></h1> 
    <img :src="theory.urlImage" alt="Avatar" >
      <p>{{ theory.description }}</p> 
      </div>
      `
  })

  