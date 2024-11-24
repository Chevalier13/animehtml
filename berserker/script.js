
function openTrailer(url) {
    window.open(url, "_blank");
}


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-message").innerText = "Mensagem enviada com sucesso!";
       
    } else {
        document.getElementById("form-message").innerText = "Por favor, preencha todos os campos.";
    }
});
