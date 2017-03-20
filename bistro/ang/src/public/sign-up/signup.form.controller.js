(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var signup = this;
    
  signup.user = {};
  signup.dish = {};
  signup.dishError = false;
  signup.userLoggedIn = UserService.isUserLoggedIn();
  signup.success =false;


  signup.registerUser = function(){
    signup.userLoggedIn = true;
    UserService.registerUser(signup.user);
  }
  
  signup.submit = function(signupForm){
      
      signupForm.$setUntouched();    
      signup.dishError = false;
      signup.success =false;
      
      if (signup.user.favorite_shortname){
      signup.dish = UserService.getDishByShortname(signup.user.favorite_shortname).then(function(result){
      signup.user.favorite = result;
      signup.registerUser();
      signup.success =true;
      })
      .catch(function(err) {
      signup.dishError = true;
       })
      } 
      else {      
      signup.registerUser();
      signup.success =true;
      }
  };
    
}

})();