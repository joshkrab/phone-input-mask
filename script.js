// Get the phone input element from the DOM using its ID
const phoneMask = document.getElementById("phone-mask");
// Get the progress line element from the DOM using its class
const progressLine = document.querySelector(".progress-line");

// Apply an input mask to the phone input element using the IMask library.
// The mask format is for a Ukrainian phone number: +38 (000) 000-00-00
IMask(phoneMask, {
  mask: "+{38} (000) 000-00-00",
});

// Set an 'oninput' event handler for the phone input field.
// This function will be called every time the user types in the input.
phoneMask.oninput = function () {
  // Get the current width of the input element.
  const w = this.offsetWidth;

  // Calculate a color value that changes as the user types.
  // It starts at white (255) and moves towards a darker shade of green.
  // The calculation is based on the current length of the input value.
  // 19 is the total length of the masked phone number.
  const colorValue = 255 - (255 / 19) * this.value.length;

  // Set the width of the progress line to visually represent input completion.
  // The width grows as the user types.
  progressLine.style.width = (w / 19) * this.value.length + "px";

  // Set the background color of the progress line.
  // The color changes from a light green to a darker green as the user types.
  progressLine.style.backgroundColor = `rgb(${colorValue}, 137, 0)`;
};

/**
 * Finds the length of the longest word in a given string.
 * This function is not used in the phone mask feature but is available for other purposes.
 * @param {string} str The input string to search for the longest word.
 * @returns {number} The length of the longest word. Returns 0 if the input is not a string.
 */
function findMaxLengthWord(str) {
  // Check if the input is a string; if not, return 0.
  if (typeof str !== 'string') return 0;

  // Split the string into an array of words.
  // Using split(' ') might result in empty strings if there are multiple spaces between words.
  const words = str.split(' ');

  // Initialize the maximum length to 0.
  let maxLength = 0;

  // Iterate over each word in the array.
  for (const word of words) {
    // If the current word's length is greater than the stored maximum length...
    if (word.length > maxLength) {
      // ...update the maximum length.
      maxLength = word.length;
    }
  }

  // Return the final maximum length found.
  return maxLength;
}