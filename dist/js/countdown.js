const virtualRace = Date.parse("2022-08-17T00:00:00.0008");
const physicalRace = Date.parse("2022-09-17T00:00:00.0008");

const mDay = 24 * 60 * 60 * 1000;
const mHour = 60 * 60 * 1000;
const mMin = 60 * 1000;
const mSec = 1000;

function subtractDates(p, f) {
    let diff = f - p;
    const d = Math.floor(diff / mDay);
    diff %= mDay;
    const h =  Math.floor(diff / mHour);
    diff %= mHour;
    const m = Math.floor(diff / mMin);
    diff %= mMin;
    const s = Math.floor(diff / mSec);
    let str = new String();
    return str.concat(d).concat("D ").concat(h).concat(":").concat(m).concat(":").concat(s);
}

const vTime = document.querySelector("#vtime");
const pTime = document.querySelector("#ptime");

function update() {
    let now = Date.now();
    vTime.innerHTML = subtractDates(now, virtualRace);
    pTime.innerHTML = subtractDates(now, physicalRace);
}

setInterval(update, 1000);
