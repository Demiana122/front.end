document.addEventListener('DOMContentLoaded', function() {
    const linkBoxes = document.querySelectorAll('.link-box');

    linkBoxes.forEach(function(box) {
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = 'lightgray';
        });

        box.addEventListener('mouseout', function() {
            box.style.backgroundColor = '#f0f0f0';
        });
    });
});