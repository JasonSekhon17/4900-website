$(document).ready(function() {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const loginBtn = $('.login-button');
    emailBool = true;
    typeBool = true;
    access = false;

    $('.navbar-nav [data-toggle="tooltip"]').tooltip();
    $('.navbar-twitch-toggle').on('click', function(event) {
        event.preventDefault();
        $('.navbar-twitch').toggleClass('open');
    });

    $('.nav-style-toggle').on('click', function(event) {
        event.preventDefault();
        var $current = $('.nav-style-toggle.disabled');
        $(this).addClass('disabled');
        $current.removeClass('disabled');
        $('.navbar-twitch').removeClass('navbar-'+$current.data('type'));
        $('.navbar-twitch').addClass('navbar-'+$(this).data('type'));
    });


    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBhJzlh1rcyhfugRXLXyD-YmD3vCB1fMGY",
      authDomain: "washaf-d566c.firebaseapp.com",
      databaseURL: "https://washaf-d566c.firebaseio.com",
      projectId: "washaf-d566c",
      storageBucket: "washaf-d566c.appspot.com",
      messagingSenderId: "484998080513"
    };
    firebase.initializeApp(config);
    firebase.database();
    const dbUserRef = firebase.database().ref().child('user').orderByKey();
    const auth = firebase.auth();

    loginBtn.on('click', function(){
      $('.incPass').addClass("hide");
      $('.incEmail').addClass("hide");
      $('.incType').addClass("hide");
      emailBool = true;
      typeBool = true;
      access = false
      dbUserRef.once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          if(emailField.value == childData.email){
            emailBool = false
            if(childData.type < 2){
              typeBool = false;
              access = true;
              const promise = auth.signInWithEmailAndPassword(emailField.value, passwordField.value);
              promise.catch(function(){
                access = false;
                $('.incPass').removeClass("hide");
              });
            }
          }
        })
        if(access)
          window.location.replace("home.php");
        if(emailBool)
          $('.incEmail').removeClass("hide");
        if(typeBool)
          $('.incType').removeClass("hide");
      });
    });



});
