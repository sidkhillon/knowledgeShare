// Get a reference to the database service
var database = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();

var user;

function loginGoogle(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log(user);
      console.log(user.uid);
      console.log(user.displayName);

      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        console.log(user.uid);
        userID = user.uid;
        username = user.displayName
    }
});

console.log(user)