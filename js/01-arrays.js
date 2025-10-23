/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

const courses = ['HTML', 'CSS', 'JS'];

console.log(courses);

courses[0] = 'HTML Fundamentals';

console.log(courses);

const firstCourse = courses[0];

console.log('firstCourse:', firstCourse);

const lastCourse = courses[courses.length - 1];

console.log('lastCourse:', lastCourse);
