window.addEventListener('scroll', e => {
    document.body.style.cssText= `--scrollTop: ${this.scrollY}px`
})
// con lo de arriba media los px cuando hacia scroll