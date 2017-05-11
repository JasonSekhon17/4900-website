$(document).ready(function() {
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginBtn = $('.login-button');
  var emailBool = false;
  var typeBool = false;
  var access = false;

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

auth.onAuthStateChanged(user => {
    if(user){
        window.location.replace("home.html");
    }
});

loginBtn.on('click', function(){
  $('.incPass').addClass("hide");
  $('.incEmail').addClass("hide");
  $('.incType').addClass("hide");
  emailBool = false;
  typeBool = false;
  access = false;
  dbUserRef.once('value').then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
      var childData = childSnapshot.val();
      if(emailField.value == childData.email){
          emailBool = false;
        if(childData.type < 2){
          typeBool = false;
          access = true;
          const promise = auth.signInWithEmailAndPassword(emailField.value, passwordField.value);
          promise.catch(function(){
            access = false;
            $('.incPass').removeClass("hide");
          });
          return true;
        } else {
            typeBool = true;
            emailBool = false;
            return true;
        }
      } else {
          emailBool = true;
      }
    });
      if(emailBool) {
          $('.incEmail').removeClass("hide");
      } if(typeBool) {
          $('.incType').removeClass("hide");
      }
  });
});

});
