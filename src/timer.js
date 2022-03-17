function makeTimer() {
    // var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    // var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
    var endTime = new Date("20 April 2022 00:00:00");
    endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    // $("#days").html(days + '<span style="font-size:0.5em;">Days</span>');
    // $("#hours").html(hours + '<span style="font-size:0.5em;">Hours</span>');
    // $("#minutes").html(
    //   minutes + '<span  style="font-size:0.5em;">Minutes</span>'
    // );
    // $("#seconds").html(
    //   seconds + '<span style="font-size:0.5em;">Seconds</span>'
    // );
  }

  document.addEventListener('DOMContentLoaded', 
    function(){
      Typed.new('.entry', {
        strings: ["Are you trying to debug?", "Do you feel like giving up?"],
        typeSpeed: 1
      });
  });
  


  setInterval(function () {
    makeTimer();
  }, 1000);