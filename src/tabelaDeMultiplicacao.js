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

function tabela(){
    let saida = 'linha [0] coluna [0]'
    let numeroMaior = arr[0][0];
     for (let linha = 0; linha <= arr.lenght; linha++) {
       let arrDentro = arr[linha].lenght
      
     for (let coluna = 0; coluna < arrDentro; coluna++) {
      if (numeroMaior < arr[linha][coluna]){
          numeroMaior = arr[linha][coluna];
          saida = 'linha [' + linha + '] coluna [' + coluna + ']'
         }
       } 
     }
     return saida; 
     
    }

const arr = [
   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
  [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
  [0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
  [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  [0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
 [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
];  
console.table(arr);