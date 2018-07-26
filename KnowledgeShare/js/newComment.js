// Get a reference to the database service
var database = firebase.database();

var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get("postID"));

var postID = urlParams.get("postID");

var commentID = Math.floor(100000000000 + Math.random() * 900000000000)
var thisComment = firebase.database().ref().child(('posts/' + postID + "/comments/")+commentID);
var user;

function newComment(){
    if (username){
        var author = username;
    } else {
        loginGoogle();
        var author = username;
    }

    var today = new Date();
    console.log(today.getMonth()+1);
    var day = (String(today.getMonth()+1))+"-"+today.getDate()+"-"+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = time+' '+day;
    var dateString = date.toString();
    window.alert(date);
    var body = document.getElementById("inputComment").value;
    thisComment.set({
        author: author,
        date: dateString,
        body: body,
        votes: 0,
        replies: null
    });
    
    
    document.location.href = "http://localhost/knowledgeshare/templatetextonly.html?postID=" + postID;

}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('commentPost').onclick = newComment
})