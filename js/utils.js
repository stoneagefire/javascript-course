function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function changePercent(value) {
    document.getElementById('percent-off').textContent = value + "% OFF";
}

showMessage('Soham Patel');
changePercent(30);