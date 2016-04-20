'use strict';

var logo = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAKfSURBVHjabJNNSFRRGIafc+6d8Y6OM42aTmpNauRgUVBRVEwZCC6kdtGqRRBtWkWLKGgXtghaRIsK3ES0L4pKCPpZREX2oxnVlOn4V4026Tjj3HvPPS2asRp64OODw8v3cXjfTxinrlOGBHSxzgPjxW4Cqvj+j7icy8AVIAIcK5YPuAMc/9+2fxEioWz3sFoozCrloVzVrLKLtud6XQiRKKlKcrPYo8AbhEiq+Xxba2MN7dEwtqsQCExT8moszfRMNmFUWwN4uhKI/z1gHikCai6/fefaRlqiYW6+HGEunQU00cYaejbGeJacjgym0hEjGBhC66UvhIEWlbPHN6yqo7UhzLUbz9mxup65C4dInTtIxPLRd/sFW1vqaaoNoRw1DawAQhI4Awzi6fjahjD97ybAUfTuWc+Je6+5l5zmTOc6mMnydOQbm2N1sGh3AZNArwR6Pa0fRGqD5BYdvk7MEoo3sbG1npXVFsv8JtviTdAWZWjyB8pRUOkHuAqcNYEpDQOmFJ2O8iCbpyfegRSCk53rlszZFKtjYCiFqzyElAAPgQkTuGgIcfR7JkeouRYCfrw/Li1RcD38oQCW5UMvFKCqog/YYgJ9QAbHPTKbt5cnNrVy980op+uCzOVshBCYhmR4LM2+DTFG0vNgGu+BS8AjUYqyFiLp5QttBza38flnjudPPoDt/k5ulUX37g6k43JncAwjGOhH626A0oA1wEfl6UVs10q0NxK2fGQLLkJAqMLHeGaBF5++KllVYQjIF+13SkFKAi2GFN+wfMOP36ZiZqWfppogrqeZTM+jXYURtO4XN8cAp/wWvgA5YMoIWiOelPtHZ7JMZBYywm/uNSorQOvRona0/Bb+ZhcgBRQMQ14CUsAtoAoolIt/DQBMqAUSa5wR2gAAAABJRU5ErkJggg==";

//Convert base64 into blob
//cf http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
}



function  runit() {
  OAuth.initialize('-wTpkEkqzYX2b5EcW8-2pYzKuC0', {cache:true});

    OAuth.popup("twitter").then(function(result) {
        var data = new FormData();
        data.append('status', 'This is a test 3');
        //data.append('media[]', b64toBlob(logo), 'logo.png');
        data.append('media', 'postcard.png');
 //       return result.post('/1.1/statuses/update_with_media.json', {
        return result.post('https://upload.twitter.com/1.1/media/upload.json', {
            data: data,
            cache:false,
            processData: false,
            contentType: false
        });
    }).done(function(data){
        var str = JSON.stringify(data, null, 2);
        console.log("Success\n" + str);
    }).fail(function(e){
        var errorTxt = JSON.stringify(e, null, 2)
        console.log("Error\n" + errorTxt);
    });
};

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

    OAuth.initialize('-wTpkEkqzYX2b5EcW8-2pYzKuC0');

    OAuth.popup('twitter').done(function(twitter) {
      //make API calls with `twitter`
      console.log("passed");
        console.log(twitter);

        twitter.post('/1.1/statuses/update.json', {
          data: {
            status: "hello world again!",
            media_ids: '722484921776914432'
            }
          });

        // media/upload.json 404 not found
       // twitter.post('/1.1/statuses/update_with_media.json', {
       //    data: {
       //      status: "test test",
       //      media: './postcard.png'
       //      }
       //    });


    }).fail(function(err) {
      //todo when the OAuth flow failed
      console.log("failed:   "+ err);
    });
  });


  $('#twitter2').on('click',function (e){
    e.preventDefault();
    oauthResult.post('/1.1/statuses/update.json', {
      data: {
        status: "hello world!"
      }
    });


  });


  $('#twitter3').on('click',function (e){
    e.preventDefault();
    console.log("twitter3");
    //removes cache for all providers
    //OAuth.clearCache();
    runit();
  });



  $('#twitter4').on('click',function (e){
    e.preventDefault();
    console.log("twitter3");
    window.location.href = "http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkutter-001.s3.amazonaws.com%2F2016-04-11%2Fced211621f32382d33096dde5f0644ac.png"
  });


});
