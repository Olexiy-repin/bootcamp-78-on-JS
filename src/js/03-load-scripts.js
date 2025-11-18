// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

/*
 * Завантаження скриптів
 */

//~ Рішення через колбеки
// const loadScript = (scriptUrl, onSuccess, onError) => {
//   const script = document.createElement('script');

//   script.src = scriptUrl;

//   script.addEventListener('load', event => {
//     onSuccess(scriptUrl);
//   });

//   script.addEventListener('error', event => {
//     onError(scriptUrl);
//   });

//   document.head.append(script);
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   url => {
//     console.log(`${url} завантажився успішно!`);

//     loadScript(
//       'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
//       url => {
//         console.log(`${url} завантажився успішно!`);

//         loadScript(
//           'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
//           url => {
//             console.log(`${url} завантажився успішно!`);
//           },
//           url => {
//             console.log(`${url} не завантажився!`);
//           }
//         );
//       },
//       url => {
//         console.log(`${url} не завантажився!`);
//       }
//     );
//   },
//   url => {
//     console.log(`${url} не завантажився!`);
//   }
// );

//~ Рішення через проміси
const loadScript = scriptUrl => {
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = scriptUrl;

    script.addEventListener('load', event => {
      resolve(scriptUrl);
    });

    script.addEventListener('error', event => {
      reject(scriptUrl);
    });

    document.head.append(script);
  });

  return promise;
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(url => {
    console.log(`${url} завантажився успішно!`);

    return loadScript(
      'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js'
    );
  })
  .then(url => {
    console.log(`${url} завантажився успішно!`);

    return loadScript(
      'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
    );
  })
  .then(url => {
    console.log(`${url} завантажився успішно!`);
  })
  .catch(url => {
    console.log(`${url} не завантажився!`);
  });
