// Get a reference to the database service
var database = firebase.database();
var postID = Math.floor(100000000000 + Math.random() * 900000000000)
var thisPost = firebase.database().ref().child('posts/' + postID);
var user;
function newPost(){
    var title = document.getElementById("inputTitle").value;

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
    var lead = document.getElementById("inputLead").value;
    var body = document.getElementById("inputBody").value;
    var topic = document.getElementById("inputTopic").value;
    thisPost.set({
        title: title,
        author: author,
        date: dateString,
        lead: lead,
        body: body,
        votes: 0,
        topic: topic,
        comments: "placeholder"
    });
    
    window.alert(postID);
    
    document.location.href = "http://localhost/knowledgeshare/templatetextonly.html?postID=" + postID;

}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('randomid').onclick = newPost
})