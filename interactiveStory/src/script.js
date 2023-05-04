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
message.pitch = 2;
message.volume = 2;
message.lang = "nl-BE";
message.rate = 1.5;

  
let currentOption = 'option1';
const options = {
  option1: {
    question: '',
    nextLeft: 'option2',
    nextRight: 'option3',
 
  },
  option2: {
    question: 'Hoera, je hebt een banaan gewonnen! In de andere kamer viel wel een vele betere prijs te winnen, ik ga je nog een kans geven om iets coolers te winnen, kies de juiste deur en win een betere prijs!',
    bg: './public/img/Gameshow/Gameshow.png',
    nextLeft: 'option4',
    nextRight: 'option4',
    sound: './public/sound/klap.mp3'

  },
  option3: {
    question: 'PROFICIAT, u heeft een overheerlijk TAARTJE gewonnen! In de andere kamer viel wel een vele betere prijs te winnen, wil je het op eten? "JA:LINKS NEE: RECHTS',
    bg: './public/img/Gameshow/Gameshow.png',
    nextLeft: 'option6',
    nextRight: 'option7',
    sound: './public/sound/klap.mp3'
  },
  option4: {
    question: 'Jammer maar helaas, geen prijs voor jouw! Je bent zelfs je banaan kwijt. Ik ga je toch nog een kans geven om te winnen! Kies een deur en win een prijs!',
    bg: './public/img/Gameshow/Gameshow.png',
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
    question: 'Het was een lekker taartje maar, je begint je onwel te voelen, heb je dan nooit niet geleerd om eten van een vreemde op te eten? Je valt in slaap... Ga door een deur om voort te gaan',
    bg: './public/img/Gameshow/gameshow_drugs.jpg',
    nextLeft: 'option12',
    nextRight: 'option12',
    sound: './public/sound/snacking.mp3'
  },
  option7: {
    question: 'Wat? Waarom wil je het taartje niet eten? ik heb er zelfs nog zo veel tijd in gestoken! podium begint te schudden, gebouw begint in te storten.  en lichten beginnen te flikkeren. Waarom eet nooit iemand van mijn taartjes! Waarom! Nog eens een luide knal en het wordt plots zwart voor je ogen',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option14',
    nextRight: 'option15',
  },

  option8: {
    question: 'LINKS is spijtig genoeg niet de juiste weg, Weeral niet, probeer nog een keer, ik heb hier weer twee pakjes klaargezet, KIES VERSTANDIG en WIN JE GROTE PRIJS!',
    bg: './public/img/Gameshow/glitchingGameshow.png',
    nextLeft: 'option14',
    nextRight: 'option14',
    sound: './public/sound/buzzer.mp3'
  },

  option9: {
    question: 'Oeeeh, je blijft maar verliezen seg, RECHTS is spijtig genoeg niet de juist weg, ik heb hier weer twee pakjes klaargezet, KIES VERSTANDIG en WIN EEN GROTE PRIJS!',
    bg: './public/img/Gameshow/glitchingGameshow.png',
    nextLeft: 'option14',
    nextRight: 'option14',
    sound: './public/sound/buzzer.mp3'
  },

  option10: {
    question: 'Wat? Waarom wil je het taartje niet eten? storten. Het podium begint in te storten en het wordt zwart voor je ogen',
    bg: './public/img/imgPage2.png',
    nextLeft: 'option14',
    nextRight: 'option15',
  },
  option12: {
    question: 'Je wordt wakker in een steegje, je voelt je gedesoriënteerd en verward. Je realiseert je al snel dat er iets vreselijks is gebeurd en dat je je niet kunt herinneren wat er is gebeurd nadat je het taartje hebt gegeten. Je begint te huilen en voelt je vreselijk kwetsbaar en bang. Je realiseert je dat je hulp nodig hebt en begint op zoek te gaan naar iemand die je kan helpen. Kies een deur om hulp te zoeken, kies verstandig!',
    bg: './public/img/Crossroads/pad.png',
    nextLeft: 'option18',
    nextRight: 'option19',
    sound: './public/sound/ambientBB.mp3'
  },
  option18: {
    question: 'Terwijl je probeert uit te leggen wat er is gebeurd, merk je dat de mensen om je heen steeds vreemder reageren. Hun gezichten beginnen te vervormen en hun stemmen klinken onheilspellend. Je wordt bang en loopt snel de andere kant uit.',
    bg: './public/img/Group.png',
    nextLeft: 'option20',
    nextRight: 'option20',
    sound: './public/sound/laugh.mp3'
    
  },
  option19: {
    question: 'Je hebt door dat dit misschien een enorme vergissing was. De mensen waar je iets aan vraagt praten niet terug en kijken gewoon raar. Je voelt je hartslag versnellen en begint te trillen van angst en je begint te lopen voor je leven.',
    bg: './public/img/Group.png',
    nextLeft: 'option20',
    nextRight: 'option20',
    sound: './public/sound/laugh.mp3'
  },

  option20: {
    question: 'Terwijl je aan het weglopen bent begint de wereld te vervormen, felle kleuren komen van overal en de gebouwen beginnen vreemde vormen aan te nemen. Je begint je aangenamer te voelen en je krijgt een warm gevoel over je heen',
    bg: './public/img/HallucinationAlley.png',
    nextLeft: 'option21',
    nextRight: 'option21',
    sound: './public/sound/heartbeat.mp3'
    
  },
  option21: {
    question: 'Na een tijdje begin je te beseffen dat je in een kamertje ligt, er valt in dit kamertje niet veel te zien, het is muisstil... Je hoort een stem door je hoofd gaan... LINKS of RECHTS',
    bg: './public/img/EmptyRoom.png',
    nextLeft: 'option22',
    nextRight: 'option22',
    
  },

  option22: {
    question: 'LINKS of RECHTS',
    bg: './public/img/EmptyRoom.png',
    nextLeft: 'option22',
    nextRight: 'option22',
    
  },

  
  option14:{
    question: 'Ik weet niet hoe ik dit moet zeggen maar. Je bent weeral verkeerd... Probeer misschien nog eens?',
    bg: './public/img/Gameshow/glitchingGameshow.png',
    nextLeft: 'option15',
    nextRight: 'option15',
    sound: './public/sound/bwabwa.mp3'
  },
  option15:{
    question: 'Wat is er aan het gebeuren, er wordt hier maar geen prijs gewonnen, PROBEER NOG EENS',
    bg: './public/img/Gameshow/glitchingGameshow.png',
    nextLeft: 'option16',
    nextRight: 'option16',
    sound: './public/sound/bwabwa.mp3'
  },
  option16:{
    question: 'WAT, WEERAL NIET GEWONNEN, er was misschien nooit geen prijs, ik geef het alvast op, jij kunt doen wat je wil, kies een deur of niet, het interesseert mij niet meer, doei!',
    bg: './public/img/Gameshow/glitchingGameshow.png',
    nextLeft: 'option17',
    nextRight: 'option17',
    sound: './public/sound/bwabwa.mp3'
  },

  option17:{
    question: '',
    bg: './public/img/Gameshow/overgrownGameshow.png',
    nextLeft: 'option17',
    nextRight: 'option17',
    sound: './public/sound/crickets.mp3'
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
          message.pitch = 2;
          message.volume = 2;
          message.lang = "nl-BE";
          message.rate = 1.5;
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
          message.pitch = 2;
          message.volume = 2;
          message.lang = "nl-BE";
          message.rate = 1.5;
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

