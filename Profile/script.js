document.getElementById('change-password').addEventListener('click', function() {
    document.getElementById('password-modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('password-modal').style.display = 'none';
});

document.getElementById('confirm-change').addEventListener('click', function() {
    document.getElementById('password-modal').style.display = 'none';
});