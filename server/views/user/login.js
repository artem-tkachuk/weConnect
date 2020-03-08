$(document).ready(function() {

$('#signout').hide()

$('#signup').click(function(e) {
  e.preventDefault()
  signup()
})


$('#signin').click(function(e) {
  e.preventDefault()
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

  const auth=firebase.auth()


  function signup(){
    var name=$('#name').val();
    var email=$('#email2').val();    
    var password=$('#password2').val();

const promise= auth.createUserWithEmailAndPassword(email,password)


promise.catch(error=>{
  if(error){
    alert(error.message)
  }else{
    alert('signedin')

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
