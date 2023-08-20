
function getNama(){
    var name = document.getElementById("mynama").value;
    localStorage.setItem("nama", name);
    window.location.href = './index.html';
}

function timeoutData() {
    setTimeout(function(){
        window.location.href = "https://api.whatsapp.com/send/?phone=6281389768412";
    },82000)
}

