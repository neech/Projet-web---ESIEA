
const navbar  = Vue.component('navbar-app', {
    template: `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/Home">My Theory</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
            <router-link class="nav-link" to="/Home">Home</router-link>
              </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/Profil" >Profil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Login">Connexion</router-link>
            </li>
           
          </ul>
          
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
        <a class="nav-link" v-on:click="$emit('enable-dark-mode',true)">    <i class="far fa-moon"></i></a>
      </li>
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </ul>
    </div>
        </div>
      </nav>
      `
  })
