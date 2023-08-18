function theme() {
    themes = ['theme-defaut', 'theme-vert', 'theme-rose']
    currentTheme = document.body.className
    document.body.className = themes[(themes.indexOf(currentTheme) + 1) % themes.length]
}