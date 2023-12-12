// Wrap the code in an event listener for DOMContentLoaded
window.onload = function() {
    const EFFECT = document.querySelector("#effect");

    window. addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if (window.scrollY>=500) {
            EFFECT.style.opacity = '1';
            EFFECT.style.transfrom = 'translateX(0px)';
            EFFECT.style.transition = '1.5s ease-in-out';
        }
        
        else {
            EFFECT.style.opacity = '0';
            EFFECT.style.transfrom = 'translateX(-50px)';
        }
    }
    scrollEffect();
}
// reference code: https://www.youtube.com/watch?v=MH4PpI4HIE4

// Wrap the code in an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // color text effect
    const paragraph = document.getElementById('colorText');

    // Split the text into words
    const words = paragraph.innerText.split(' ');

    // List of predefined colors
    const colorList = ['#FF3B39', '#FFFB7D', '#0551BA', '#4AFFC6', '#7CA44C'];

    // Empty the original paragraph content
    paragraph.innerHTML = '';

    // Iterate through each word and wrap it in a span with a random background color
    words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = word;
        span.classList.add('colored-span');
        
        // Get a random color from the color list
        const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
        span.style.backgroundColor = randomColor;

        paragraph.appendChild(span);
    });
});
