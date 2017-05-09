$(document).ready(function() {
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
});
