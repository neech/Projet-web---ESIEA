const Profil  = Vue.component('Profil', {
    props: ['userprofile','theories'],
    template: `
    <div class="profile">
        <h2> Welcome , {{ userprofile.pseudo }} </h2>
        
        <p>{{ userprofile.mail }} mail</p>
        <p>{{ userprofile.nbPost }} posts</p>
        <p>{{ userprofile.nbComment }} comments</p>
        <h4>Post list </h4>
        <hr style="border-radius: 2px; border-color: black">

        <div class="headers">
            <span><h5 style="float: left">Post title</h5></span>
            <span><h5 style="float: right">Comments</h5></span>
            <span><h5 style="text-align: center">Date</h5></span>
        </div>

        <section  v-for="theory in theories" >
            <router-link :to="{ name: 'Theory', params: { id: theory.id}}">
            <theory-horizontal
            v-bind:key="theory.id" 
            v-bind:theory="theory">
            </theory-horizontal>
            </router-link>
        </section>
    </div>
        `,
    created () {
        console.log(this)
        //console.log(JSON.parse(JSON.stringify(this)))
    }
  })
  