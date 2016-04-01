'use strict';

$(document).ready(function () {

  $('#facebookLogin').on('click',function (e){
    e.preventDefault();
    console.log("Logging in");


    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('Logged in.');
      }
      else {
          FB.login(function(){}, {scope: 'publish_actions'});
      }
    });
  });



  $('#facebookLogout').on('click',function (e){
    e.preventDefault();
    console.log("logout");


    FB.logout(function(response) {
      console.log("logged out");
      });
  });


 $('#facebookUpload').on('click',function (e){
    e.preventDefault();

   // Note: The call will only work if you accept the permission request
    FB.api('/me/feed', 'post', {message: 'Hello, world!'});
  });


});
