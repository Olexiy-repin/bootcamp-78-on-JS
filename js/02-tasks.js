/*
TODO: Нормалізація рядка
TODO:
TODO: Напишіть код, який запитуватиме:
TODO: 'Яка «офіційна» назва JavaScript?'
TODO: Якщо користувач вводить ECMAScript,
TODO: то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
*/

// const correctAnswer = 'ecmascript';
// const userAnswer = prompt('Яка «офіційна» назва JavaScript?');

// if (userAnswer.toLowerCase() === correctAnswer) {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

/*
TODO: Форматування посилання (endsWith)
TODO:
TODO: Напиши скрипт який перевіряє чи закінчується значення змінної link символом /.
TODO: Якщо ні, додай до кінця значення link цей символ.
TODO: Використовуй конструкцію if...else.
*/

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link += '/';
// }

// console.log(link);

/*
TODO: Форматування посилання (includes та логічне «І»)
TODO: Напиши скрипт який перевіряє чи закінчується значення
TODO: змінної link символом /. Якщо ні, додай до кінця
TODO: значення link цей символ, але тільки в тому випадку,
TODO: якщо в link є підрядок "my-site".
TODO: Використовуй конструкцію if...else.
*/

// let link = 'https://site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

/*
TODO: Пошук у рядку методом includes()
TODO:
TODO: Напиши функцію isStrIncludesForbiddenWords(string, blacklistedWord1, blacklistedWord2),
TODO: яка буде перевіряти чи є у рядку заборонені слова.
TODO: Параметри функції:
TODO: string - рядок;
TODO: blacklistedWord1 - перше заборонене слово;
TODO: blacklistedWord2 - друге заборонене слово.
TODO: Функція має повернути true або false.
*/

// function isStrIncludesForbiddenWords(str, blacklistedWord1, blacklistedWord2) {
//   str = str.toLowerCase();

//   return str.includes(blacklistedWord1) || str.includes(blacklistedWord2);
// }

// const string1 = "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = '#fatlivesmatter advertising campaign';

// console.log(isStrIncludesForbiddenWords(string1, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string2, 'spam', 'sale'));
// console.log(isStrIncludesForbiddenWords(string3, 'spam', 'sale'));
