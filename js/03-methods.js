/*
 * Методи масиву
 *
 * - join
 * - split (Метод рядка)
 * - slice
 * - concat
 * - indexOf
 * - push/pop, shift()/unshift()
 */

//~ Використання метода join()
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const coursesStr = courses.join(', ');

// console.log('courses:', courses);
// console.log('coursesStr:', coursesStr);

//~ Використання метода split()
// const phoneNumbers = '+380961111111,+380961111111,+380961111111,+380961111111';
// const phoneNumbersArr = phoneNumbers.split(',');

// console.log('phoneNumbers:', phoneNumbers);
// console.log('phoneNumbersArr:', phoneNumbersArr);

//~ Використання метода slice()
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const coursesCopy = courses.slice();

// console.log('courses:', courses);
// console.log('coursesCopy:', coursesCopy);

// coursesCopy[0] = 'HTML Fundamentals';

// console.log('courses:', courses);
// console.log('coursesCopy:', coursesCopy);

//~ Використання метода concat()
// const oldCourses = ['HTML', 'CSS'];
// const newCourses = ['JavaScript', 'React', 'NodeJS'];
// const allCourses = oldCourses.concat(newCourses, ['SASS']);

// console.log('oldCourses:', oldCourses);
// console.log('newCourses:', newCourses);
// console.log('allCourses:', allCourses);

//~ Використання метода indexOf()
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const indexOfReact = courses.indexOf('asasada');

// console.log('courses:', courses);
// console.log('indexOfReact:', indexOfReact);

//~ Використання методів push()/pop() та unshift()/shift()
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log('courses:', courses);

// courses.unshift('SASS', 'Redux');

// console.log('courses:', courses);

// courses.shift();
// courses.shift();

// console.log('courses:', courses);
