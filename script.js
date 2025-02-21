// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    themeToggle.innerHTML = isDarkTheme ? '☀️' : '🌙';
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '☀️';
} else {
    body.classList.remove('dark-theme');
    themeToggle.innerHTML = '🌙';
}

// Toggle QR Code and Show Message
function toggleQR(qrId, messageId) {
    const qrCode = document.getElementById(qrId);
    const screenshotMessage = document.getElementById(messageId);

    if (qrCode.style.display === 'none' || qrCode.style.display === '') {
        // Show QR Code
        qrCode.style.display = 'flex';
        screenshotMessage.style.display = 'none';
    } else {
        // Hide QR Code and Show Message
        qrCode.style.display = 'none';
        screenshotMessage.style.display = 'flex';

        // Redirect to WhatsApp when message is clicked
        screenshotMessage.addEventListener('click', () => {
            window.open(`https://wa.me/1234567890?text=Here%20is%20the%20screenshot%20of%20the%20payment.`, '_blank');
        });
    }
}

// Hide Loader
window.onload = function () {
    document.querySelector('.loader-container').style.display = 'none';
};
