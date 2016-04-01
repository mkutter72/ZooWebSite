'use strict';

$(document).ready(function () {

  $('#facebookUpload').on('click',function (e){
    e.preventDefault();
    console.log("got here");


FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log('Logged in.');
  }
  else {
    FB.login();
  }
});



  });

});
