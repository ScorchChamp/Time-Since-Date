window.addEventListener("load", function () {
const input = document.getElementById('date-input');
const output = document.getElementById('output');

numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


setInterval(() => {
    const inputDate = new Date(input.value);
    const currentDate = new Date();
    const timeDiff = currentDate - inputDate;

    const decenniaAgo = numberWithCommas(Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25 * 10)));
    const yearsAgo = numberWithCommas(Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25)));
    const monthsAgo = numberWithCommas(Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30)));
    const weeksAgo = numberWithCommas(Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7)));
    const daysAgo = numberWithCommas(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
    const hoursAgo = numberWithCommas(Math.floor(timeDiff / (1000 * 60 * 60)));
    const minutesAgo = numberWithCommas(Math.floor(timeDiff / (1000 * 60)));
    const secondsAgo = numberWithCommas(Math.floor(timeDiff / 1000));

    output.innerHTML = `
    <p><b>Decennia ago:</b> ${decenniaAgo}</p>
    <p><b>Years ago:</b> ${yearsAgo}</p>
    <p><b>Months ago:</b> ${monthsAgo}</p>
    <p><b>Weeks ago:</b> ${weeksAgo}</p>
    <p><b>Days ago:</b> ${daysAgo}</p>
    <p><b>Hours ago:</b> ${hoursAgo}</p>
    <p><b>Minutes ago:</b> ${minutesAgo}</p>
    <p><b>Seconds ago:</b> ${secondsAgo}</p>
  `;
}, 1000);
});
