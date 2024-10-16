const nomes = ["Gabriel", "Rafaela", "Bruno", "Ana", "Lucas", "Carla"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
