Vue.component('profil-page', {
    props: ['user_profil','theories'],
    template: `
    <div class="profil">
   <h2> Welcome , {{ user_profil.pseudo }} </h2>
   <p>{{ user_profil.mail }} mail</p>
<p>{{ user_profil.nbPost }} posts</p>
<p>{{ user_profil.nbComment }} comments</p>
<h5>Post list </h5>
<hr>
<card-theory 
v-for="theory in theories" 
v-bind:key="theory.id" 
v-bind:theory="theory"
v-on:on-theory-clicked="onTheoryClicked">
</card-theory>
</div>
        `
  })
  