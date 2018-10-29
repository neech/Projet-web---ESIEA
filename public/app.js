
  var app = new Vue({
    el: '#app',
    data: {
        currentPage: '',
        theoryClicked : null,
        theories: [
          { id: 1, nbComment: 0, titre: 'Mon initiation avec Vue', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "description"},
          { id: 2,nbComment: 10,  titre: 'Blogger avec Vue', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "descriptdsgfhdspwo<rjghjsoprq^zejsgfnpôdsrqjkdgcbvxfdserqzeion" },
          { id: 3, nbComment: 2, titre: 'Pourquoi Vue est tellement cool', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf  dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkj" }
        ]
      },
      methods: {
        onChangeCurrentPage: function (newCurrentPage) {
          this.currentPage = newCurrentPage
        },

        onTheoryClicked: function (theoryClicked) {
            console.log("here")
            this.theoryClicked = theoryClicked
            this.onChangeCurrentPage('theoryDetail')
            console.log(this.currentPage)
          }
      }
  })
  console.log(app)