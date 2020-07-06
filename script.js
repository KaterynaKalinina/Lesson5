/*function roar() {
    console.log('ROAR!');
}

function random() {
    console.log(Math.floor(Math.random() * 10));
}

roar();
random();
random();


const product = 'lime';

function cook() {
    console.log('Cook!', product);
}


const product = 'tangerine';

function cook() {
    const product = 'lime';
    (function () {
        const product = 'kiwi';
        console.log('Cook', product);
    })();
    console.log(product);
}

cook();
console.log(product);


function cook(product = 'lime') {
    console.log('Cook!', product);
}

cook();


function sum(a = 0,b = 0) {
    return a + b;
}

console.log(sum(1,2));

x

const random = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function sum(a = 0,b = 0) {
    return a + b + random(a, b);
}

console.log(random(sum(2, 10), sum(5, 10)));




function pow(n, p) {
    let value = n;
    if (p === 0) return 1;
    for (let i = 1; i < p; i++) {
        n *= value;
    }
    return n;
}

console.log(pow(2,3));

*/

const sum = (a, b) => a + b;