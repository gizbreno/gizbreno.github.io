const buttonTheme = document.getElementById('switch')
const main = document.getElementById('main')
const avatar = document.getElementById('avatar')
const button = document.getElementById('switchbutton')
const linkone = document.getElementById('linkone')
const linktwo = document.getElementById('linktwo')
const linktree = document.getElementById('linktree')
const linkfour = document.getElementById('linkfour')
const social = document.getElementById('social')

buttonTheme.addEventListener('click', () => {
    if (main.classList.contains('dark')) {
        main.classList.remove('dark')
        main.classList.add('light')
        buttonTheme.style.border = '1px solid black'
        button.style.left = '30px'
        avatar.classList.remove('avatarDark')
        avatar.classList.add('avatarLight')
        button.classList.remove('buttonDak')
        button.classList.add('buttonLight')
        linkone.classList.remove('linkDark')
        linkone.classList.add('linkLight')
        linktwo.classList.remove('linkDark')
        linktwo.classList.add('linkLight')
        linktree.classList.remove('linkDark')
        linktree.classList.add('linkLight')
        linkfour.classList.remove('linkDark')
        linkfour.classList.add('linkLight')
        social.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
    } else {
        main.classList.remove('light')
        main.classList.add('dark')
        buttonTheme.style.border = '1px solid white'
        button.style.left = '-15px'
        avatar.classList.remove('avatarLight')
        avatar.classList.add('avatarDark')
        button.classList.remove('buttonLight')
        button.classList.add('buttonDak')
        linkfour.classList.remove('linkLight')
        linktree.classList.remove('linkLight')
        linktwo.classList.remove('linkLight')
        linkone.classList.remove('linkLight')
        linkone.classList.add('linkDark')
        linktwo.classList.add('linkDark')
        linktree.classList.add('linkDark')
        linkfour.classList.add('linkDark')
        social.style.backgroundColor = 'transparent'
    }
})