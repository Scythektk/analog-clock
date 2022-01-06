setInterval(()=>{
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var hoursDegrees = (hours*30)+(minutes/2);
    var minutesDegrees = minutes*6;
    var secondsDegrees = seconds*6;

    var hoursHand = document.querySelector(".hours-hand");
    var minutesHand = document.querySelector(".minutes-hand");
    var secondsHand = document.querySelector(".seconds-hand");

    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}, 1000);