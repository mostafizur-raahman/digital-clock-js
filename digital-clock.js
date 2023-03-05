const digitalClock = () => {
    let date = new Date();
    let hours = date.getHours();
    hours = hourFormat(hours);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
    let time = hours + ":" + minutes + ":" + seconds;
    const showTime = document.querySelector('#date');
    showTime.innerHTML = time;
    // setInterval(() => {
    //     digitalClock();
    // }, 1000);
    setInterval(digitalClock, 1000);

}
const formatTime = (val) => {
    if (val < 10) {
        val = "0" + val;
    }
    return val;
}
const hourFormat = (hour) => {
    if (hour > 12) {
        hour -= 12;
        hour = '0' + hour;
    }
    return hour;
};