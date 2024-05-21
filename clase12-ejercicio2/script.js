//open modal
document.getElementById('open-modal-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});

//close modal
document.getElementById('close-modal-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

//cancel action
document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

//confirm action
document.getElementById('confirm-btn').addEventListener('click', function() {
    alert('Confirmed!😀');
    document.getElementById('modal').style.display = 'none';
});

//close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
