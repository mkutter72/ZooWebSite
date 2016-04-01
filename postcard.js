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

    var imgURL = "https://kutter-001.s3.amazonaws.com/2016-04-01/73b5589136dc9a9feef8960252255d25.png";

    FB.api('/album_id/photos', 'post', {
        message:'photo description',
        url:imgURL
    }, function(response){

        if (!response || response.error) {
            alert('Error occured');
            console.log(response.error);
        } else {
            alert('Post ID: ' + response.id);
        }

    });

   // Note: The call will only work if you accept the permission request
    //FB.api('/me/feed', 'post', {message: 'Happy Friday'});
  });


});
