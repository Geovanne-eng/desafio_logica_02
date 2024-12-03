// Função para calcular o saldo de partidas e o nível do jogador
function calcularSaldoERank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas; // Calcula o saldo de vitórias
    let nivel;

    // Determina o nível baseado no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibe a mensagem de saída
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível ${nivel}.`);
    return { saldoVitorias, nivel }; // Retorna os valores se necessário
}

// Teste da função com valores de exemplo
const vitorias = 45;
const derrotas = 10;
calcularSaldoERank(vitorias, derrotas);
