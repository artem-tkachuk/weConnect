$(document).ready(function() {

$('#signout').hide()

$('#signup').click(function(e) {
  e.preventDefault()
  signup()
})


$('#signin').click(function(e) {
  e.preventDefault();
signin()
})

$('#signout').click(function(e) {
  e.preventDefault()
signout()
})

 var firebaseConfig = {
    apiKey: "AIzaSyDsNuVkfLtS5hKe6ChjWFYnTCDNlc4QbEM",
    authDomain: "weconnect-270421.firebaseapp.com",
    databaseURL: "https://weconnect-270421.firebaseio.com",
    projectId: "weconnect-270421",
    storageBucket: "weconnect-270421.appspot.com",
    messagingSenderId: "51644822370",
    appId: "1:51644822370:web:81ba1dd21ce691f173723b",
    measurementId: "G-WDKZXT34CT"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth=firebase.auth();

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });

  function signup(){
    var name=$('#name').val();
    var email=$('#email2').val();    
    var password=$('#password2').val();

const promise= auth.createUserWithEmailAndPassword(email,password);


promise.catch(error=>{
  if(error){
    alert(error.message)
  }else{
    alert('signedin');

      window.open('/dashboard', '_self');

    $('#signout').show()

  }}
  )

  }

  
  function signin(){
    var email=$('#email1').val();
    var password=$('#password1').val();

const promise=auth.signInWithEmailAndPassword(email,password)

promise.catch(e=>alert(e.message))

alert('signed in ' + email)

$('#signout').show()


  }

  function signout(){
    auth.signOut()

    $('#signout').hide()


    alert('signout')

  }


auth.onAuthStateChanged(function(user){

if(user){

alert('active user : ' + user.email )

}else{

alert('no active user')

}

})



})


  



var $loginMsg = $('.loginMsg'),
  $login = $('.login'),
  $signupMsg = $('.signupMsg'),
  $signup = $('.signup'),
  $frontbox = $('.frontbox');

$('#switch1').on('click', function() {
  $loginMsg.toggleClass("visibility");
  $frontbox.addClass("moving");
  $signupMsg.toggleClass("visibility");

  $signup.toggleClass('hide');
  $login.toggleClass('hide');
})

$('#switch2').on('click', function() {
  $loginMsg.toggleClass("visibility");
  $frontbox.removeClass("moving");
  $signupMsg.toggleClass("visibility");

  $signup.toggleClass('hide');
  $login.toggleClass('hide');
})

setTimeout(function(){
  $('#switch1').click()
},1000)

setTimeout(function(){
  $('#switch2').click()
},3000)
