/* const btn = document.querySelector('#load');
const gallery = document.querySelector('#gallery');

btn.addEventListener('click', () => {

  fetch('https://api.thecatapi.com/v1/images/search?limit=5')
    .then(response => response.json())
    .then(cats => {
      console.log('nombre de chats',cats.length, 'chats', cats)
      // oui il y a un bug a corriger, pas sympa..
    });

});

*/

const btn = document.querySelector('#load');
const gallery = document.querySelector('#gallery');

btn.addEventListener('click', () => {

    fetch('https://api.thecatapi.com/v1/images/search?limit=5')
        .then(response => response.json())
        .then(cats => {
            console.log('nombre de chats', cats.length, 'chats', cats);

            gallery.innerHTML = '';

            let i = 0;
            while (i < cats.length) {
                const img = document.createElement('img');
                img.src = cats[i].url;
                img.alt = 'Photo d un chat';
                gallery.appendChild(img);
                i++;
            }
        });

});
