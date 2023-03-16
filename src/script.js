const form = document.querySelector('#option-form');
const radioButtons = form.querySelectorAll('input[type=radio]');
const selectedOption = localStorage.getItem('selectedOption');

if (selectedOption) {
  // If the user has already selected an option, check the appropriate radio button
  radioButtons.forEach(button => {
    if (button.value === selectedOption) {
      button.checked = true;
    }
  });
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Save the selected option to local storage
  const selectedButton = form.querySelector('input[type=radio]:checked');
  localStorage.setItem('selectedOption', selectedButton.value);
  
  // Redirect to the selected page
  window.location.href = `${selectedButton.value}`;
});
