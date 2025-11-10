/*
 * Створи картки з товарами на основі масиву products
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт.
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

//* Product card template
/*
<li class="product-card">
  <img src="" alt="" class="product-card-img" />
  <div class="product-card-text-content">
    <h2 class="product-card-title"></h2>
    <p class="product-card-price">Price: uah.</p>
  </div>
</li>
*/

//* Modal card template
/*
<img class="product-modal-img" src="" alt="" />
<div class="product-modal-text-content">
  <h2 class="product-modal-title"></h2>
  <p class="product-modal-price">Price: uah.</p>
  <p class="product-modal-desc"></p>
</div>
*/

const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://placehold.co/260x300',
    name: 'Laptop',
    price: 20000,
    description: 'Lightweight and powerful laptop with a 15-inch display and SSD.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 4,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const refs = {
  productsList: document.querySelector('.js-products'),
};

const createProductCardTemplate = product => {
  return `
  <li class="product-card js-product-card" data-id="${product.id}">
    <img src="${product.img}" alt="${product.name}" class="product-card-img" />
    <div class="product-card-text-content">
      <h2 class="product-card-title">${product.name}</h2>
      <p class="product-card-price">Price: ${product.price}uah.</p>
    </div>
  </li>
  `;
};

const productsCardsTemplate = products.map(product => createProductCardTemplate(product)).join('');

refs.productsList.innerHTML = productsCardsTemplate;

const onProductListClick = event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const productId = Number(event.target.closest('.js-product-card').dataset.id);

  const currentProduct = products.find(product => product.id === productId);

  const basicLightboxInstance = basicLightbox.create(`
    <img class="product-modal-img" src="${currentProduct.img}" alt="${currentProduct.name}" />
    <div class="product-modal-text-content">
      <h2 class="product-modal-title">${currentProduct.name}</h2>
      <p class="product-modal-price">Price: ${currentProduct.price}uah.</p>
      <p class="product-modal-desc">${currentProduct.description}</p>
    </div>
    `);

  basicLightboxInstance.show();
};

refs.productsList.addEventListener('click', onProductListClick);
