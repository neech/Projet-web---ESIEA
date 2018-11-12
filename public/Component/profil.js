const Profil  = Vue.component('Profil', {
    props: ['userprofile','theories'],
    template: `
    <div class="profil">
   <h2> Welcome , {{ userprofile.pseudo }} </h2>
   <p>{{ userprofile.mail }} mail</p>
<p>{{ userprofile.nbPost }} posts</p>
<p>{{ userprofile.nbComment }} comments</p>
<h5>Post list </h5>
<hr>
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
        //console.log(JSON.parse(JSON.stringify(this)))
    }
  })
  