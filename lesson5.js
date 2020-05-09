n=0
function EditText(id, text) {
    document.getElementById(id).innerHTML=text;
}
function EditImage(id, img) {
    document.getElementById(id).src=img
}

function EditSize(id) {
    if (n==0) {
        document.getElementById(id).style.fontSize='5px';
        document.getElementById('myButton').innerHTML='увеличить';
        n = -1
    }
    else {
        document.getElementById(id).style.fontSize='50px';
        document.getElementById('myButton').innerHTML='уменьшить';
        n = 0
    }

}






function GetDate() {
    document.getElementById('date').innerHTML = Date()
}