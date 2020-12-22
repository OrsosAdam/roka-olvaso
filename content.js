const links = document.querySelectorAll('a');
const header = document.querySelector('h1');
const texts = document.querySelectorAll('p');
const body = document.querySelector('body');
body.innerHTML = '';
header.classList.add('heading')
body.appendChild(header);
const container = document.createElement('div');
container.classList.add('container');
const navigation = document.createElement('div');
navigation.classList.add('navigation');
container.appendChild(navigation);
const text = document.createElement('div');
text.classList.add('text');
for(let i = 0; i < links.length;i++){
    links[i].classList.add('link')
    navigation.appendChild(links[i]);
}
for(let i = 0; i < texts.length;i++){
    texts[i].classList.add('paragraph')
    text.appendChild(texts[i]);
}
container.appendChild(text);
body.appendChild(container);
