function addStyles(styles) {
    const head = document.querySelector('head');
    for (const style of styles) {
        const styleTag = document.createElement('link');
        styleTag.rel = "stylesheet";
        styleTag.href = style;
        head.appendChild(styleTag);
    }
}

function grabLinks() {
    const links = document.querySelectorAll('a');
    navigation.classList.add('navigation');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.add('link');
        links[i].classList.add('hover:text-black');
        navigation.appendChild(links[i]);
    }
}
function grabText() {
    const texts = document.querySelectorAll('p');
    for (let i = 0; i < texts.length; i++) {
        text.appendChild(texts[i]);
    }
}
const header = document.querySelector('h1');
const body = document.querySelector('body');
const navigation = document.createElement('div');
const container = document.createElement('div');
const text = document.createElement('article');
function createSite() {
    text.classList.add('prose');
    const customStyles = [
        'https://unpkg.com/tailwindcss@^1.5/dist/base.min.css',
        'https://unpkg.com/tailwindcss@^1.5/dist/components.min.css',
        'https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css',
        'https://unpkg.com/tailwindcss@^1.5/dist/utilities.min.css'
    ];
    addStyles(customStyles);
    grabLinks();
    grabText();
    container.classList.add('container');
    container.appendChild(navigation);
    body.innerHTML = '';
    header.classList.add('heading')
    body.appendChild(header);
    container.appendChild(text);
    body.appendChild(container);
}
createSite();