const optionButtons = document.querySelectorAll("#option-buttons button");
const content = document.querySelector("#content");
const pageSummary = document.querySelector("#pageSummary");
const resetButton = document.querySelector("#reset-button");
let background = document.querySelector("body");

var currentTime = Date.now();
var time = currentTime;
const message = new SpeechSynthesisUtterance();

var gameshow = new Audio();
var sound = new Audio();
gameshow.src = "./public/sound/gameshow.mp3";
sound.src = "";
gameshow.play();

window.addEventListener("load", () => {
  localStorage.clear();
  localStorage.setItem(`summary`, JSON.stringify([]));
  setTimeout(function () {
    message.text =
      "Beste mensen, welkom op onze gameshow! Zie je deze cadeautjes beste speler? één van deze is voor u! Kies je het linkse cadeautje of het rechtse?";
    speechSynthesis.speak(message);
  }, 5000); // delay in milliseconds (2000 milliseconds = 2 seconds)
});
var voices = window.speechSynthesis.getVoices();
message.pitch = 2.5;
message.volume = 2;
message.lang = "nl-BE";
message.rate = 1.2;

let currentOption = "option1";
const options = {
  option1: {
    question:
      "Beste mensen, welkom op onze gameshow! Zie je deze cadeautjes beste speler? 1 persoon kan maar door 1 deur, de rest mag aan één kant blijven wachten, ga ook vlotjes en snel door de deur(ga door linkse deur voor linkse pakje en rechtse deur voor rechtse pakje)",
    nextLeft: "option2",
    nextRight: "option3",
    bg: "./public/img/Gameshow/gameshow_presents_OG.png",
    sound: "./public/sound/gameshow.mp3",
  },
  option2: {
    question:
      "Hoera, je hebt een banaan gewonnen! In de andere kamer viel wel een vele betere prijs te winnen, ik ga je nog een kans geven om iets coolers te winnen, kies de juiste deur en win een betere prijs!",
    bg: "./public/img/Gameshow/gameshow_presents_bannanaGood.png",
    nextLeft: "option4",
    nextRight: "option4",
    sound: "./public/sound/klap.mp3",
    summary: "banaan",
  },
  option3: {
    question:
      "Proficiat! u heeft een overheerlijk TAARTJE gewonnen! In de andere kamer viel wel een vele betere prijs te winnen, wil je het overheerlijke taartje op eten? JA:LINKS NEE: RECHTS",
    bg: "./public/img/Gameshow/gameshow_presents_cake.png",
    nextLeft: "option6",
    nextRight: "option7",
    sound: "./public/sound/klap.mp3",
    summary: "taartje",
  },
  option4: {
    question:
      "Jammer maar helaas, geen prijs voor jouw! Je mag je banaantje wel bijhouden maar, ik ga je toch nog een kans geven om te winnen! Kies een deur en maak kans om een betere prijs te winnen!",
    bg: "./public/img/Gameshow/gameshow_presents_bannanaGood_2.png",
    nextLeft: "option8",
    nextRight: "option9",
    sound: "./public/sound/fail.mp3",
    summary: "verliezen",
  },
  option5: {
    question: "Kies links of recht (5)",
    bg: "./public/img/imgPage4.png",
    nextLeft: "optionSummary",
    nextRight: "optionSummary",
  },
  option6: {
    question:
      "Het was een lekker taartje maar, je begint je onwel te voelen, heb je nooit geleerd om eten van vreemde niet op te eten? Je valt in slaap... Ga door een deur om voort te gaan",
    bg: "./public/img/Gameshow/gameshow_drugs.jpg",
    nextLeft: "option12",
    nextRight: "option12",
    sound: "./public/sound/snacking.mp3",
  },
  option7: {
    question:
      "Wat? Waarom wil je het taartje niet eten? ik heb er zelfs nog zo veel tijd in gestoken! Waarom eet nooit iemand van mijn taartjes! Je hoort nog eens een luide knal en het wordt plots zwart voor je ogen. Kies een deur om door te gaan",
    bg: "./public/img/Presentator_ENG.png",
    nextLeft: "option23",
    nextRight: "option23",
    sound: "./public/sound/rumbling.mp3",
  },
  option23: {
    question:
      "Welkom op de echte gameshow, hier gaan we u testen door een scenario te geven. Kies verstandig, de volgende keuze van deur legt je pad vast ",
    bg: "./public/img/Gameshow/gameshowMasterDarkPath.png",
    nextLeft: "option24",
    nextRight: "option25",
    sound: "./public/sound/gameshowBAD.mp3",
  },
  option24: {
    question:
      "Je komt in een neerstortend gebouw terecht, onderweg valt er nog een hoop puin naast je naar beneden op iemand naast je zijn been. Help! krijst de man uit, ik krijg de steen niet van mijn benen. Het gebouw begint steeds minder stevig te worden en je beseft dat er geen tijd is voor deze man te helpen. Help je hem? JA = RECHTS NEE = LINKS",
    bg: "./public/img/crumblinghall.jpg",
    nextLeft: "option26",
    nextRight: "option31",
    sound: "./public/sound/rumbling.mp3",
  },
  option25: {
    question:
      "Raadsel: Wat was het ander cadeautje had je niet voor het taartje gekozen in het begin van de show? LINKS: een appel, RECHTS: een banaan",
    bg: "./public/img/presentatorQuestion.png",
    nextLeft: "option27",
    nextRight: "option28",
    sound: "./public/sound/mysterious.mp3",
  },

  option26: {
    question:
      "Je heft de grote blok steen van de man zijn benen en helpt hem recht. Het been van de man ziet er helemaal niet goed uit. Je probeert hem op te pakken en vertrekt naar de uitgang. Onderweg naar de uitgang duw je hem nog uit de weg voor een andere blok, maar je bezwijkt zelf onder het puin en je blaast je laatste adem uit. (The selfless ending) (ga door een deur om opnieuw te beginnen)",
    bg: "./public/img/crumblinghall.jpg",
    sound: "./public/sound/rumbling.mp3",
    nextLeft: "option1",
    nextRight: "option1",
  },
  option31: {
    question:
      "Het gebouw stort in, je hebt gekozen om de man niet te helpen en loopt naar buiten, je hebt het gehaald! Maar je voelt je heel schuldig, je had misschien de man nog kunnen redden, (The selfish ending) (ga door een deur om opnieuw te beginnen)",
    bg: "./public/img/crumblinghall.jpg",
    sound: "./public/sound/rumbling.mp3",
    nextLeft: "option1",
    nextRight: "option1",
  },
  option27: {
    question:
      "Proficiat, u heeft juist geantwoord, u krijgt de opportuniteit om verder te leven + u krijgt de banaan van ons! (the banana ending) (ga door een deur om opnieuw te beginnen)",
    bg: "./public/img/presentatorQuestion.png",
    nextLeft: "option1",
    nextRight: "option1",
  },
  option28: {
    question:
      "Dat is fout, het was een banaan, u heeft verloren, de kamer wordt steeds warmer en warmer tot je levend verbrand! (the apply water to the burned area ending) (ga door een deur om opnieuw te beginnen)",
    bg: "./public/img/Presentator_ENG.png",
    sound: "./public/sound/fail2.mp3",
    nextLeft: "option1",
    nextRight: "option1",
  },
  option8: {
    question:
      "Dit is spijtig genoeg niet de juiste weg, Weeral niet, probeer nog een keer, ik heb hier weer twee pakjes klaargezet, KIES VERSTANDIG en WIN JE GROTE PRIJS!",
    bg: "./public/img/Gameshow/gameshow_presents_glitched_fout.png",
    nextLeft: "option14",
    nextRight: "option14",
    sound: "./public/sound/fail2.mp3",
  },

  option9: {
    question:
      "Je beslist de banaan te houden nadat je geen andere prijs ziet achter de deur. plots denk je aan een boeket bloemen en voor je het beseft verschijnt dit boeket voor je neus. De banaan is duidelijk magisch en brengt dingen tevoorschijn. Je kan hiermee mensen helpen (Links) of de krachten voor jezelf houden (Rechts)",
    bg: "./public/img/Gameshow/gameshow_presents_magicbanana1.png",
    nextLeft: "option32",
    nextRight: "option33",
    sound: "./public/sound/buzzer.mp3",
    summary: "verliezen",
  },

  option12: {
    question:
      "Je wordt wakker in een steegje, je voelt je gedesoriënteerd en verward. Je realiseert je al snel dat er iets vreselijks is gebeurd. Je begint te huilen en voelt je vreselijk kwetsbaar en bang. Je realiseert je dat je hulp nodig hebt en begint op zoek te gaan naar iemand die je kan helpen. Kies een deur om hulp te zoeken, kies verstandig!",
    bg: "./public/img/Crossroads/pad.png",
    nextLeft: "option18",
    nextRight: "option19",
    sound: "./public/sound/ambientBB.mp3",
  },
  option18: {
    question:
      "Terwijl je probeert uit te leggen wat er is gebeurd, merk je dat de mensen om je heen steeds vreemder reageren. Hun gezichten beginnen te vervormen en hun stemmen klinken onheilspellend. Je wordt bang en loopt snel de andere kant uit.",
    bg: "./public/img/Group.png",
    nextLeft: "option20",
    nextRight: "option20",
    sound: "./public/sound/laugh.mp3",
  },
  option19: {
    question:
      "Je hebt door dat dit misschien een enorme vergissing was. De mensen waar je iets aan vraagt praten niet terug en kijken gewoon raar. Je voelt je hartslag versnellen en begint te trillen van angst en je begint te lopen voor je leven.",
    bg: "./public/img/Group.png",
    nextLeft: "option20",
    nextRight: "option20",
    sound: "./public/sound/laugh.mp3",
  },

  option20: {
    question:
      "Terwijl je aan het weglopen bent begint de wereld te vervormen. Je hart begint hevig te bonken. Felle kleuren komen van overal en de gebouwen beginnen vreemde vormen aan te nemen. Je begint je aangenamer te voelen en je krijgt een warm gevoel over je heen",
    bg: "./public/img/HallucinationAlley.png",
    nextLeft: "option21",
    nextRight: "option21",
    sound: "./public/sound/heartbeat.mp3",
  },
  option21: {
    question:
      "Na een tijdje kom je in een kamertje terecht, er valt in dit kamertje niet veel te zien, buiten twee deuren... Je hoort een stem door je hoofd gaan... LINKS of RECHTS",
    bg: "./public/img/EmptyRoom_presentator.png",
    nextLeft: "option22",
    nextRight: "option22",
    sound: "./public/sound/dooropening.mp3",
  },

  option22: {
    question: "........links....... Of ....... Rechts........",
    bg: "./public/img/EmptyRoom_presentator.png",
    nextLeft: "option30",
    nextRight: "option30",
    sound: "./public/sound/dooropening.mp3",
  },

  option30: {
    question:
      "Had je maar nooit dat taartje gegeten... Je blijft rondlopen in de eindeloze loep der deuren, hier eindigt je verhaal, (the scoobydoo ending) (ga door een deur om opnieuw te beginnen)",
    bg: "./public/img/EmptyRoom.png",
    nextLeft: "option1",
    nextRight: "option1",
  },
  
  option32: {
    question:
      "Je besluit mensen te helpen en voor je het weet is er voor iedereen dat je ziet een duidelijke positieve invloed. Maar je ontdekt op het nieuws dat alles wat jij tevoorschijn laat komen van een andere plaats op de wereld komt, blijf je verder doen (Links) of stop je (Rechts)?",
    bg: "./public/img/Prosperity.png",
    nextLeft: "option34",
    nextRight: "option35",
  },

    option33: {
    question:
      "Hoe kan je zo egoistisch zijn? Denk je nu echt alleen aan jezelf? Ik haal het gebouw hier neer! Ga tegen de verteller in (Links) of laat je dit gebeuren (Rechts)",
    bg: "./public/img/Gameshow/gameshow_presents_magicbanana_bad.png",
    nextLeft: "option36",
    nextRight: "option24",
  },

  option34: {
    question:
      "Je beslist de krachten te blijven gebruiken (met al die hoge prijzen in de supermarkten ook), in jouw omgeving breekt er een nieuwe gulden tijdperk uit maar niet zonder gevolgen, mensen over de rest van de wereld geraken verhongerd, steden verwoest, chaos breekt overal uit en plots (kies een deur om verder te gaan)",
    bg: "./public/img/barrenEarth.png",
    nextLeft: "option38",
    nextRight: "option38",
  },
  option35: {
    question:
      "Je stopt net op tijd met de krachten van de banaan te gebruiken. De wereld geraakt terug rustig op gang en je ontdekt dat de schade beperkt is tot de USA, Florida om precies te zijn. Een jonge vrouw wiens leven je erg geholpen hebt in de korte tijd komt naar je toe en wil haar leven met je delen. Beslis je mee te gaan met haar (Links) of niet (Rechts)?",
    bg: "./public/img/Prosperity_wife.png",
    nextLeft: "option39",
    nextRight: "option40",
  },

      option36: {
    question:
      "Wat denk je wel tegen mij in gaan? Hier zal je niet goed afkomen! Je zal het je geraden hebben! (ga door een deur om het verhaal verder te zetten)",
    bg: "./public/img/Gameshow/gameshow_presents_magicbanana_bad.png",
    nextLeft: "option37",
    nextRight: "option37",
  },

        option37: {
    question:
      "Alles is plots zwart. Alleen ben je nog, niemand om je heen... niemand.... ... niemand (the lonely ending II: Electric Boogaloo) (ga door een deur om het spel opnieuw te beginnen)",
    bg: "./public/img/Space.png",
    nextLeft: "option1",
    nextRight: "option1",
  },
    option38: {
    question:
      "Plots is alles voorbij, niet alles kon blijven lopen zoals het was, de wereld gaat naar de verdoemenis, oorlogen breken uit, nucleaire wapens worden ingezet, miserie... overal miserie... (the world war ending) (ga door een deur om het spel opnieuw te beginnen)",
    bg: "./public/img/ruinedEarth.png",
    nextLeft: "option1",
    nextRight: "option1",
  },
  option39: {
    question:
      "Je leeft nog lang en gelukkig met je nieuwe partner. Maar wat met de banaan? deze heb je met je partner gedeeld in de vorm van een betoverende banana split (The only good Ending) (ga door een deur om het spel opnieuw te beginnen)",
    bg: "./public/img/BananaSplit.png",
    nextLeft: "option1",
    nextRight: "option1",
  },
    option40: {
    question:
      "Je blijft voor altijd alleen, door de mooie vrouw af te wijzen heeft er niemand meer interesse in je getoont en voel je veel eenzaamheid. Je beslist dan ook je leven te leiden als een heremiet in het woud. Hier sterf je alleen en eenzaam (The lonely ending) (ga door een deur om het spel opnieuw te beginnen)",
    bg: "./public/img/Shack.png",
    nextLeft: "option1",
    nextRight: "option1",
  },

  option14: {
    question:
      "Ik weet niet hoe ik dit moet zeggen maar. Je bent weeral verkeerd... Probeer misschien nog eens?",
    bg: "./public/img/Gameshow/gameshow_presents_bannanaBAD.png",
    nextLeft: "option16",
    nextRight: "option16",
    sound: "./public/sound/bwabwa.mp3",
    summary: "verliezen",
  },
  option15: {
    question:
      "Wat is er aan het gebeuren, er wordt hier maar geen prijs gewonnen. Ik begin mezelf af te vragen of er ooit wel een prijs was? Misschien moet jij dat ook eens doen, probeer nog maar eens voor de zekerheid. Kies een deur",
    bg: "./public/img/Gameshow/gameshow_presents_bannanaBAD.png",
    nextLeft: "option16",
    nextRight: "option16",
    sound: "./public/sound/bwabwa.mp3",
  },
  option16: {
    question:
      "Weeral niet gewonnen! Ik geef het alvast op, jij kunt doen wat je wil, kies een deur of niet, ik ben naar huis, het interesseert mij niet meer, doei!",
    bg: "./public/img/Gameshow/gameshow_presents_glitched_fout_presentatorweg.png",
    nextLeft: "option17",
    nextRight: "option17",
    sound: "./public/sound/bwabwa.mp3",
  },

  option17: {
    question:
      "Het spel is gedaan, je bent de ultieme loser, (the ultimate loser *you* ending) (ga door een deur voor opnieuw te spelen)",
    bg: "./public/img/Gameshow/overgrownGameshow.png",
    nextLeft: "option1",
    nextRight: "option1",
    sound: "./public/sound/crickets.mp3",
  },

  optionSummary: {
    question:
      "Bedankt om ons je tijd te geven om mee te doen met onze installatie, Hier hebben we nog een overzicht van de keuzes die jij gemaakt hebt",
    bg: "./public/img/imgPage3.png",
  },
};

