// for (let i = 1; i < 100; i++) {
//     if (i % 3 == 0) {
//         console.log(i + "-3 ga bolinadi");
//     } else if (i % 5 == 0) {
//         console.log(i + "-5 ga bolinadi")
//     } else (i % 3 == 0) {
//         console.log(i + "-3 ga bolinmidi")
//     } else (i % 5 == 0) {
//         console.log(i + "-15 ga bolinmidi")
//     }
// }

let names = ["Abdulloh", "Behruz", "Abdulloh", "Xasan", "Xusan", "Shaxzod", "Asilbek", "Abduvahob"]
let withN = names.filter((e, i, arr) => e.includes("n"))
let withOutN = names.filter((e, i, arr) => e.includes<("n"))
console.log(withN, "ismida  n  harif bor insonlar");
console.log(withOutN, "ismida  n  harif yoq insonlar");


