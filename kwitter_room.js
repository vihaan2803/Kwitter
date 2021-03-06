//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAtZHeFEgZMPQb5hUYj6hVYlzaZo8u3J6I",
      authDomain: "kwitter-1b507.firebaseapp.com",
      databaseURL: "https://kwitter-1b507-default-rtdb.firebaseio.com",
      projectId: "kwitter-1b507",
      storageBucket: "kwitter-1b507.appspot.com",
      messagingSenderId: "363514252491",
      appId: "1:363514252491:web:1ef9eaa698fffe2b68df4e",
      measurementId: "G-J2QG4EVLWW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      var room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  room_names = childKey;
                  //Start code
                  console.log("room_name- " + room_name);
                  row="<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)'>#"+room_name+" </div> <hr>";
                  function redirectToRoomName(name){
                   console.log(name);
                   localStorage.setItem("room_name",name);
                   window.location="kwitter_page.html";
                  }
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html.html";
    }
    function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
    }