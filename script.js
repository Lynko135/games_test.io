"use strict"

const links = [
   './playables/blocktava/Ref_1_horizontal.html',
   './playables/blocktava/Ref_1_vertical.html',
];
const root = document.getElementById('root');

const createLinks = (arr, root) => {
    arr.forEach(link => {
        const div = document.createElement('a');
        // div.classList.add('playable')
        div.textContent = link.slice(2);
        // div.addEventListener('click', () => {
        //     window.open(link, '_blank')
        // })

        div.setAttribute('href', link)

        root.append(div);
    });
}

createLinks(links, root);