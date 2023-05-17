var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});


  
function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.display = "block";
    

    document.addEventListener("keydown", closeModalOnEsc);
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    

    document.removeEventListener("keydown", closeModalOnEsc);
  }
  
  function closeModalOnEsc(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
  

function validarFormulario(event) {

    event.preventDefault();
    
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("label-nome").value;
    var email = document.getElementById("label-email").value;
    var telefone = document.getElementById("label-telefone").value;
    var mensagem = document.getElementById("label-mensagem").value;
    
 
    if (nome.trim() === "") {
      exibirMensagemErro("Por favor, preencha o campo Nome.", "label-nome");
      return;
    }
    
    if (email.trim() === "") {
      exibirMensagemErro("Por favor, preencha o campo Email.", "label-email");
      return;
    }
    
    if (telefone.trim() === "") {
      exibirMensagemErro("Por favor, preencha o campo Telefone.", "label-telefone");
      return;
    }
    
    if (mensagem.trim() === "") {
      exibirMensagemErro("Por favor, preencha o campo Mensagem.", "label-mensagem");
      return;
    }
    

    event.target.submit();
  }
  

  function exibirMensagemErro(mensagem, campoId) {
    var campo = document.getElementById(campoId);
    var mensagemErro = document.createElement("span");
    mensagemErro.className = "mensagem-erro";
    mensagemErro.textContent = mensagem;
    

    var mensagemErroAnterior = campo.parentNode.querySelector(".mensagem-erro");
    if (mensagemErroAnterior) {
      campo.parentNode.removeChild(mensagemErroAnterior);
    }
    

    campo.parentNode.appendChild(mensagemErro);
  }
  

  document.querySelector("form").addEventListener("submit", validarFormulario);
  