let counter = 0;
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
  alert(counter); // Show the current counter value as a number
  counter++; // Increment the counter
  counterElement.textContent = counter; // Update the counter display
});