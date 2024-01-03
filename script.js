document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Coletar dados do formulário
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });

    // Adicionar a lógica para se conectar ao SheetDB.io
    fetch('https://sheetdb.io/api/v1/z4r2h3e7afoxo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

            // Exibir mensagem de sucesso
            document.getElementById('successMessage').style.display = 'block';

            // Limpar o formulário
            document.getElementById('registrationForm').reset();

            // Adicione aqui qualquer lógica adicional após a submissão bem-sucedida
        })
        .catch((error) => {
            console.error('Error:', error);
            // Adicione aqui qualquer lógica adicional em caso de erro
        });
});

document.addEventListener('DOMContentLoaded', function () {
    // Adicione a máscara ao campo de telefone
    $('#telefone').inputmask('99 9 9999-9999');
});
