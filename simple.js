setInterval(showCurrentTime, 1000);
function showCurrentTime() {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = hours >= 12 ? "AM" : "PM";

    if (hours >= 12)
    {
        meridian = "PM";
    }

    if (hours == 0)
    {
        hours = hours - 12;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;

    document.getElementById('clock').innerHTML = clockTime;

};
showCurrentTime();