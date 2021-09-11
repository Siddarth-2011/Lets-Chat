const firebaseConfig = {
      apiKey: "AIzaSyDb7712fV9EDE6qjrZi1grxh9a-gE07W6g",
      authDomain: "lets-chat-sid.firebaseapp.com",
      databaseURL: "https://lets-chat-sid-default-rtdb.firebaseio.com",
      projectId: "lets-chat-sid",
      storageBucket: "lets-chat-sid.appspot.com",
      messagingSenderId: "681781745928",
      appId: "1:681781745928:web:7817ac35e459fa69c774bd"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html"
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}