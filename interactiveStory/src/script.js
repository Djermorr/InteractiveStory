const optionButtons = document.querySelectorAll('#option-buttons button');
const content = document.querySelector('#content');
const resetButton = document.querySelector('#reset-button');
const buttonLeft = document.querySelector('#buttonLeft');
const buttonRight = document.querySelector('#buttonRight')
let background = document.querySelector('body')

var currentTime = Date.now();
var time = currentTime;
const message = new SpeechSynthesisUtterance();
const voices = window.speechSynthesis.getVoices();
console.log(voices);

/*
Banaan = B
Taart = T
Eten = E

 */


message.text = 'Je hoort uit de gang iets fluisteren naar jouw: “psst hej! Jij daar! Zie je deze cadeautjes? één van deze is voor u! Kies je het linkse cadeautje of het rechtse?';
window.addEventListener('load', () => {
    setTimeout(() => {
  speechSynthesis.speak(message);
}, 1000); // 1 second delay
});

let currentOption = 'option1';
const options = {
  option1: {
    question: 'Kies links of recht (1)',
    nextLeft: 'option2',
    nextRight: 'option3',
  },
  option2: {
    question: 'Kies links of recht (2)',
    bg: './../public/img/imgPage2.png',
    nextLeft: 'option4',
    nextRight: 'option5',
  },
  option3: {
    question: 'Kies links of recht (3)',
    bg: './../public/img/imgPage2.png',
    nextLeft: 'option6',
    nextRight: 'option7',
  },
  option4: {
    question: 'Kies links of recht (4)',
    bg: './../public/img/imgPage2.png',
    nextLeft: 'option8',
    nextRight: 'option9',
  },
  option5: {
    question: 'Kies links of recht (5)',
    bg: './../public/img/imgPage4.png',
    nextLeft: 'optionStop',
    nextRight: 'optionStop',
  },
  option6: {
    question: 'Kies links of recht (4)',
    bg: './../public/img/imgPage2.png',
    nextLeft: 'option12',
    nextRight: 'option13',
  },
  option7: {
    question: 'Kies links of recht (5)',
    bg: './../public/img/imgPage2.png',
    nextLeft: 'option14',
    nextRight: 'option15',
  },
  optionStop:{
    question: 'Kies links of recht (stop)',
    bg: './../public/img/imgPage3.png',
  }
};



/*const selectedOption = localStorage.getItem('selectedOption');

if (selectedOption) {
  // If the user has already selected an option, highlight the appropriate button
  optionButtons.forEach(button => {
    if (button.value === selectedOption) {
      button.classList.add('selected');
      content.textContent = options[selectedOption];
    }
  });
}

optionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Deselect all buttons and select the clicked one
    optionButtons.forEach(button => button.classList.remove('selected'));
    button.classList.add('selected');

    // Save the selected option to local storage
    localStorage.setItem(`${'selectedOption'} ${button.value}`, button.value);

    // Update the content with the selected option
    content.textContent = options[button.value];

  });
});*/


resetButton.addEventListener('click', () => {
  // Remove all local storage items
  localStorage.clear();

  // Deselect all buttons
  optionButtons.forEach(button => button.classList.remove('selected'));

  // Clear the content
  content.textContent = "Je hoort uit de gang iets fluisteren naar jouw: “psst hej! Jij daar! Zie je deze cadeautjes? één van deze is voor u! Kies je het linkse cadeautje of het rechtse?";
});

// This needs to point to the web socket in the Node-RED flow
// ... in this case it's /simple
var wsUri = 'ws://' + '192.168.100.1:1880' + '/ws';

window.onload = () => {
  wsConnect();
};

function wsConnect() {
  console.log('connect', wsUri);
  var ws = new WebSocket(wsUri);


  ws.onmessage = function (msg) {
    //console.log(msg.data);
    currentTime = Date.now();
    //console.log(currentTime);
    if (currentTime > time + 10000) {
      console.log(currentTime);
      console.log("ready");
      if(options[currentOption] && options[currentOption].nextLeft){

        if (msg.data === 'left') {
          currentOption = options[currentOption].nextLeft;
          background.style.backgroundImage = `url(${options[currentOption].bg})`;
          content.textContent = options[currentOption].question;
        } else if(msg.data === 'right'){
          currentOption = options[currentOption].nextRight;
          background.style.backgroundImage = `url(${options[currentOption].bg})`;
          content.textContent = options[currentOption].question;
        } else if(currentTime > time + 300000) {

        }
        time = currentTime;
      }  
    }  

  };

  ws.onopen = function () {
    console.log('Connected');
  };

  ws.onclose = function () {
    // in case of lost connection tries to reconnect every 3 secs
    setTimeout(wsConnect, 3000);
  };

  ws.disconnect = function () {
    console.log('Disconnected');
  };
}

function update() {
  // now send the output over the websocket
  if (ws) {
    ws.send(output);
  }
}

