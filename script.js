// Função principal para processar os salgadinhos
function processSnacks(input) {
    // Converter a string de entrada em um array de números
    const snacksArray = input.split(',').map(item => parseInt(item.trim(), 10));

    // Remover duplicatas e ordenar em ordem crescente
    const uniqueSnacks = [...new Set(snacksArray)].sort((a, b) => a - b);

    return uniqueSnacks;
}

// Função para exibir o resultado na página
function displayResult(result) {
    const resultOutput = document.getElementById('result-output');
    resultOutput.innerHTML = `[${result.join(', ')}]`;
}

// Função para limpar os campos
function resetFields() {
    document.getElementById('snacks-input').value = '';
    document.getElementById('result-output').innerHTML = '';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const detectBtn = document.getElementById('detect-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Botão DETECTAR
    detectBtn.addEventListener('click', () => {
        const input = document.getElementById('snacks-input').value;

        // Validar entrada
        if (!input.trim()) {
            alert('Por favor, insira os salgadinhos coletados!');
            return;
        }

        try {
            const result = processSnacks(input);
            displayResult(result);
        } catch (error) {
            alert('Entrada inválida! Por favor, insira números separados por vírgula.');
            console.error(error);
        }
    });

    // Botão RETORNAR
    resetBtn.addEventListener('click', resetFields);

    // Permitir submissão com Enter
    document.getElementById('snacks-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            detectBtn.click();
        }
    });
});