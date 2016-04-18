'use strict';

/*
https://api.twitter.com/oauth/request_token
Authorization:
OAuth oauth_consumer_key="tltlScWg67AwRz8qfQys0jB24",
oauth_nonce="700226758e31c9c991e11506a71e3b4a",
oauth_signature="se2p83sTMfD%2BJvzpF7hvRtBsU7M%3D",
oauth_signature_method="HMAC-SHA1",
oauth_timestamp="1460484469",
oauth_token="612247911-q39MekIKoHQUdLv16Dhb8rpY655ewFOMhDBzgaZa",
oauth_version="1.0"

https://api.twitter.com/oauth/access_token
Authorization:OAuth oauth_consumer_key="tltlScWg67AwRz8qfQys0jB24", oauth_nonce="700226758e31c9c991e11506a71e3b4a", oauth_signature="se2p83sTMfD%2BJvzpF7hvRtBsU7M%3D",
oauth_signature_method="HMAC-SHA1",
oauth_timestamp="1460484469",
oauth_token="612247911-q39MekIKoHQUdLv16Dhb8rpY655ewFOMhDBzgaZa",
oauth_version="1.0",
oauth_verifier=pvW9bpd5eXx9EZ6axzSWw0Uu41TchFPY


$.ajax({
    url: 'YourRestEndPoint',
    headers: {
        'Authorization':'Basic xxxxxxxxxxxxx',
        'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: YourData,
    success: function(data){
      console.log('succes: '+data);
    }
  });

 curl --request 'POST' 'https://api.twitter.com/oauth/request_token' --header 'Authorization: OAuth oauth_consumer_key="tltlScWg67AwRz8qfQys0jB24", oauth_nonce="f6c1475228397298f11eb8067bf9bda9", oauth_signature="7%2FyjwGZgnaHDFkw738GbehkiWUU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1460559891", oauth_token="612247911-q39MekIKoHQUdLv16Dhb8rpY655ewFOMhDBzgaZa", oauth_version="1.0"'


xhr.setRequestHeader('Authorization','OAuth oauth_consumer_key="HdFdA3C3pzTBzbHvPMPw", oauth_nonce="4148fa6e3dca3c3d22a8315dfb4ea5bb", oauth_signature="uDZP2scUz6FUKwFie4FtCtJfdNE%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp= "1359955650", oauth_token, "1127121421-aPHZHQ5BCUoqfHER2UYhQYUEm0zPEMr9xJYizXl", oauth_version="1.0"');

*/
function tryMe() {
 $.ajax({
        url: 'https://api.twitter.com/oauth/request_token',
        type: 'POST',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'OAuth oauth_consumer_key="tltlScWg67AwRz8qfQys0jB24", oauth_nonce="f6c1475228397298f11eb8067bf9bda9", oauth_signature="7%2FyjwGZgnaHDFkw738GbehkiWUU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1460559891", oauth_token="612247911-q39MekIKoHQUdLv16Dhb8rpY655ewFOMhDBzgaZa", oauth_version="1.0"');
        },
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
};


   var jsonData = JSON.stringify({
        Authorization: {
            oauth_consumer_key: "tltlScWg67AwRz8qfQys0jB24",
            oauth_nonce: "f6c1475228397298f11eb8067bf9bda9",
            oauth_callback: "encodeURIComponent(callBackURL)",
            oauth_signature_method: "HMAC-SHA1",
            oauth_timestamp: "unixtime",

            oauth_signature: "2FyjwGZgnaHDFkw738GbehkiWUU",
            oauth_version: "1.0",
            oauth_token:"612247911-q39MekIKoHQUdLv16Dhb8rpY655ewFOMhDBzgaZa"
        }
    });


