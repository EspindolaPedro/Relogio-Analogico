let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hELement = document.querySelector(".p_h");

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    function fixZero(time) {
        return time < 10 ? `0${time}`: time;
    }


    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`

    let mDeg = ((360/60) * minute) - 90;
    mElement.style.transform = `rotate(${mDeg}deg)`

    let hDeg = ((360/12) * hour) - 90;
    hELement.style.transform = `rotate(${hDeg}deg)`

}

setInterval(updateClock,1000);
updateClock();