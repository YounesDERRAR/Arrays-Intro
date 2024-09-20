let arrayOfNumber = [
  1, 435, 37, 65, 86, 98, 70, 9, 80, 98, 43, 423, 43, 23, 5, 6, 5, 7, 87, 9, 25,
];
const evenNums = arrayOfNumber.filter((num) => num % 2 === 0);
console.log(evenNums);

let ficheDeRenseignement = {
  prenom: "",
  nom: "BOUALEM",
  age: 17,
  adresse: {
    residence: "Sider Bt 46 numero 40",
    ville: "Bab Ezzouar",
    pays: "Algerie",
  },
  contaddct: {
    email: "hamoud.boualem@gmail.com",
    phone: "0666666666",
  },
};
let Armee = [ficheDeRenseignement];
Armee.push({ service_militaire: "Recherché" });
if (ficheDeRenseignement.age > 30) {
  console.log(Armee); //// condition for over 30 yo
}
if (ficheDeRenseignement.age < 18) {
  Armee.pop(); //// stack exercice returning data without Service militaire
  console.log(Armee);
}

let filedattente = [];

for (let i = 0; i <= 10; i++) filedattente.push(i);

console.log(filedattente);
filedattente.shift();
console.log(filedattente);

let gazouz = "Hamoud BOUALEM";
let gazouzsansvoyelle = gazouz.replace(/[aeuioAEUIO]/g, ""); /// j'ai appris la nouvelle methode de /xxxx/g qui fait ensorte d'appliquer l'opération à toute la chaine de caractère "global"
console.log(gazouzsansvoyelle);

let comptescomptables = [411, 412, 404, 401, 512, 600, 700, 12, 11, 300];
let comptesrec = [419, 411, 215, 300, 11, 205];
const croisement = comptescomptables.filter(
  (comptes) => comptesrec.includes(comptes) /// filter array par rapport à another array, l'idée est que les deux contiennent "comptes" selon la syntaxe.
);
console.log(croisement);