function tryMe2() {

      $.ajax({
          url: 'http://localhost:3000',
          headers: {},
          //     'Authorization:OAuth oauth_consumer_key="tltlScWg67AwRz8qfQys0jB24", oauth_nonce="f6c1475228397298f11eb8067bf9bda9", oauth_signature="7%2FyjwGZgnaHDFkw738GbehkiWUU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1460559891", oauth_token="612247911-q39MekIKoHQUdLv16Dhb8rpY655ewFOMhDBzgaZa", oauth_version="1.0"'
          // ,
          method: 'POST',
          dataType: 'jsonp',
          contentType: false,
          processData: false,
          // data: YourData,
          success: function(data){
            console.log('succes: '+data);
          }
        });
};

function tryMe3() {
 $.ajax({
        url: 'https://api.twitter.com/oauth/request_token',
        type: 'POST',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'OAuth oauth_consumer_key="tltlScWg67AwRz8qfQys0jB24", oauth_nonce="f6c1475228397298f11eb8067bf9bda9", oauth_signature="7%2FyjwGZgnaHDFkw738GbehkiWUU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1460559891", oauth_token="612247911-q39MekIKoHQUdLv16Dhb8rpY655ewFOMhDBzgaZa", oauth_version="1.0"');
        },
        dataType: 'json',
        success: function (data) {
            alert(data);
        }
    });
};

function tryMe4() {
  $.ajax({
      url: 'https://api.twitter.com/oauth/request_token',
      method: 'POST',
      headers: jsonData,
      //     // 'Authorization':'OAuth oauth_consumer_key="tltlScWg67AwRz8qfQys0jB24", oauth_nonce="f6c1475228397298f11eb8067bf9bda9", oauth_signature="7%2FyjwGZgnaHDFkw738GbehkiWUU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1460559891", oauth_token="612247911-q39MekIKoHQUdLv16Dhb8rpY655ewFOMhDBzgaZa", oauth_version="1.0"',
      //     // 'Content-Type':'application/json'
      //},

      dataType: 'jsonp',
   //   data: YourData,
      success: function(data){
        console.log('succes: '+data);
      }
    });
};

function generalCallback(error, data) {
    if (error) {

      console.log('status: ' + error.status + ', error: ' +error.error);
      return;
    }

    // keeping this around just incase I need to turn back on displaying all returns from DB
    var dataStr = JSON.stringify(data, null, 4);
    console.log(dataStr);

  };

var api = {
  url: 'http://localhost:3000',
  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },



  requestToken: function(callback) {
    this.ajax({
        url: 'https://api.twitter.com/oauth/request_token',
        type: 'POST',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'OAuth oauth_consumer_key="tltlScWg67AwRz8qfQys0jB24", oauth_nonce="f6c1475228397298f11eb8067bf9bda9", oauth_signature="7%2FyjwGZgnaHDFkw738GbehkiWUU%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1460559891", oauth_token="612247911-q39MekIKoHQUdLv16Dhb8rpY655ewFOMhDBzgaZa", oauth_version="1.0", oauth_callback="http%3A%2F%2Fmkutter72.github.io%2FZooWebSite%2F"');
        },
        dataType: 'jsonp'
    }, callback);
  },

 createMessageBoard: function(boardData, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/mboard/makenew',
      contentType: 'application/json',
      data: JSON.stringify(boardData)
    }, callback);
  },

  updateMessageBoard: function(messageData, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/mboard/update',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(messageData)
    }, callback);
  },

  getMessageBoard: function (boardName, callback) {
      this.ajax({
        method: 'GET',
        url: this.url + '/mboard?q=' + boardName,
        dataType: 'json'
      }, callback);
  },

 getMessageBoardNames: function (callback) {
      this.ajax({
        method: 'GET',
        url: this.url + '/mboard',
        dataType: 'json'
      }, callback);
  },

  deleteMessageBoard: function (boardName, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/mboard/destroy?q=' + boardName,
    }, callback);
  },

  clearDate: function (dateStr, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/appointment/destroy?q=' + dateStr,
    }, callback);
  },

  getWallPosts: function (callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/wallpost',
    }, callback);
  },

  createWallPost: function (data,callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/wallpost/makenew',
      contentType: false,
      processData: false,
      data: data
    }, callback);
  },
};
