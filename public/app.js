var theories = [
  { id: 1, nbComment: 0, titre: 'Mon initiation avec Vue', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "description"},
  { id: 2,nbComment: 10,  titre: 'Blogger avec Vue', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "descriptdsgfhdspwo<rjghjsoprq^zejsgfnpôdsrqjkdgcbvxfdserqzeion" },
  { id: 3, nbComment: 2, titre: 'Pourquoi Vue est tellement cool', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jl descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkjdqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf  dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkj" }
]
var profil_user = {id: 1, pseudo : 'Vivaldo' , mail : 'a@hotmail.fr', nbPost :12 ,nbComment : 10} 

const routes = [
  { path: '/', component: ListTheory, props: {theories :  theories }},
  { path: '/home', component: ListTheory, props: {theories :  theories } },
  { path: '/Profil', component: Profil, props: {  userprofile : profil_user , theories : theories } },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/create', component: Create }
]


const router = new VueRouter({
  routes 
})

 
  var app = new Vue({
    router,
    el: '#app',
    data: {
      isDarkModeEnable : false,
        currentPage: '',
        theoryClicked : null,
        theories: [
          { id: 1, nbComment: 0, titre: 'Mon initiation avec Vue', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "description"},
          { id: 2,nbComment: 10,  titre: 'Blogger avec Vue', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "descriptdsgfhdspwo<rjghjsoprq^zejsgfnpôdsrqjkdgcbvxfdserqzeion" },
          { id: 3, nbComment: 2, titre: 'Pourquoi Vue est tellement cool', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jl descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkjdqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf  dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkj" }
        ],
        profil_user : {id: 1, pseudo : 'Vivaldo' , mail : 'a@hotmail.fr', nbPost :12 ,nbComment : 10} ,
      },
      methods: {
        onChangeCurrentPage: function (newCurrentPage) {
          this.currentPage = newCurrentPage
       
        },

        onTheoryClicked: function (theoryClicked) {
            console.log("here")
            this.theoryClicked = theoryClicked
            this.onChangeCurrentPage('theory-detail-page')
            console.log(this.currentPage)


          },
          
          enableDarkMode: function (change) {
            if(change)
            this.isDarkModeEnable = !this.isDarkModeEnable
            document.body.style.backgroundColor = this.isDarkModeEnable? "black" : "white"
            document.body.style.color = this.isDarkModeEnable? "white" : "black"
            elements = document.getElementsByClassName("container");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor= this.isDarkModeEnable? "black" : "white"
            }
          
          }


      }
  }).$mount('#app')
  
  console.log(app)