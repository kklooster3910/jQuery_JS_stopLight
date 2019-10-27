// goal is to create a functional stop light using JavaScript and jQuery
// console.log($);
// var script = document.createElement('script');
// script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
class TrafficLight {
  constructor() {
    this.color = 'red';
    this.startFromRed = this.startFromRed.bind(this);
    this.startYellow = this.startYellow.bind(this);
    this.startGreen = this.startGreen.bind(this);
  }

  startFromRed () {
    // if (!this.color) return;
    if (this.color === 'green') {
      $('#green-bulb').css('background-color', '#111');
      $('#red-bulb').css('background-color', 'red');
      setTimeout(() => {
        this.startYellow();
      }, 4000);
    }
    if (this.color === 'red') {
      $('#red-bulb').css('background-color', 'red');
      setTimeout(() => {
        this.startYellow();
      } ,4000)
    }
  }

  startYellow () {
    // if (!this.color) return;
    $("#red-bulb").css("background-color", "#111");
    $("#yellow-bulb").css("background-color", "yellow");
    if (this.color === 'red') {
      this.color = 'yellow';
      setTimeout(() => {
        this.startGreen();
      },2000)
    }
  }

  startGreen() {
    // if (!this.color) return;
    $("#yellow-bulb").css("background-color", "#111");
    $("#green-bulb").css("background-color", "green");
    if (this.color === 'yellow') {
      this.color = 'green';
      setTimeout(() => {
        // console.log('stage three, work on switching back to red');
        // console.log(this);
        this.startFromRed();
      } ,6000)
    }
  }
  
}

const startItUp = () => {
  const trafficLight = new TrafficLight();
  trafficLight.startFromRed();
}

// const stopItUp = () => {
//   trafficLight.color = null;
// }

$(() => {
  const header = $("h1");
  // console.log(header);
  header.css("background-color", "red");
  header.css("color", "white");
  // console.log(header[0].innerHTML + 'fuck');
  header[0].innerHTML = header[0].innerHTML + "-" + "On a Timer Boi";

  $(
    "<p id='timer-rules'>Timer Rules (4 seconds Red) (2 Seconds Yellow) (6 Seconds Green)</p>"
  ).appendTo("body");

  const timerRules = $("#timer-rules");
  // console.log(timerRules.innerHTML);
  timerRules.css("font-size", "23px");
  timerRules.css("color", "red");

  $("<div class='stop-light'></div>").appendTo("body");
  // const trafficLight = $('stop-light');
  // console.log(trafficLight);
  $("<div id='red-bulb' class='bulb'></div>").appendTo(".stop-light");
  $("<div id='yellow-bulb' class='bulb'></div>").appendTo(".stop-light");
  $("<div id='green-bulb' class='bulb'></div>").appendTo(".stop-light");

  $(
    "<button id='start-button' class='button' onclick='startItUp()'>Start Da Light Up</button>"
  ).appendTo("body");
  // $(
  //   "<button id='stop-button' class='button' onclick='stopItUp()'>Stop Da Light</button>"
  // ).appendTo("body");

});
