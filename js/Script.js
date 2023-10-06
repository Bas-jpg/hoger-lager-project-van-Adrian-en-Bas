// prompt for the name of Player 1
const button1 = document.querySelector(".Speler1");
const owntext = document.querySelector(".owntext");
let promptname = prompt("geef je naam!");
if (promptname != null);
owntext.textContent = promptname;

//Result
let results = {
  player1: 0,
  player2: 0,
};

//Disable buttons on page load
function welcomeFunction() {
  btn3.disabled = true;
  btn4.disabled = true;
  }


//dobbelsound Array
const audioArray = ["Sound/dice-1.mp3", "Sound/dice-2.mp3", "Sound/dice-3.mp3"];
function playRandomAudio() {
  const audioIndex = Math.floor(Math.random() * audioArray.length);
  const audio = new Audio(audioArray[audioIndex]);
  audio.play();
}

//Result Sound
let sound = new Audio("Sound/switch-sound.mp3");
let Winsound = new Audio("Sound/yippee.mp3");
let Losesound = new Audio("Sound/dark-souls-you-died.mp3");

//Buttons to enable/disable
const btn1 = document.querySelector(".btn1");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

//dice with functions
function throwdice(player) {
  let result = Math.floor(Math.random() * 20) + 1;
  const FirstDiceImage = "IMG/Number" + result + ".png";
  const SecondDiceImage = "IMG/Number" + result + ".png";
  if (player === 1) {
    results.player1 = result;
    playRandomAudio();
    document.getElementById("result1").innerHTML = "Speler 1: " + result;
    document.querySelectorAll("img")[0].setAttribute("src", FirstDiceImage);
    btn1.disabled = true;
    btn3.disabled = false;
    btn4.disabled = false;
  } else if (player === 2) {
    results.player2 = result;
    document.getElementById("result2").innerHTML = "Speler 2: " + result;
    document.querySelectorAll("img")[1].setAttribute("src", SecondDiceImage);
    btn1.disabled = true;
    btn3.disabled = false;
    btn4.disabled = false;
  }
}

//credit system
let counterDisplayElem = document.querySelector(".counter-display");
let credit = 0;

//result of higher
function higherresult() {
  let higher = "";
  

  if (results.player1 > results.player2) {
    higher = Swal.fire({
      text: "Speler 1 heeft gewonnen!",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      backdrop: `
      rgba(0,100,0,0.3)
      `
    });
    btn1.disabled = false;
    btn3.disabled = true;
    btn4.disabled = true;
    sound.play();
    credit++;
    updatedisplay();
    CounterResultWin();
    function updatedisplay() {
      counterDisplayElem.innerHTML = credit;
    }
  } else if (results.player1 < results.player2) {
    higher = Swal.fire({
      text: "Speler 2 heeft gewonnen!",
      icon: "error",
      timer: 3000,
      timerProgressBar: true,
      backdrop: `
      rgba(100,0,0,0.3)
      `
    });
    btn1.disabled = false;
    btn3.disabled = true;
    btn4.disabled = true;
    sound.play();
    credit--;
    updatedisplay();
    CounterResultLose();
    function updatedisplay() {
      counterDisplayElem.innerHTML = credit;
    }
  } else {
    higher = Swal.fire({
      text: "Het is gelijkspel!",
      icon: "info",
      timer: 3000,
      timerProgressBar: true,
      backdrop: `
      rgba(0,0,100,0.3)
      `
    });
    btn1.disabled = false;
    btn3.disabled = true;
    btn4.disabled = true;
    sound.play();
  }
  document.getElementById("hoger").innerHTML = higher;
}

