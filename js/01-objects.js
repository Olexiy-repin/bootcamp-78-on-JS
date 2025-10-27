/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const courseHTMLTitle = 'HTML Fundamentals';
// const courseHTMLDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eius.';
// const courseHTMLRating = 8;

// const courseHTMLArr = ['HTML Fundamentals', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eius.', 8];

// console.log(courseHTMLArr);

const courseHTML = {
  title: 'HTML Fundamentals',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eius.',
  price: 10000,
  rating: 8,
  teachers: ['Micheal Bailey', 'Richard Arnold', 'Eleanor Hunter'],
  images: {
    fullImg: 'https://my-site.com/big-html-img.png',
    mediumImg: 'https://my-site.com/medium-html-img.png',
    smallImg: 'https://my-site.come/small-html-img.png',
  },
};

console.log('courseHTML:', courseHTML);

console.log(courseHTML.title);
console.log(courseHTML.price);
console.log(courseHTML.teachers[0]);
console.log(courseHTML.images.smallImg);

// const key = 'rating';

// console.log(courseHTML['description']);
// console.log(courseHTML[key]);

// console.log(courseHTML.test);

// courseHTML.rating = 9;
// courseHTML.test = 100;

// console.log(courseHTML);
