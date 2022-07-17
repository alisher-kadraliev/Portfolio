// Custom scripts
const burger = document.querySelector('.burger')
const container = document.querySelector('.container')
const screens = document.querySelectorAll('.screen')

burger.addEventListener('click', () => {
    container.classList.toggle('active')
})


function replaceBg(id) {
    const bg = document.getElementById(id)
    screens.forEach(screen => {
        screen.style.display = 'none'
    })
    bg.style.display = 'block'
}

function changeBg() {
    const links = document.querySelectorAll('.link')

    links.forEach((link, index) => {
        link.addEventListener('mouseenter', e => {
            e.preventDefault()
            replaceBg(e.target.dataset.link)
        })

        link.addEventListener('click', e => {
            e.preventDefault()
            container.classList.toggle('active')
        })
    })

    screens.forEach(screen => {
        screen.style.display = 'none'
        screens[0].style.display = 'block'
    })
}
changeBg()
//anime
const handleMousePos = (e) => {
    const CURSOR = document.querySelector('#mouse-cursor');
    const HOVER = document.querySelectorAll('.cursor-hover');
    const { pageX: posX, pageY: posY } = e;

    const runMouseOver = () => {
        CURSOR.style.transform = 'scale(3)';
        CURSOR.style.background = '#010101';
    };
    HOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));

    const runMouseLeave = () => {
        CURSOR.style.transform = '';
        CURSOR.style.background = '';
    };
    HOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));

    return (
        CURSOR.style.left = `${posX - 1320}px`,
        CURSOR.style.top = `${posY - 10}px`
    );
};
document.addEventListener('mousemove', handleMousePos);