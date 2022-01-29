// Teste sem tratamento para esperar a função assincrona acabar a execução ara o teste operar

// test('Não deveria passar!', () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

// Teste com o parametro done, que é uma callback proria da bibloiteca jest, que faz o teste esperar a função assincrona acabar a execução para operar o teste

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

// Teste com try/catch, enquanto o try tenta executar o codigo, o catch captura o erro e chama a função done()

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done();
//     }
//   }, 500);
// });

// teste com uma ação (error) passada para o done

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
});

///////////// exemplo 2

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b + 1;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});