/*
TODO: Створи об'єкт counter з методом increment(), який збільшує властивість count на 1,
TODO: і методом getCount(), який повертає поточне значення count.
*/

// const counter = {
//   count: 0,

//   increment() {
//     this.count++;
//   },

//   getCount() {
//     return this.count;
//   },
// };

// console.log(counter);

// console.log(counter.getCount());

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getCount());

/*
TODO: Напиши функцію filterObject(obj, allowedKeys), 
TODO: яка повертає новий об'єкт, що містить тільки властивості з allowedKeys.
*/

const user = {
  firstName: 'Willie',
  lastName: 'Watkins',
  age: 30,
  gender: 'male',
  email: 'test@gmail.com',
};

const filterObject = function (obj, allowedKeys) {
  const newObj = {};

  for (const key of allowedKeys) {
    newObj[key] = obj[key];
  }

  return newObj;
};

console.log(filterObject(user, ['firstName', 'lastName']));
console.log(filterObject(user, ['firstName', 'lastName', 'email']));
