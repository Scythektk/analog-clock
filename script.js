var hoursDigital = document.querySelector(".digital-hours");
var minutesDigital = document.querySelector(".digital-minutes");
var secondsDigital = document.querySelector(".digital-seconds");

var hoursHand = document.querySelector(".hours-hand");
var minutesHand = document.querySelector(".minutes-hand");
var secondsHand = document.querySelector(".seconds-hand");

setInterval(()=>{
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var hoursDegrees = (hours*30)+(minutes/2);
    var minutesDegrees = minutes*6;
    var secondsDegrees = seconds*6;

    hoursDigital = document.querySelector(".digital-hours");
    minutesDigital = document.querySelector(".digital-minutes");
    secondsDigital = document.querySelector(".digital-seconds");

    hoursHand = document.querySelector(".hours-hand");
    minutesHand = document.querySelector(".minutes-hand");
    secondsHand = document.querySelector(".seconds-hand");

    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    hoursDigital.innerHTML = hours.toString().padStart(2, '0');
    minutesDigital.innerHTML = minutes.toString().padStart(2, '0');
    secondsDigital.innerHTML = seconds.toString().padStart(2, '0');
}, 1000);

window.onload = () => {document.getElementById("hours-hand").addEventListener("mouseover", function() {
    document.getElementById("digital-hours").style.fontSize = "4vw";
    document.getElementById("digital-minutes").style.opacity = "0.5";
    document.getElementById("digital-seconds").style.opacity = "0.5";
    document.getElementsByClassName("colon")[0].style.opacity = "0.5";
    document.getElementsByClassName("colon")[1].style.opacity = "0.5";
    document.getElementById("digital-hours").style.transitionDuration = "0.4s";
});
document.getElementById("hours-hand").addEventListener("mouseleave", function() {
    document.getElementById("digital-hours").style.fontSize = "3vw";
    document.getElementById("digital-minutes").style.opacity = "1";
    document.getElementById("digital-seconds").style.opacity = "1";
    document.getElementsByClassName("colon")[0].style.opacity = "1";
    document.getElementsByClassName("colon")[1].style.opacity = "1";
    document.getElementById("digital-hours").style.transitionDuration = "0.2s";
});
document.getElementById("minutes-hand").addEventListener("mouseover", function() {
    document.getElementById("digital-minutes").style.fontSize = "4vw";
    document.getElementById("digital-hours").style.opacity = "0.5";
    document.getElementById("digital-seconds").style.opacity = "0.5";
    document.getElementsByClassName("colon")[0].style.opacity = "0.5";
    document.getElementsByClassName("colon")[1].style.opacity = "0.5";
    document.getElementById("digital-minutes").style.transitionDuration = "0.4s";
});
document.getElementById("minutes-hand").addEventListener("mouseleave", function() {
    document.getElementById("digital-minutes").style.fontSize = "3vw";
    document.getElementsByClassName("colon")[0].style.opacity = "1";
    document.getElementsByClassName("colon")[1].style.opacity = "1";
    document.getElementById("digital-hours").style.opacity = "1";
    document.getElementById("digital-seconds").style.opacity = "1";
    document.getElementById("digital-minutes").style.transitionDuration = "0.2s";
});
document.getElementById("seconds-hand").addEventListener("mouseover", function() {
    document.getElementById("digital-seconds").style.fontSize = "4vw";
    document.getElementById("digital-hours").style.opacity = "0.5";
    document.getElementById("digital-minutes").style.opacity = "0.5";
    document.getElementsByClassName("colon")[0].style.opacity = "0.5";
    document.getElementsByClassName("colon")[1].style.opacity = "0.5";
    document.getElementById("digital-seconds").style.transitionDuration = "0.4s";
});
document.getElementById("seconds-hand").addEventListener("mouseleave", function() {
    document.getElementById("digital-seconds").style.fontSize = "3vw";
    document.getElementsByClassName("colon")[0].style.opacity = "1";
    document.getElementsByClassName("colon")[1].style.opacity = "1";
    document.getElementById("digital-hours").style.opacity = "1";
    document.getElementById("digital-minutes").style.opacity = "1";
    document.getElementById("digital-seconds").style.transitionDuration = "0.2s";
});
};