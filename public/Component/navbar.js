Vue.component('nav-bar', {
    template: `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" v-on:click="$emit('on-change-current-page', 'accueil')" >My Theory</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
<<<<<<< HEAD
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
=======
              <a class="nav-link" v-on:click="$emit('on-change-current-page', 'accueil')" >Home <span class="sr-only">(current)</span></a>
>>>>>>> 3377b70e36c792688d3a59ef044e5b44e11a7229
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="$emit('on-change-current-page', 'profil')" >Profil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="connexion.html">Connexion</a>
            </li>
          </ul>
        </div>
      </nav>
      `
  })
