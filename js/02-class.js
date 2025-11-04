/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//* Функція конструктор
// const User = function (firstName, lastName, age, tel, email) {
//   // let this = {};
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.tel = tel;
//   this.email = email;
//   // return this;
// };

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.dir(User);

// const userA = new User('Marcus', 'Wilkins', 30, '(566) 256-6498', 'joc@ilu.tg');

// console.log('userA =', userA);
// console.log(userA.getFullName());

// const userB = new User('Abbie', 'Thompson', 32, '(667) 344-3794', 'ijajo@owites.il');

// console.log('userB =', userB);
// console.log(userB.getFullName());

//* Клас
class User {
  #tel;
  #email;
  static userCounter = 0;

  constructor(firstName, lastName, age, tel, email) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#tel = tel;
    this.#email = email;
    // return this;

    User.userCounter++;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }

  getTel() {
    return this.#tel;
  }

  setTel(newTel) {
    if (this.#isTelValid(newTel)) {
      this.#tel = newTel;
    }
  }

  #isTelValid(tel) {
    return typeof tel === 'string';
  }

  #isEmailValid(email) {
    return email.includes('@');
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (this.#isEmailValid(newEmail)) {
      this.#email = newEmail;
    }
  }
}

const userA = new User('Marcus', 'Wilkins', 30, '(566) 256-6498', 'joc@ilu.tg');

console.log('userA =', userA);
console.log(userA.getFullName());
console.log(userA.isAdult());
console.log(userA.getTel());
userA.setTel('(728) 203-3312');
console.log(userA.getTel());
console.log(userA.email);
userA.email = 'lo@edinak.pt';
console.log(userA.email);

const userB = new User('Abbie', 'Thompson', 17, '(667) 344-3794', 'ijajo@owites.il');

console.log('userB =', userB);
console.log(userB.getFullName());
console.log(userB.isAdult());
console.log(userB.getTel());
userB.setTel('(771) 668-3588');
console.log(userB.getTel());
console.log(userB.email);
userB.email = 'kolitge@idne.yt';
console.log(userB.email);

console.dir(User);
