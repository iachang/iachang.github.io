const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class Typewrite {
    constructor(element, finalText) {
        this.element = element;
        this.finalText = finalText;
        this.type();
    }

    async type() {
        let currentText = '';
        for (const char of this.finalText) {
            currentText += char;
            this.element.innerHTML = `<span class="wrap">${currentText}</span>`;
            await sleep(250);
        }
        this.element.innerHTML = this.finalText;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementsByClassName('typewrite');
    if (element.length) { 
        new Typewrite(element[0], element[0].textContent); 
    }
}); 