//result when lower
function lowerresult() {
  let lower = "";

  if (results.player1 < results.player2) {
    lower = Swal.fire({
      text: "Speler 1 heeft gewonnen!",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
         backdrop: `
      rgba(0,100,0,0.3)
      `
    });
    btn1.disabled = false;
    btn3.disabled = true;
    btn4.disabled = true;
    sound.play();
    credit++;
    updatedisplay();
    CounterResultWin();
    function updatedisplay() {
      counterDisplayElem.innerHTML = credit;
    }
  } else if (results.player1 > results.player2) {
    lower = Swal.fire({
      text: "Speler 2 heeft gewonnen!",
      icon: "error",
      timer: 3000,
      timerProgressBar: true,
      backdrop: `
      rgba(100,0,0,0.3)
      `
    });
    btn1.disabled = false;
    btn3.disabled = true;
    btn4.disabled = true;
    sound.play();
    credit--;
    updatedisplay();
    CounterResultLose();
    function updatedisplay() {
      counterDisplayElem.innerHTML = credit;
    }
  } else {
    lower = Swal.fire({
      text: "Het is gelijkspel!",
      icon: "info",
      timer: 3000,
      timerProgressBar: true,
         backdrop: `
      rgba(0,0,100,0.3)
      `
    });
    btn1.disabled = false;
    btn3.disabled = true;
    btn4.disabled = true;
    sound.play();
  }
  document.getElementById("lager").innerHTML = lower;
}

//Win and Lose alert
function CounterResultWin() {
  if (credit === 10) {
    setTimeout(function(){
      location.reload();
  }, 10000);
  btn1.disabled = true;
    Swal.fire({
      title: "Je hebt Hoger/Lager gewonnen",
      text: "het spel zal nu gereset worden zodat je nog een keer kan spelen",
      icon: "success",
    });
    Winsound.play();
    }
  } 
  function CounterResultLose() {
    if (credit === -5) {
      setTimeout(function(){
        location.reload();
    }, 10000);
    btn1.disabled = true;
      Swal.fire({
        title: "Je hebt Hoger/Lager verloren",
        text: "het spel zal nu gereset worden zodat je nog een keer kan spelen",
        icon: "error",
      })
      Losesound.play();
      }
    }


// The FPS counter for the META players, it checks how many frames you got.
let fps = document.getElementById("fps");
let startTime = Date.now();
let frame = 0;

function tick() {
  let time = Date.now();
  frame++;
  if (time - startTime > 1000) {
    fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
    startTime = time;
    frame = 0;
  }
  window.requestAnimationFrame(tick);
}
tick();


class Accordion {
  constructor(el) {
    // Store the <details> element
    this.el = el;
    
    this.summary = el.querySelector("summary");
    
    this.content = el.querySelector(".content");

    // Store the animation object (so we can cancel it if needed)
    this.animation = null;
    
    this.isClosing = false;
    
    this.isExpanding = false;
    
    this.summary.addEventListener("click", (e) => this.onClick(e));
  }

  onClick(e) {
    // Stop default behaviour from the browser
    e.preventDefault();
    
    this.el.style.overflow = "hidden";
    
    if (this.isClosing || !this.el.open) {
      this.open();
      
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    // Set the element as "being closed"
    this.isClosing = true;

    // Store the current height of the element
    const startHeight = `${this.el.offsetHeight}px`;
    
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      
      this.animation.cancel();
    }

    // Start a WAAPI animation
    this.animation = this.el.animate(
      {
        
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: "ease-out",
      }
    );

    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(false);
    // If the animation is cancelled, isClosing variable is set to false
    this.animation.oncancel = () => (this.isClosing = false);
  }

  open() {
    // Apply a fixed height on the element
    this.el.style.height = `${this.el.offsetHeight}px`;
    
    this.el.open = true;
    
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    // Set the element as "being expanding"
    this.isExpanding = true;
    
    const startHeight = `${this.el.offsetHeight}px`;
    
    const endHeight = `${
      this.summary.offsetHeight + this.content.offsetHeight
    }px`;

    // If there is already an animation running
    if (this.animation) {
      
      this.animation.cancel();
    }

    // Start a WAAPI animation
    this.animation = this.el.animate(
      {
        
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: "ease-out",
      }
    );
    
    this.animation.onfinish = () => this.onAnimationFinish(true);
    
    this.animation.oncancel = () => (this.isExpanding = false);
  }

  onAnimationFinish(open) {
    // Set the open attribute based on the parameter
    this.el.open = open;
    
    this.animation = null;
    
    this.isClosing = false;
    this.isExpanding = false;
    
    this.el.style.height = this.el.style.overflow = "";
  }
}

document.querySelectorAll("details").forEach((el) => {
  new Accordion(el);
});
