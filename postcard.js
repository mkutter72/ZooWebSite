'use strict';

$(document).ready(function () {


  window.fbAsyncInit = function() {
    FB.init({
      appId      : 1105769736150732,  /*'', 1105905996137106*/
      xfbml      : true,
       version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



  $('#facebookLogin').on('click',function (e){
    e.preventDefault();

    if (typeof FB === 'undefined') // Any scope
      alert("Could not connect to Facebook,  check blocking software");
    else {
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          console.log('Already Logged in.');
        }
        else {
            FB.login(function(response){
              if (response.authResponse) {
                console.log("successful login");
              } else {
                console.log('User cancelled login or did not fully authorize.');
              }

            }, {scope: 'publish_actions'});
        };
      });
    };
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

    var imgURL = "https://kutter-001.s3.amazonaws.com/2016-04-01/73b5589136dc9a9feef8960252255d25.png";

    FB.api('/me/photos', 'post', {
        message:'photo description',
        url:imgURL
    }, function(response){

        if (!response || response.error) {
            alert('Error occured');
        } else {
            alert('Post ID: ' + response.id);
        }

    });

   // Note: The call will only work if you accept the permission request
    //FB.api('/me/feed', 'post', {message: 'Happy Friday'});
  });


});
