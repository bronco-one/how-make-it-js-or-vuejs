const hourT = document.getElementById('h');
const minuteT = document.getElementById('m');
const secondT = document.getElementById('s');
const numberT = document.getElementById('number');
const apT = document.getElementById('ap');


function clock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
}