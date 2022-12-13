function login()
{
    user_name  = document.getElementById("userInput").value;
    localStorage.setItem("userName" , user_name);
    window.location="kwitter_room.html";


}