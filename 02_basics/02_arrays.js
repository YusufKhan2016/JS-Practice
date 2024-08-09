const marvel_heros = ["thor", "ironman","spiderman"];

const de_heros = ["superman","flash", "batman"];

marvel_heros.push(de_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(de_heros);
const all_new_heros =  [...de_heros,...marvel_heros];

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);

console.log(Array.from("Rafsun"));
console.log(Array.isArray(Array.from("Rafsun")));

const score1 = 23;
const score2 = 234;
const score3 = 34;
console.log(Array.of(score1,score2,score3));
