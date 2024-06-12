let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

const weekdays = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
];

const months = [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień",
];

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function updateClock() {
    let now = new Date();
    let weekday = weekdays[now.getDay()];
    let month = months[now.getMonth()];
    let date = now.getDate();
    let hours = formatTime(now.getHours());
    let minutes = formatTime(now.getMinutes());
    let seconds = formatTime(now.getSeconds());

    dateContainer.innerHTML = `<p style="text-transform: capitalize">${weekday}</p><p><span>${date}</span></p><p>${month}</p>`;
    hoursContainer.innerHTML = hours + ":";
    minutesContainer.innerHTML = minutes + ":";
    secondsContainer.innerHTML = seconds;
}

setInterval(updateClock, 1000);