/*resetButton.addEventListener("click", () => {
  // Remove all local storage items
  localStorage.clear();
  localStorage.setItem(`summary`, JSON.stringify([]));

  // Deselect all buttons
  optionButtons.forEach((button) => button.classList.remove("selected"));

  // Clear the content
  content.textContent =
    "Beste mensen, welkom op onze gameshow! Zie je deze cadeautjes beste speler? één van deze is voor u! Kies je het linkse cadeautje of het rechtse?";
}); */

// This needs to point to the web socket in the Node-RED flow
// ... in this case it's /simple
var wsUri = "ws://" + "192.168.100.1:1880" + "/ws";

window.onload = () => {
  wsConnect();
};

function wsConnect() {
  console.log("connect", wsUri);
  var ws = new WebSocket(wsUri);

  ws.onmessage = function (msg) {
    //console.log(msg.data);
    currentTime = Date.now();
    //console.log(currentTime);
    if (currentTime > time + 12000) {
      console.log(currentTime);
      console.log("ready");
      if (options[currentOption] && options[currentOption].nextLeft) {
        if (msg.data === "left") {
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
          message.rate = 1;
          var sound = new Audio();
          sound.src = options[currentOption].sound;
          sound.play();
          const currentSummary = JSON.parse(localStorage.getItem(`summary`));
          console.log(currentSummary);
          localStorage.setItem(
            `summary`,
            JSON.stringify([...currentSummary, currentOption])
          );
        } else if (msg.data === "right") {
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
          message.rate = 1;
          var sound = new Audio();
          sound.src = options[currentOption].sound;
          sound.play();
        } else if (currentTime > time + 300000) {
        }
        time = currentTime;
      } else if (currentOption === optionSummary) {
        content.textContent = options[currentOption].question;
        const currentSummary = JSON.parse(localStorage.getItem(`summary`));
        pageSummary.textContent = currentSummary.summary;
        setTimeout(() => {
          message.text = options[currentOption].question;
          speechSynthesis.speak(message);
        }, 5000);
        message.pitch = 2;
        message.volume = 2;
        message.lang = "nl-BE";
        message.rate = 1;
        var sound = new Audio();
        sound.src = options[currentOption].sound;
        sound.play();
      }
    } else if (msg.data === "reset") {
      location.reload();
    }
  };

  ws.onopen = function () {
    console.log("Connected");
  };

  ws.onclose = function () {
    // in case of lost connection tries to reconnect every 3 secs
    setTimeout(wsConnect, 3000);
  };

  ws.disconnect = function () {
    console.log("Disconnected");
  };
}

function update() {
  // now send the output over the websocket
  if (ws) {
    ws.send(output);
  }
}
