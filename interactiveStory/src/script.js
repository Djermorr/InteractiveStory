const optionButtons = document.querySelectorAll('#option-buttons button');
const content = document.querySelector('#content');
const resetButton = document.querySelector('#reset-button');
const buttonLeft = document.querySelector('#buttonLeft');
const buttonRight = document.querySelector('#buttonRight')
let background = document.querySelector('body')

var currentTime = Date.now();
var time = currentTime;
const message = new SpeechSynthesisUtterance();


/*
Banaan = B
Taart = T
Eten = E

 */


var gameshow = new Audio();
var sound = new Audio();
gameshow.src = './public/sound/gameshow.mp3';
sound.src = '';
gameshow.play();

  window.addEventListener('load', () => {
    setTimeout(function() {
    message.text = 'Beste mensen, welkom op onze gameshow! Zie je deze cadeautjes beste speler? één van deze is voor u! Kies je het linkse cadeautje of het rechtse?';
    speechSynthesis.speak(message);
}, 5000); // delay in milliseconds (2000 milliseconds = 2 seconds)
  
    
  
  });
  var voices = window.speechSynthesis.getVoices();
message.pitch = 1.1;
message.volume = 1;
message.lang = "nl-NL";
message.rate = 1.1;

  
let currentOption = 'option1';
const options = {
  option1: {
    question: '',
    nextLeft: 'option2',
    nextRight: 'option3',
 
  },
  option2: {
    question: 'Hoera, je hebt een banaan gewonnen! In de andere kamer viel een vele betere prijs te winnen, ik ga je nog een kans geven om iets coolers te winnen, kies een kant en win een prijs!',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option4',
    nextRight: 'option4',
    sound: './public/sound/klap.mp3'

  },
  option3: {
    question: 'PROFICIAT, u heeft een overheerlijk TAARTJE gewonnen!  In de andere kamer viel een vele betere prijs te winnen, wil je het op eten?"\nJA:LINKS\nNEE: RECHTS',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option6',
    nextRight: 'option7',
    sound: './public/sound/klap.mp3'
  },
  option4: {
    question: 'Jammer maar helaas, geen prijs voor jouw! Je bent zelfs je banaan kwijt. Maar weet je, ik ga je nog eens de kans geven om te winnen! YOU CAN DO IT! achter één van deze twee deuren ligt de grote prijs, got get it champ!',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option8',
    nextRight: 'option9',
    sound: './public/sound/fail.mp3'
  },
  option5: {
    question: 'Kies links of recht (5)',
    bg: './public/img/imgPage4.png',
    nextLeft: 'optionStop',
    nextRight: 'optionStop',
  },
  option6: {
    question: '“Hmm wat een lekker taartje seg”, denk je. Maar je begint je onwel te voelen, heb je dan nooit niet geleerd om eten van een vreemde op te eten? Je valt in slaap...',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option12',
    nextRight: 'option13',
  },
  option7: {
    question: 'Wat? Waarom wil je het taartje niet eten? ik heb er zelfs nog zo veel tijd in gestoken! podium begint te schudden, gebouw begint in te storten.  en lichten beginnen te flikkeren. Waarom eet nooit iemand van mijn taartjes! Waarom! Nog eens een luide knal en het wordt plots zwart voor je ogen',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option14',
    nextRight: 'option15',
  },

  option8: {
    question: 'Wat? Waarom wil je het taartje niet eten? ik heb er zelfs nog zo veel tijd in gestoken! podium begint te schudden, gebouw begint in te storten.  en lichten beginnen te flikkeren. Waarom eet nooit iemand van mijn taartjes! Waarom! Nog eens een luide knal en het wordt plots zwart voor je ogen',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option14',
    nextRight: 'option15',
  },

  option9: {
    question: 'Wat? Waarom wil je het taartje niet eten? ik heb er zelfs nog zo veel tijd in gestoken! podium begint te schudden, gebouw begint in te storten.  en lichten beginnen te flikkeren. Waarom eet nooit iemand van mijn taartjes! Waarom! Nog eens een luide knal en het wordt plots zwart voor je ogen',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option14',
    nextRight: 'option15',
  },

  option10: {
    question: 'Wat? Waarom wil je het taartje niet eten? ik heb er zelfs nog zo veel tijd in gestoken! podium begint te schudden, gebouw begint in te storten.  en lichten beginnen te flikkeren. Waarom eet nooit iemand van mijn taartjes! Waarom! Nog eens een luide knal en het wordt plots zwart voor je ogen',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option14',
    nextRight: 'option15',
  },

  option11: {
    question: 'Wat? Waarom wil je het taartje niet eten? ik heb er zelfs nog zo veel tijd in gestoken! podium begint te schudden, gebouw begint in te storten.  en lichten beginnen te flikkeren. Waarom eet nooit iemand van mijn taartjes! Waarom! Nog eens een luide knal en het wordt plots zwart voor je ogen',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option14',
    nextRight: 'option15',
  },
  optionStop:{
    question: 'Kies links of recht (stop)',
    bg: './public/img/imgPage3.png',
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
  content.textContent = 'Beste mensen, welkom op onze gameshow! Zie je deze cadeautjes beste speler? één van deze is voor u! Kies je het linkse cadeautje of het rechtse?';
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
          setTimeout(() => {
            message.text = options[currentOption].question;
            speechSynthesis.speak(message);
          }, 5000);
          message.pitch = 1.1;
          message.volume = 1;
          message.lang = "nl-NL";
          message.rate = 1.1;
          var sound = new Audio();
          sound.src = options[currentOption].sound;
          sound.play();
      

         

        } else if(msg.data === 'right'){
          currentOption = options[currentOption].nextRight;
          background.style.backgroundImage = `url(${options[currentOption].bg})`;
          content.textContent = options[currentOption].question;
          message.text = options[currentOption].question;
          setTimeout(() => {
            message.text = options[currentOption].question;
            speechSynthesis.speak(message);
          }, 5200);
          message.pitch = 1.1;
          message.volume = 1;
          message.lang = "nl-NL";
          message.rate = 1.1;
          var sound = new Audio();
          sound.src = options[currentOption].sound;
          sound.play();
      
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

