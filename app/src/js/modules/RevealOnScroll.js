class RevealOnScroll {
  constructor() {
    this.options = {
      delay: 100,
      duration: 1000,
      distance: '100px',
      easing: 'ease-in-out'
    };
    this.sr = ScrollReveal(this.options);
  }
}

export default RevealOnScroll;