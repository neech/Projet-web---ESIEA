var express = require('express');
const fs = require('fs');
const filename = "theories"


var theories = [
  { id: 1, nbComment: 0, id_user: 100, date: 1529273810, titre: 'Mon initiation avec Vue', urlImage: "https://thenypost.files.wordpress.com/2017/08/aliens.jpg", description: "description" },
  { id: 2, nbComment: 10, id_user: 100, date: 1529273810, titre: 'Blogger avec Vue', urlImage: "https://thenypost.files.wordpress.com/2017/08/aliens.jpg", description: "descriptdsgfhdspwo<rjghjsoprq^zejsgfnpôdsrqjkdgcbvxfdserqzeion" },
  { id: 3, nbComment: 2, id_user: 100, date: 1529273810, titre: 'Pourquoi Vue est tellement cool', urlImage: "https://thenypost.files.wordpress.com/2017/08/aliens.jpg", description: "descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jl descripsdnlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkjdqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf  dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj nlkfmkùlmdfdnbjksmqlzkdsnfsqd fdsqjfkbkmdslqflkmvjdsf dskljbnkfgdflkstion fjkgherge ghrjhghghjeghjghkdhgjks edghfdg erhdgbhjvk dsbfhjkn hdbjkhf jdksgnfkn qsnbdjbsnl dbldkqfb jldqksf bcdshkfs n dsfdsjhfsjvbdsnsf,mklvbdjnfkmjlnbfdjf mvlfd sfnvbfdjkfljvnbdjsnlkf vbfdsj vbfsdkjf dsjhcbdshjkflhcbs dsqsdjkcxj bsdkn dsqs riuhgdjk sfdgj sdvsdvhjdksjbvjklsqjcb dsqc dsqjcnbsqkjc sq,cb dsqcbdjskx jdhsjqxcbl sdqxc ndsbqxwjklhcbdsqxjhjcbdsjxcnb dsqxb xcd xbcjklx c,bsdkj" }
]

fs.readFile(filename, function (err, data) {
  if (data !== undefined && data !== null) {
    theories = JSON.parse(data)
  }

});

exports.addTheory = function (req, res) {
  //appeler la fonction d'ajout de theorie
  var theory = req.body.theory
  theory.id = theories.length > 0 ? theories[theories.length - 1].id + 1 : 0
  theory.date = Date.now()
  theories.push(theory)
  console.log("addTheory")


  saveTheories()
  res.json(theories) //remplacer par un next


}


exports.updateTheory = function (req, res) {

  // appele la fonction de mise à jour de théorie

  var theory = req.body.theory

  var oldTheory = theories.find(t => t.id === theory.id)

  var index = theories.indexOf(oldTheory)
  if (index > -1) {
    theories.splice(index, 1, theory);
  }

  saveTheories()

  console.log("updateTheory")
  res.send(true)
}

exports.deleteTheory = function (req, res) {

  //supprime la theorie
  var theory = req.body.theory
  var user = req.body.user

  if (theory.id_user == user.id || user.isAdmin) {

    var theoryInBd = theories.find(t => t.id === theory.id);

    var index = theories.indexOf(theoryInBd)


    console.log(index);
    if (index > -1) {
      theories.splice(index, 1)
    }

    saveTheories()

    res.send(true)

  }
  else
    res.send(false)
}

exports.getAllUserTheory = function (req, res) {

  var idUser = req.query.ID_USER
  
  var theoriesUser = theories.filter(theory => theory.id_user == idUser)

  res.send(theoriesUser)

}

exports.getAllTheory = function (req, res) {
  //retourne toute les theories
  res.json(theories)
  console.log("getAllTheory")
}


saveTheories = function () {
  //sauvegarder
  var data = JSON.stringify(theories)

  fs.writeFile(filename, data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}