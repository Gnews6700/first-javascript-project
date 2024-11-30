let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("Time")

function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds )}` ;
}

function timer() {
    secondsElapsed++;
    setTime()
}

function startclock() {
    if (interval) resetclock()
    interval = setInterval(timer, 1000)
}

function stopclock() {
    clearInterval(interval)
}

function resetclock() {
    stopclock()
    secondsElapsed = 0;
    setTime()
}