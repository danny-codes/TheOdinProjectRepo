document.querySelector('.toggle').addEventListener('click', 
function(e) {
    if (document.fullscreenElement) {
        // if there is a fullscreen element, exit full screen
        document.exitFullscreen();
        return;
    }
    // make the .element div fullscreen
    document.querySelector('.element').requestFullscreen();
})

const showDialogBtn = document.getElementById('showDialogBtn');
const favDialog = document.getElementById('favDialog');

showDialogBtn.addEventListener('click', () => favDialog.showModal());
