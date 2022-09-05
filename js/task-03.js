const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const makeGalleryEl = ({ url, alt }) => {
  const listEl = document.createElement('li');
  listEl.classList.add('gallery__list');
  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery__img');
  // imgEl.src = `${url}`;
  // imgEl.alt = `${alt}`;
  // imgEl.width = '600';
  // imgEl.height = '400';
  galleryEl.insertAdjacentHTML("afterbegin", `<li class="gallery__list"><img class="gallery__img" src = "${url}" alt = "${alt}" width = "600"height = "400"/></li >`);

  listEl.append(imgEl);
  return listEl;
}

const element = images.map(makeGalleryEl);














