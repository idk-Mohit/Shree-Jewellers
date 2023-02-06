const navbarHelper = () => {
    let el = document.querySelector('.main-header').style
    if (el) {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 700) {
                el.backdropFilter = "blur(4px)"
            }
            else {
                el.backdropFilter = "blur(1px)"
            }
        })
    }
}

export default navbarHelper