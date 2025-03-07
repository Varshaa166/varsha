

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var userName = document.querySelector("#userName").value;
    var password = document.querySelector(".password").value;
    var conPass = document.querySelector(".conPass").value;
    var email = document.querySelector(".email").value;
    if(password === conPass){
        return null;
    }else{
        alert("Passwords do not match");
    }
    // console.log(userName);
    // console.log(password);
    // console.log(conPass);
    // console.log(email);
});

