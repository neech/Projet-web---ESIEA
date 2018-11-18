var express = require('express');

var users = [{id:0, pseudo : "admin", password : "admin", isAdmin : true}]

exports.login = function (req, res){

    console.log("login")
    console.log(req.body.user)
    var user  = req.body.user
    var userCo =  Object.assign({}, users.find( u => u.pseudo == user.pseudo && u.password == user.password ))
  userCo.password = ""
    res.setHeader('Content-Type', 'application/json');
    res.json(userCo)

    }

exports.signup = function (req, res){
    var user  = req.body.user;
  

   var isUserAlreadyExist = users.find( u => u.pseudo == user.pseudo ) !== undefined

   if(!isUserAlreadyExist){ 
        user.id = users.length +1
      users.push(user)
    console.log(users)
    console.log("signup")
   }
    
    res.json(isUserAlreadyExist)
/*
if()// vérifier dans la bdd si le pseudo n'est pas pris
{
    // enregister le couple pseudo password dans la bdd
       return true // création du compte effectif
     
}
 
    else
    return false // création du compte non effectif
}*/
}