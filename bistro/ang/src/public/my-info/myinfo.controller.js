(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService','ApiPath'];
function MyInfoController(UserService,ApiPath) {
  
  var info = this;  
    
  info.user={};
  info.basePath = ApiPath;      
    
  info.userLoggedIn = UserService.isUserLoggedIn();
    
  
  if (info.userLoggedIn){  
    info.user = UserService.getUserDetails();
  }    
    
}

})();