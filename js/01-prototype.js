/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const productProperties = {
//   category: 'laptop',

//   changeRating(newRating) {
//     if (newRating >= 0 && newRating <= 5) {
//       this.rating = newRating;
//     }
//   },
// };

// const productA = Object.create(productProperties);

// productA.title = 'Dell';
// productA.price = 10000;
// productA.rating = 4;

// productA.changeRating(3);

// const productB = Object.create(productProperties);

// productB.title = 'ASUS';
// productB.price = 12000;
// productB.rating = 4;

// productB.changeRating(3.5);

// console.log('productA =', productA);
// console.log('productB =', productB);

/*
 * Перебір власних властивостей з hasOwnProperty()
 */
// const objC = {
//   objCProperty: 'c',
// };

// const objB = Object.create(objC);

// objB.objBProperty = 'b';

// const objA = Object.create(objB);

// objA.objAProperty = 'a';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
