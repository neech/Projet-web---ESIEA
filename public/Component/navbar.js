
const navbar = Vue.component('navbar-app', {
    data: function () {
        return {
            filtre : ''
        }
    },
  template: `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/Home">My Theory</router-link>


    <ul class="navbar-nav ">
    <a class="nav-item nav-link " v-on:click="$emit('enable-dark-mode',true)">    <i class="far fa-moon"></i></a>
    </ul>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
            <router-link class="nav-link" to="/Home">Home</router-link>
              </li>
            <li class="nav-item" v-if="isUserConnected">
            <router-link class="nav-link"  to="/Profil" >Profile</router-link>
            </li>
            <li class="nav-item"  v-if="!isUserConnected">
              <router-link class="nav-link" to="/Login">Login</router-link>
            </li>
            <li class="nav-item" class="nav-link" v-if="isUserConnected" v-on:click="Logout" style="cursor: pointer;" >Logout</li>
           
          </ul>

        </div> 

       
        <ul class="navbar-nav ml-auto">
      
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model.trim="filtre"  aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0"  v-on:click="search" >Search</button>
        </form>
        
        </ul>
  
      </nav>
      `,
  computed: {
    isUserConnected() {
      return store.getters.isUserConnected;
    }
  },
  methods: {
    search: function (e) {
      store.dispatch('searchTheoriesAction', this.filtre)
    },
    Logout: function (e) {
      store.dispatch('logout')
    }
    
  }

})
