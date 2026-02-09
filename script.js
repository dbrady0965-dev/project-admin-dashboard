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
