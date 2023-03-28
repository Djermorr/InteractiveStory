const optionButtons = document.querySelectorAll('#option-buttons button');
const content = document.querySelector('#content');
const resetButton = document.querySelector('#reset-button');

const options = {
  option1: "Je hebt het 1e cadeautje gekozen!",
  option2: "Je hebt het 2e cadeautje gekozen!",
  option3: "Je hebt het 3e cadeautje gekozen!",
  option4: "Je hebt het 4e cadeautje gekozen!",
  option5: "Je hebt het 5e cadeautje gekozen!",
  option6: "Je hebt het 6e cadeautje gekozen!"
};

const selectedOption = localStorage.getItem('selectedOption');

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
    localStorage.setItem('selectedOption', button.value);

    // Update the content with the selected option
    content.textContent = options[button.value];
  });
});

resetButton.addEventListener('click', () => {
  // Remove all local storage items
  localStorage.clear();

  // Deselect all buttons
  optionButtons.forEach(button => button.classList.remove('selected'));

  // Clear the content
  content.textContent = "Je hoort uit de gang iets fluisteren naar jouw: “psst hej! Jij daar! Zie je deze cadeautjes? één van deze is voor u! Kies je het linkse cadeautje of het rechtse?";
});

