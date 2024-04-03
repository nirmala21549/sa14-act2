const box = document.getElementById('box');
const moveButton = document.getElementById('move-button');
let isMoved = false;

moveButton.addEventListener('click', function() {
    if (!isMoved) {
        // Move the box to the right
        box.style.transform = 'translate(200px, -50%)';
        isMoved = true;
    } else {
        // Move the box back to its original position
        box.style.transform = 'translate(-50%, -50%)';
        isMoved = false;
    }
});
