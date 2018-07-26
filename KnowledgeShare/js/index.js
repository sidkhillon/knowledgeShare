// Get a reference to the database service
var database = firebase.database();
var urlParams = new URLSearchParams(window.location.search);
var today = new Date();
console.log(today.getMonth()+1);

var postIDs = [820207324182, 152733065472]

var userID = "";
var thisPost;
var returnedSnapshot;

var postID;
postIDs.forEach(function(item, index, array) {

    postID = item;

    console.log(postIDs)
    console.log(postID)
    thisPost = firebase.database().ref().child('posts/' + String(postID));
    returnedSnapshot = [];

    thisPost.on("value", function(snapshot){
    returnedSnapshot = snapshot.val();
    console.log(returnedSnapshot)
    updateDocument(returnedSnapshot);
    
    }, function (error){
        console.log("Error: " + error.code);
    });

});


function loadPost(postID){
    document.location.href = "http://localhost/knowledgeshare/templatetextonly.html?postID=" + postID;
}

function updateDocument(snapshot){



    document.getElementById(snapshot["topic"] + "Div").innerHTML = `<strong class="d-inline-block mb-2 text-primary">${capitalizeFirstLetter(snapshot["topic"])}</strong>
                        
                        <h3 class="mb-0">
                            <a class="text-dark">${snapshot["title"]}</a>
                        </h3>

                        <div class="mb-1 text-muted" id="dateWorld">${snapshot["date"]}</div>

                        <p class="card-text mb-auto limitTextLead" id="ledeWorld">${snapshot["lead"]}</p>

                        <button type="button" class="btn btn-primary" onclick="loadPost(${postID})" id="loadWorld">Continue Reading</button>`

/*
    document.getElementById("postTitle").innerHTML = snapshot["title"];
    document.getElementById("postAuthor").innerHTML = snapshot["author"];
    document.getElementById("postDate").innerHTML = snapshot["date"];
    document.getElementById("postVotes").innerHTML = snapshot["votes"];
    document.getElementById("postLead").innerHTML = snapshot["lead"];

    var postBody = snapshot["body"];
    postBody = postBody.replace(/(?:\r\n|\r|\n)/g, '<br>');
    document.getElementById("postBody").innerHTML = postBody;
*/
}



$("#fadeColumn fadeRow").each(function(i) {
    $(this).delay(100*i).fadeIn(500);
});

function formatLead(string){

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}