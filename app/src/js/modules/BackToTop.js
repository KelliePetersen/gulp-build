class BackToTop {
  constructor() {
    this.backToTopButton = document.getElementsByClassName('btn__back-to-top');
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollFunction.bind(this));
  }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.backToTopButton[0].classList.remove('btn--hidden');
    } else {
      this.backToTopButton[0].classList.add('btn--hidden');
    }
  }
}

export default BackToTop;