const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// typeof será retornado uma string
// const a3 = a1 + a2;

// Utilizando o método concat
// const a3 = a1.concat(a2);

// Utilizando operador rest[...] ou spread[...]
// Nesse caso utilizamos o spread
const a3 = [...a1, ...a2, ...[7, 8, 9], 'Anderson'];



console.log(a3);