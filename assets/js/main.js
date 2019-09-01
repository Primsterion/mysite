const header = document.querySelector('header');
const speed = 30;

window.addEventListener('mousemove', (e) => {
    if(this.screen.width > 991){
        header.style.backgroundPositionX = -e.clientX / speed + 'px';
        header.style.backgroundPositionY = -e.clientY / speed + 'px';
    }
});