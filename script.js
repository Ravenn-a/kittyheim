function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.getElementsByClassName('speech');
    alert ('meow!');

    const msg = document.getElementById('mode-message');
    if (html.classList.contains('light')) {
        alert ('All hail the sun god...'); 
    } else { 
        alert ('Midnight comes...');
    }
}

