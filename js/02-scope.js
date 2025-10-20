/*
 * Блокова область видимості змінних
 */

const firstName = 'Laura';
const lastName = 'Park';

function showMessage(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;

  console.log(`Hello ${fullName}`);
}

showMessage('Oleksii', 'Repin');

function showPrettyMessage(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;

  console.log(`Welcome ${fullName}!`);
}

showPrettyMessage('Oleksii', 'Repin');
