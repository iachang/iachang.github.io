const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class Typewrite {
  constructor(element, finalText) {
    this.element = element;
    this.finalText = finalText;
    this.type();
  }

  async blink() {
    while (true) {
      this.element.innerHTML = `<span class="wrap">${this.finalText}</span>`;
      await sleep(600);
      this.element.innerHTML = this.finalText;
      await sleep(600);
    }
  }

  async type() {
    let currentText = "";
    for (const char of this.finalText) {
      currentText += char;
      this.element.innerHTML = `<span class="wrap">${currentText}</span>`;
      await sleep(250);
    }
    await this.blink();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementsByClassName("typewrite");
  if (element.length) {
    new Typewrite(element[0], element[0].textContent);
  }
});
