// Get a reference to the database service
var database = firebase.database();
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get("postID"));

var postID = urlParams.get("postID");

var thisPost = firebase.database().ref().child('posts/' + postID);
var returnedSnapshot = [];

thisPost.on("value", function(snapshot){
    returnedSnapshot = snapshot.val();
    console.log(returnedSnapshot)
    updateDocument(returnedSnapshot);
    
}, function (error){
    console.log("Error: " + error.code);
});



function updateDocument(snapshot){
    document.getElementById("postTitle").innerHTML = snapshot["title"];
    document.getElementById("postAuthor").innerHTML = snapshot["author"];
    document.getElementById("postDate").innerHTML = snapshot["date"];
    document.getElementById("postVotes").innerHTML = snapshot["votes"];
    document.getElementById("postLead").innerHTML = snapshot["lead"];
    var postBody = snapshot["body"];
    postBody = postBody.replace(/(?:\r\n|\r|\n)/g, '<br>');
    document.getElementById("postBody").innerHTML = postBody;
}
