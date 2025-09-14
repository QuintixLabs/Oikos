/**
 * SCRIPT.JS
 * --------------------------------------------------------
 * Primarily used for the functionality of index.html.
*/


/**
 * Copy Button
*/
document.querySelectorAll(".copy-btn").forEach(button => {
    let timeoutId = null; // track the timeout for this button
    button.addEventListener("click", () => {
        // Find the closest container, then find the code element within it
        const container = button.closest('.snippet-container');
        const target = container ? container.querySelector('code') : null;
        
        if (!target) {
            console.error("No code element found in container");
            return;
        }
        
        const text = target.textContent.trim(); // use textContent for consistent copy
        navigator.clipboard.writeText(text).then(() => {
            // Clear any previous timeout to avoid stacking
            if (timeoutId) clearTimeout(timeoutId);
            button.textContent = "Copied ˃ 𖥦 ˂";
            button.classList.add("copied");
            timeoutId = setTimeout(() => {
                button.textContent = "Copy";
                button.classList.remove("copied");
                timeoutId = null; // reset
            }, 1500);
        }).catch(err => {
            console.error(":( failed to copy text:", err);
        });
    });
});


/**
 * Updates heading anchor (.anchor) links to point to the heading's ID
*/
document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
            const anchor = heading.querySelector('.anchor');
            if (anchor) {
                anchor.href = `#${heading.id}`;
            }
        });


/**
 * Random Quotes
*/
    const quotes = [
  "hey :) check this webring out",
  "this is random but i like it",
  "for fun •ᴗ•",
  "hm, not bad actually :‹",
  "heh, cute little site"
];

function displayRandomQuote() {
  const quoteElement = document.getElementById('randomQuote');
  
  const lastIndex = parseInt(localStorage.getItem('lastQuoteIndex'), 10);
  
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex && quotes.length > 1);
  
  localStorage.setItem('lastQuoteIndex', randomIndex);
  
  // set the quote and fade in
  quoteElement.style.animation = 'none';
  quoteElement.offsetHeight;
  quoteElement.textContent = `"${quotes[randomIndex]}"`;
  quoteElement.style.animation = 'fadeIn 0.7s ease-in-out forwards';
}

// call the function :)
displayRandomQuote();

// Automatically add language labels
document.querySelectorAll('.snippet-container code').forEach(code => {
  const classes = code.className.split(' ');
  const langClass = classes.find(c => c.startsWith('language-'));
  if (langClass) {
    const lang = langClass.replace('language-', '').toUpperCase();
    const label = document.createElement('div');
    label.className = 'language-label';
    label.textContent = lang;
    code.parentElement.parentElement.insertBefore(label, code.parentElement);
  }
});



/**
 * a lil console.log message :D
*/
console.log('%c hey!!', 'font-style: italic; color: #CDFF71; font-weight: bold;');




