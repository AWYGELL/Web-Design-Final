document.addEventListener('DOMContentLoaded', function () {
    const typewriter = document.getElementById('typewriter');
    const imageChoices = document.getElementById('imageChoices');
    const text = typewriter.innerText;
    typewriter.innerText = '';

    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        } else {
            document.addEventListener('click', function () {
                imageChoices.style.display = 'flex';
                typewriter.style.display = 'none';
            });
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the score from local storage or set it to 0
    var score = localStorage.getItem('score') || 0;
    updateScoreDisplay(score);
  });
  
  function updateScore(value) {
    // Retrieve the current score from local storage or set it to 0
    var score = parseInt(localStorage.getItem('score')) || 0;
    
    // Update the score with the provided value
    score += value;
  
    // Save the updated score to local storage
    localStorage.setItem('score', score);
  
    // Update the score display on the page
    updateScoreDisplay(score);
  }
  
  function updateScoreDisplay(score) {
    // Update the score display element
    document.getElementById('scoreDisplay').innerText = 'Score: ' + score;
  }