// Matrix-style falling animation for ASCII banner
document.addEventListener('DOMContentLoaded', function() {
  const banner = document.querySelector('.ascii-banner');
  
  if (!banner || !banner.classList.contains('animated')) {
    return;
  }
  
  // Get the text content
  const text = banner.textContent;
  
  // Clear the banner
  banner.textContent = '';
  
  // Wrap each character in a span
  const chars = text.split('').map((char, index) => {
    const span = document.createElement('span');
    span.className = 'ascii-char';
    span.textContent = char;
    
    // Preserve line breaks
    if (char === '\n') {
      return document.createElement('br');
    }
    
    return span;
  });
  
  // Append all characters
  chars.forEach(char => banner.appendChild(char));
  
  // Show banner container
  banner.classList.add('show');
  
  // Animate characters with RANDOM delay (The Matrix Fix)
  const charSpans = banner.querySelectorAll('.ascii-char');
  
  charSpans.forEach((span) => {
    // Instead of index * 15, we pick a random time between 0ms and 2000ms
    // This creates the "digital rain" scattering effect
    const randomDelay = Math.floor(Math.random() * 2000); 
    
    setTimeout(() => {
      span.classList.add('fall');
    }, randomDelay);
  });
});