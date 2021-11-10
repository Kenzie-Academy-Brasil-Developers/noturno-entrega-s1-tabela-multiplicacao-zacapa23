
function tabela(n) {
  let multiplicacao = []


  for (let linha = 0; linha <= n; linha++) {
    multiplicacao.push([]);
    for (let coluna = 0; coluna <= n; coluna++) {
      multiplicacao[linha].push(linha * coluna);
    }

  }
  console.table(multiplicacao);
}
tabela(10);

/* function nomeDaFuncao() {
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let multiplicacao = [];
    for (let i = 0; i <= 10; i++) {
        for (let i2 = 1)
        multiplicacao[i] = [];
    }
    console.table(multiplicacao)
} */
