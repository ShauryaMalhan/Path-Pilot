document.getElementById('nextBtn').addEventListener('click', function () {
    var activeGroup = document.querySelector('.question-group.active');
    activeGroup.classList.remove('active');

    var nextGroup = activeGroup.nextElementSibling;
    if (nextGroup) {
        nextGroup.classList.add('active');
    } else {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'block';
    }
});

document.getElementById('submitBtn').addEventListener('click', function () {
    // Add your logic to process quiz answers here
    alert('Quiz submitted!');
});
