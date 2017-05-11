$(document).ready(function() {

    const logoutBtn = $('.logout-button');

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
        if(!user){
            window.location.replace("index.html");
        }
    });

    logoutBtn.on('click', function() {
        auth.signOut().then(function () {
            console.log('Signed Out');
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    });


});
