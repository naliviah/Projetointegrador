function toggleTheme() {
    // Pega o corpo do documento
    const body = document.body;

    // Se o corpo já tiver a classe 'dark', remove-a, caso contrário, adiciona
    body.classList.toggle('dark-theme');
    
    // Alterando o texto do botão conforme o tema
    const button = document.getElementById("theme-toggle");
    if (body.classList.contains('dark-theme')) {
        button.textContent = "Mudar para Tema Claro";
    } else {
        button.textContent = "Mudar para Tema Escuro";
    }
}

// Exibindo uma mensagem de boas-vindas
window.onload = function () {
    alert("Bem-vindo ao site Química Orgânica no Prato! Explore as interações químicas que acontecem no preparo dos alimentos.");
};