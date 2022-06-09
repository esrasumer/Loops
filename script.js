// Loops

// for loops
let classNumber = 22;
for (let i = 0; i < 22; i++) {
    if (i == 3) {
        console.log('My favorite number is : ' + i);
        continue;
    }

    if (i == 6) {
        console.log('I hate this number : 6');

    }
    console.log(i);
}


// While Loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);}


// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);


let sonuc = 1;
for (let i = 10; i > 0; i--) {
    if (i % 2 == 0) {
        sonuc *= i;
    }
}

console.log(sonuc);