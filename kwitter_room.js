var firebaseConfig = {
      apiKey: "AIzaSyB2EIpuM1btRPB90AqtWj9Fdhyks5f8p-c",
      authDomain: "class-67466.firebaseapp.com",
      databaseURL: "https://class-67466-default-rtdb.firebaseio.com",
      projectId: "class-67466",
      storageBucket: "class-67466.appspot.com",
      messagingSenderId: "694863079648",
      appId: "1:694863079648:web:bc41d67baaf100b39cc885"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name;
function addROOM()
{
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "addingROOMNAME"

      });
      window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomNAME" + Room_names);
row="<div class='room_name'id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
