 setInterval(function() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (now.getHours() < 12) {
    document.getElementById("xm").innerText = "AM";
  } else {
    document.getElementById("xm").innerText = "PM";
  }

  const div = document.querySelector('#crtimg');
  
if (hours >= 10 && hours < 12 && now.getHours() < 12) {
  document.getElementById("bfremind-text").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
  div.style.backgroundImage = 'url(./Component\ 30\ –\ 1.svg)';
} else if (hours >= 12 && hours < 4 && now.getHours() > 12) {
  document.getElementById("bfremind-text").innerText = "LET'S HAVE SOME LUNCH !!";
  div.style.backgroundImage = 'url(./Component 31 – 1.svg)';
} else if (hours >= 4 && hours < 8 && now.getHours() > 12) {
  document.getElementById("bfremind-text").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  div.style.backgroundImage = 'url(./lunch_image.png)';
} else if (hours >= 8 && now.getHours() > 12) {
  document.getElementById("bfremind-text").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
  div.style.backgroundImage = 'url(./sleepimg.svg)';
} else if (hours >= 12 && now.getHours() < 12) {
  document.getElementById("bfremind-text").innerText = "Good Morning !!";
  div.style.backgroundImage = 'url(./Component\ 30\ –\ 1.svg)';
} else {
  document.getElementById("bfremind-text").innerText = "Time is Money";
  div.style.backgroundImage = 'url(./Component\ 30\ –\ 1.svg)';
}

}, 1000);

function displaySetTimeBox() {

  var wakeTimeValue = document.getElementById("wake-time").value;
  var lunchTimeValue = document.getElementById("lunch-time").value;
  var napTimeValue = document.getElementById("nap-time").value;
  var nightTimeValue = document.getElementById("night-time").value;

  document.getElementById("wake-time-value").textContent = wakeTimeValue;
  document.getElementById("lunch-time-value").textContent = lunchTimeValue;
  document.getElementById("nap-time-value").textContent = napTimeValue;
  document.getElementById("night-time-value").textContent = nightTimeValue;
  
  document.getElementById("set-time-box").style.display = "block";

  const setTimeBox = document.getElementById("set-time-box");

  const crtImg = document.getElementById("crtimg");

  if (wakeTimeValue !== "Default") {
    if (lunchTimeValue !== "Default") {
      if (napTimeValue !== "Default") {
        if (nightTimeValue !== "Default") {
          document.getElementById("crtimg").style.backgroundImage = "url('sleepimg.svg')";
        } else {
          document.getElementById("crtimg").style.backgroundImage = "url('lunch_image.png')";
        }
      } else {
        document.getElementById("crtimg").style.backgroundImage = "url('Component 31 – 1.svg')";
      }
    } else {
      document.getElementById("crtimg").style.backgroundImage = "url('Component 30 – 1.svg')";
    }
  }

    // const timeEl = document.querySelector(".time-el");
    // timeEl.style.display = "none";

    if (window.innerWidth >= 746 && window.innerWidth <= 1451) {
      document.querySelector('#set-time-box').style.display = 'block';
      document.querySelector('.time-el').style.visibility= 'hidden';;
    }
  else if (window.innerWidth >= 1451) {
    document.querySelector('#set-time-box').style.display = 'block';
    document.querySelector('.time-el').style.marginTop = '-190px';
  }
}





