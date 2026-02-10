const fileInput = document.getElementById('file-upload');
const label = document.querySelector('label[for="file-upload"]');

fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        // Update the label text with the selected file name
        label.textContent = this.files[0].name;
    } else {
        label.textContent = 'Choose File';
    }
});



const shareButton = document.getElementById('shareButton');
const resultPara = document.querySelector('.result');

shareButton.addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'MDN Web Docs',
        text: 'Learn web development on MDN!',
        url: 'https://developer.mozilla.org',
      });
      resultPara.textContent = 'Page shared successfully!';
    } catch (err) {
      resultPara.textContent = `Error: ${err.name} - ${err.message}`;
    }
  } else {
    // Fallback for browsers that do not support the Web Share API
    resultPara.textContent = 'Web Share API is not supported in this browser.';
    // You could implement custom share buttons here
  }
});
// may not be required//
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  if (searchContainer.classList.contains('active')) {
    searchInput.focus(); // Focus the input when it expands
  } else {
    searchInput.value = ''; // Clear value when collapsing
  }
});
