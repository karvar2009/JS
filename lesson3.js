
alert('задание №1')
for (var i=2; true ; i++) {
    var y = i ** 2
    alert(y)
    if (y > 9999) {
        break
    }
}

alert('задание №2')
var i=2
while (true) {
    var y = i ** 2
    alert(y)
    i++
    if (y > 9999) {
        break
    }
}

alert('задание №3')
for (var i=2; i < 11 ; i = i+2) {
    alert(i)
}


alert('задание №4')
while (true) {
    let x = Number(prompt('Введите число больше 100'))
    if (x > 100 || x == ""){
        break
    }
}