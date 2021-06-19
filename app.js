const dragon = document.getElementById('dragon')
const behind = document.getElementById('behind')
const front = document.getElementById('front')
const mid = document.getElementById('mid')
const btn = document.getElementById('btn')
const header = document.getElementById('header')

window.addEventListener('scroll', () => {
    let value = window.scrollY

    dragon.style.top = value * 0.2 + 'px'
    front.style.top = value * 0.5 + 'px'
    mid.style.top = value * 0.6 + 'px'
    behind.style.top = value * 0.4 + 'px'
    btn.style.marginTop = value * 0.7 + 'px'
})

