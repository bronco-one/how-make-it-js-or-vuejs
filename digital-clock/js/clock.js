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

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    hourT.innerHTML = hour;
    minuteT.innerHTML = minute;
    secondT.innerHTML = second;

    apT.innerHTML = ap;

    setTimeout(
        () => { clock(); }, 1000
    )
}

clock();