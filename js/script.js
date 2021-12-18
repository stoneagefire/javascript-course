const btn = document.getElementById('submit');

btn.addEventListener('click', function() {
    const txt = document.getElementById('message');
    txt.classList.toggle('percent-off');
})