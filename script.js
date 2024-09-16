// function teskari(input) {
//     if (typeof input != "string") input += "";
//     let natija = "";
//     for (let i = input.length - 1; i >= 0; i--) {
//         natija += input[i];
//     }
//     console.log(natija);
// } 

// teskari("olma");
// teskari("madagaskar");
// teskari(12345);

const students = ["Daler", "Samar", "Amin", "Amir", "Saidali", "Usmon", "Aziz",];

for (let i = students.length - 1; i >= 0; i--) {
console.log("**" + students[i] + "**");
}