const virtualRace = Date.parse("2022-08-17T00:00:00.0008");
const physicalRace = Date.parse("2022-09-17T00:00:00.0008");

const mDay = 24 * 60 * 60 * 1000;
const mHour = 60 * 60 * 1000;
const mMin = 60 * 1000;
const mSec = 1000;

function subtractDates(p, f) {
    let diff = f - p;
    const d = new String(Math.floor(diff / mDay)).padStart(2, '0');
    diff %= mDay;
    const h = new String(Math.floor(diff / mHour)).padStart(2, '0');
    diff %= mHour;
    const m = new String(Math.floor(diff / mMin)).padStart(2, '0');
    diff %= mMin;
    const s = new String(Math.floor(diff / mSec)).padStart(2, '0');
    let str = new String();
    return [`${d}:`, `${h}:`, `${m}:`, s];
}

function insert4cells(tr, cells) {
    tr.childNodes[1].innerHTML = cells[0];
    tr.childNodes[2].innerHTML = cells[1];
    tr.childNodes[3].innerHTML = cells[2];
    tr.childNodes[4].innerHTML = cells[3];
}

const vTime = document.querySelector("#vtime");
const pTime = document.querySelector("#ptime");
const vTime2 = document.querySelector("#vtime2");
const pTime2 = document.querySelector("#ptime2");

function update() {
    let now = Date.now();
    // insert4cells(vTime,subtractDates(now, virtualRace));
    // insert4cells(pTime,subtractDates(now, physicalRace));
    insert4cells(vTime2,subtractDates(now, virtualRace));
    insert4cells(pTime2,subtractDates(now, physicalRace));
}

setInterval(update, 1000);
