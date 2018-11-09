
Vue.component('nav-bar', {
    template: `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" v-on:click="$emit('on-change-current-page', 'accueil-page')" >My Theory</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" v-on:click="$emit('on-change-current-page', 'accueil-page')" >Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="$emit('on-change-current-page', 'profil-page')" >Profil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="$emit('on-change-current-page', 'connexion-page')">Connexion</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" v-on:click="$emit('enable-dark-mode',true)">    <i class="far fa-moon"></i></a>
          </li>
          </ul>
        </div>
      </nav>
      `
  })
