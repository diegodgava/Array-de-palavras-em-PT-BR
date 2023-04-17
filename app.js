const fs = require('fs');

// Lê o arquivo de texto com a lista de palavras
fs.readFile('todas_as_palavras.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  // Separa as palavras por quebra de linha e cria um array
  const arrayDePalavras = data.split('\n');

  // Filtra o array para criar um novo array com palavras que atendem aos critérios
  const palavrasFiltradas = arrayDePalavras.filter(palavra => {
// insira todos os filtros que desejar
    
  });

  // Cria um novo arquivo e escreve o novo array nele
  fs.writeFile('palavras_filtradas.js', `module.exports = ${JSON.stringify(palavrasFiltradas)};`, (err) => {
    if (err) throw err;
    console.log('O arquivo foi salvo com sucesso!');
  });
});

