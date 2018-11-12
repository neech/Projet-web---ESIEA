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
        console.log("jnklm")
        //console.log(JSON.parse(JSON.stringify(this)))
    }
  })
  