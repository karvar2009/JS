/*let username = 'GreatR';

function sayHello() {
    // let username = 'Zodiac';
    username = 'Zodiac';

    let message = 'Hello, ' + username;
    alert(message)
}

function sendMessage(from, text='text is not found') {
    // text = text || 'text is not found';
    console.log(from + ': ' + text);
}

function checkMe(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('А вам разрешили?');
    }
}

/* let yourAge = prompt('Сколько вам лет? ')

if (checkMe(yourAge)) {
  console.log('Заходите');
} else {
  console.log('Доступ закрыт!')
}

function printNumbers(number) {
    nextNumber: for (let i = 2; i < number; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextNumber;
        }
        console.log(i);
    }
}
 Облегченная проверка "просто число или нет"
showPrimeNumber(15)

function showPrimeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true;
}

function show(id) {
    var read = document.getElementById('text').innerHTML;
    alert(read)
}*/

function showHidden(id) {
    let obj = document.getElementById(id);
    if (obj.style.display === 'none') {
        obj.style.display = '';
    }
    else{
        obj.style.display = 'none';
    }
}
