//let ? = prompt('Приветсвуем вас!');


alert('Новое задание')

let byebye_world = prompt('Введите число от -∞ до ∞')
let answer = (byebye_world == '0') ? '0' : (byebye_world < 0) ? '-1': '1';
alert(answer)

alert('Новое задание')

let a = Number(prompt('a'))
let b = Number(prompt('b'))
let result  = ((a+b)<4) ? 'мало' : 'много';
alert(result)
alert('Новое задание')

let age = prompt('Сколько вам лет?')
if (age > 13 && 91 > age) {
    alert('!')
}
if (! age < 13 && 91 > age) {
    alert('!')
}
alert('Новое задание')

let what = prompt('Кто вы?')
if (what == 'Админ') {
    let what2 = prompt('Пароль?')
    if (what2 == 'Я Главный') {
        alert('Добро пожаловать!')
    }
    else if (what2 == null) {
        alert('Отменено')
    }
    else {
        alert('Неверный пароль')
    }
}
else if (what == null) {
    alert('Отменено')
}
else {
    alert('Я вас не знаю')
}