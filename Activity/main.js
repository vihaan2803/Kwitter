var firebaseConfig = {
    apiKey: "AIzaSyCwwnxbWighgj6Knqlf2xDsw8CLYxiXTYU",
    authDomain: "kwitter2-34d1f.firebaseapp.com",
    projectId: "kwitter2-34d1f",
    storageBucket: "kwitter2-34d1f.appspot.com",
    messagingSenderId: "583147698042",
    appId: "1:583147698042:web:6ce2a0056a8395379448c3",
    measurementId: "G-TFMGX5XGBR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    un = document.getElementById("u_n").value;
    firebase.database().ref("/").child(un).update({
        purpose: "adding user"
    });
}