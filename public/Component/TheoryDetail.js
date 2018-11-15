const TheoryDetail = Vue.component('theory-detail', {
    props: ['theory'],
    template: `
    <div class="theoryDetail">
        <h1><b>{{ theory.titre }}</b></h1> 
        <img :src="theory.urlImage" alt="Avatar" >
        <p>{{ theory.description }}</p> 
        
        <div class="fixedinput">
            <input type="text" id="comment" placeholder="Write a comment here" class="comment_input"/>  
            <i class="far fa-paper-plane"></i>
        </div>
    </div>
      `
  })

  