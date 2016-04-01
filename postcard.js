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
        FB.login();
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



});
