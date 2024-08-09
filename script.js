// script.js

// Exemplo de interatividade simples
document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Mostrar Mais';
    button.addEventListener('click', function() {
        const maisOportunidades = document.createElement('ul');
        maisOportunidades.innerHTML = `
            <li>Manejo de recursos hídricos</li>
            <li>Marketing rural</li>
            <li>Agroecologia</li>
        `;
        document.getElementById('oportunidades').appendChild(maisOportunidades);
        button.style.display = 'none'; // Esconde o botão após clicar
    });
    document.getElementById('oportunidades').appendChild(button);
});
