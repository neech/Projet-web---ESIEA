var express = require('express');

var theories = [
  { id: 1, nbComment: 0, id_user : 100, date: 1529273810, titre: 'Mon initiation avec Vue', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "description"},
  { id: 2,nbComment: 10, id_user : 100, date: 1529273810, titre: 'Blogger avec Vue', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "descriptdsgfhdspwo<rjghjsoprq^zejsgfnpôdsrqjkdgcbvxfdserqzeion" },
  { id: 3, nbComment: 2, id_user : 100,date: 1529273810, titre: 'Pourquoi Vue est tellement cool', urlImage : "https://thenypost.files.wordpress.com/2017/08/aliens.jpg" , description: "descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jl descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkjdqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf  dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkj" }
]

 exports.addTheory  = function (req, res){
  //appeler la fonction d'ajout de theorie
    var theory = req.body.theory
   theory.id =   theories.length > 0 ? theories[theories.length-1].id +1  : 0
   theory.date = Date.now()
    theories.push(theory)
    console.log("addTheory")
    res.json(theories) //remplacer par un next
}


exports.updateTheory = function (req, res){

// appele la fonction de mise à jour de théorie

var theory = req.body.theory

var oldTheory =  theories.find( t => t.id === theory.id )

var index = array.indexOf(oldTheory)
  if (index > -1) {
    theories.splice(index, 1, theory);
  }

  console.log("updateTheory")
}



exports.deleteTheory = function (req, res){
  //supprime la theories et renvoie la liste
  var theory = req.body.theory

  var index = array.indexOf(theory)
  if (index > -1) {
    theories.splice(index, 1)
  }

  console.log("deleteTheory")
}

exports.getAllTheory = function (req, res){
 //retourne toute les theories
    res.json(theories)
    console.log("getAllTheory")  
}


