
const store = new Vuex.Store({
  state: {
    theories: [],
    theories_searched: [],
    profil_user: { id: -1, pseudo: '', password: '', isAdmin: false }
  },
  getters: {
    isUserConnected: state => {
      return !state.profil_user.pseudo == ''
    }
    , getUserId: state => {
      return state.profil_user.id
    }
    , isAdmin: state => {
      return state.profil_user.isAdmin
    }
  },
  mutations: {
    setUser(state, profil_user) {
      state.profil_user.id = profil_user.id
      state.profil_user.pseudo = profil_user.pseudo
      state.profil_user.isAdmin = profil_user.isAdmin
    },
    setTheories(state, theories) {

      state.theories.splice(0, state.theories.length)

      theories.forEach(t => {
        state.theories.push(t);
      })

    },
    searchTheories(state, filtre) {
      console.log(filtre)
      state.theories_searched = state.theories.filter(theory => theory.titre.includes(filtre))
      console.log(state.theories_searched)

    }
  }
  ,

  actions: {
    getAllTheories(context) {
      axios.get(`theory`).then(response => {
        var theories = response.data
        context.commit('setTheories', theories)

      })
    },
    searchTheoriesAction(context, filtre) {

      context.commit('searchTheories', filtre)
      console.log(context.state.theories_searched)

      router.push({
        name: 'home',
        params: {
          theories: context.state.theories_searched
        }


      })
    }
  }
})


function searchTheory(route) {
  return { theory: store.state.theories.find(x => x.id == route.params.id) }

}

var routes = [
  { path: '/', component: ListTheory, props: { theories: store.state.theories } },
  { path: '/Theory/:id', name: 'Theory', component: TheoryDetail, props: searchTheory },
  { path: '/Search', name: 'home', component: ListTheory, props: true },
  { path: '/home', component: ListTheory, props: { theories: store.state.theories } },
  { path: '/Profil', component: Profil, props: { userprofile: store.state.profil_user } },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/create', name: 'create', component: Create, props: true }
]


const router = new VueRouter({
  routes
})


var app = new Vue({
  router,
  el: '#app',
  data: {
    styleApp: {
      'background-color': 'white',
      'min-width': '700px',
      'min-height': '100%',
      'color': 'black'
    },
    isDarkModeEnable: false,
    theoryClicked: null,
    theories: [
      { id: 1, nbComment: 0, titre: 'Mon initiation avec Vue', urlImage: "https://thenypost.files.wordpress.com/2017/08/aliens.jpg", description: "descriptiooooon" },
      { id: 2, nbComment: 10, titre: 'Blogger avec Vue', urlImage: "https://thenypost.files.wordpress.com/2017/08/aliens.jpg", description: "descriptdsgfhdspworjghjsoprq^zejsgfnpôdsrqjkdgcbvxfdserqzeion" },
      { id: 3, nbComment: 2, titre: 'Pourquoi Vue est tellement cool', urlImage: "https://thenypost.files.wordpress.com/2017/08/aliens.jpg", description: "descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jl descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkjdqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf  dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkj" }
    ],
    profil_user: null,
    // profil_user : {id: 1, pseudo : 'Vivaldo' , mail : 'a@hotmail.fr', nbPost :12 ,nbComment : 10} ,
  },
  methods: {

    onTheoryClicked: function (theoryClicked) {
      console.log("here")
      this.theoryClicked = theoryClicked
      this.onChangeCurrentPage('theory-detail-page')
      console.log(this.currentPage)

    },

    enableDarkMode: function (change) {

      if (change) {
        this.isDarkModeEnable = !this.isDarkModeEnable
        localStorage.isDarkModeEnable = this.isDarkModeEnable;
      }
      this.styleApp['background-color'] = this.isDarkModeEnable ? "black" : "white"
      this.styleApp['color'] = !this.isDarkModeEnable ? "black" : "white"
    }



  },
  mounted() {

    if (localStorage.isDarkModeEnable) {
      this.isDarkModeEnable = localStorage.isDarkModeEnable === "true"; //Conversion en booléen sinon ça ne fonctionne pas ...
    }

    this.enableDarkMode(false)

    store.dispatch('getAllTheories')

    axios.get(`user/me`).then(response => {
      console.log(response.data)
       if( response.data!= null && response.data != undefined)
store.commit( 'setUser', response.data)

console.log(store.state.profil_user)

    })
   


  }

})

console.log(app)