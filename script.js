"use strict"

const links = [
   './playables/blocktava/Ref_1_horizontal.html',
   './playables/blocktava/Ref_1_vertical.html',
   './playables/blocktava/Ref_B_7clicks.html',
   './playables/blocktava/Ref_2_30_seconds.html'
];
const root = document.getElementById('root');

const createLinks = (arr, root) => {
    arr.forEach(link => {
        const div = document.createElement('a');
        div.textContent = link.slice(2);
        div.setAttribute('href', link)
        root.append(div);
    });
}

createLinks(links, root);