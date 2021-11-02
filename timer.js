// Get actual timezone and date.
var d = new Date();
var n = d.getTime();
console.log(d);

// Set a valid end date from users timezone for the countdown.
var deadline = 'November 25 2021 00:00:01 GMT+0100';

// Calculate the time remaining.
function getTimeRemaining(endtime) {
    // Get the actual time and hold it. Converts a time string into a value in milliseconds.
    var t = Date.parse(endtime) - Date.parse(new Date());
    // Convert the time to a usable format.
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    // Output the clock data as a reusable object.
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
// Output the clock data inside the div "clockdiv".
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = ('0' + t.days).slice(-2);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
            alert("Geh heim!");
        }
    }

    // Update clock every second.
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// Start the function and output countdown clock values in depence of the deadline.
initializeClock('clockdiv', deadline);