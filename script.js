const chk = document.getElementById('chk');
const swtCheckbox = document.getElementById('swt');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

swtCheckbox.addEventListener('change', () => {
    // Verifica se o checkbox está marcado
    var isChecked = swtCheckbox.checked;

    // Determina qual arquivo deve ser carregado com base no estado do checkbox
    var newFileName = isChecked ? "index.html" : "index-pt.html";
    //Neste caso temos o Arquivo html em português efetuando a transição para o arquivo html em Inglês

    // Atualiza a localização para o novo arquivo
    window.location.href = newFileName;
});