'use strict';

$(document).ready(function () {


  window.fbAsyncInit = function() {
    FB.init({
      appId      : 1105905996137106,  /*'1105769736150732', */
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


  // Find out base in the info from the URL whether to put up photo or
  // Run authentication for Twitter
  if (location.search.indexOf ("postcardID") > 0){
    console.log("postcard URL");
    console.log(location.search.replace("?postcardID=",""));
  }
  if (location.search.indexOf ("oauth_token") > 0){
    console.log("Twitter authentication");
    var tokens = location.search.split('&');
    console.log(tokens[0].replace("?oauth_token=",""));
    console.log(tokens[1].replace("oauth_verifier=",""));
  }

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

  var imgURL = "https://kutter-001.s3.amazonaws.com/2016-04-01/73b5589136dc9a9feef8960252255d25.png";

  imgURL = "https://kutter-001.s3.amazonaws.com/2016-04-11/ced211621f32382d33096dde5f0644ac.png";

 $('#facebookUpload').on('click',function (e){
    e.preventDefault();

    FB.api('/me/photos', 'post', {
        // message:'this is a message',
        caption: 'this is a caption',
        url: imgURL
    }, function(response){

        if (!response || response.error) {
            alert(response.error);
        } else {
            alert('Post ID: ' + response.id);
        }

    });

   // Note: The call will only work if you accept the permission request
    //FB.api('/me/feed', 'post', {message: 'Happy Friday'});
  });

  $('#twitterUpload').on('click',function (e){
    e.preventDefault();
    console.log("twitterUpload");

    FB.ui({
      method: 'feed',
     // link: 'http://detroitzoo.org/',
      picture: imgURL,
      caption: 'Here is my postcard from my Detroit Zoo Visit!'
    }, function(response){
        if (!response || response.error) {
            alert(response.error);
        } else {
            alert('Post ID: ' + response.post_id);
        }

    });
  });


  $('#twitter1').on('click',function (e){
    e.preventDefault();
    console.log("twitter1");

   //api.requestToken(generalCallback);
   tryMe3();

  });


  $('#twitter2').on('click',function (e){
    e.preventDefault();
    console.log("twitter2");
    OAuth.initialize('-wTpkEkqzYX2b5EcW8-2pYzKuC0');

    OAuth.popup('twitter', {cache: true}).done(function(twitter) {
      //make API calls with `twitter`
      console.log("passed");
        console.log(twitter);
    }).fail(function(err) {
      //todo when the OAuth flow failed
      console.log("failed:   "+ err);
    });


  });

  $('#twitter3').on('click',function (e){
    e.preventDefault();
    console.log("twitter3");
    window.location.href = "http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkutter-001.s3.amazonaws.com%2F2016-04-11%2Fced211621f32382d33096dde5f0644ac.png"
  });


});
