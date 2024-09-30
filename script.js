// Seleção de elementos
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("dataForm");
const tableContainer = document.getElementById("tableContainer");
const tableBody = document.querySelector("#dataTable tbody");

// Abrir o modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Fechar o modal ao clicar no botão "Sair"
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal ao clicar no botão de fechar (x)
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Manipular o envio do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Previne o comportamento padrão de enviar o formulário

    // Obter os valores do formulário
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const profissao = document.getElementById("profissao").value;

    // Adicionar uma nova linha na tabela com os dados do formulário
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = nome;
    newRow.insertCell(1).textContent = sobrenome;
    newRow.insertCell(2).textContent = profissao;

    // Exibir a tabela
    tableContainer.style.display = "block";

    // Limpar o formulário para a próxima inserção
    form.reset();
});
