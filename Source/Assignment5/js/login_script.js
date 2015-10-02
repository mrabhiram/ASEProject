    $("#login").click(function() {
        localStorage.setItem("UserName", document.getElementById('username').value);
        localStorage.setItem("password", document.getElementById('password').value);
        window.location.href = "home.html";
    });