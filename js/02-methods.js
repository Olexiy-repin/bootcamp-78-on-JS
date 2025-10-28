/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
TODO: Реалізуйте методи для обʼєкта playlist
TODO: - getName();
TODO: - changeName(title);
TODO: - updateRating(newRating);
*/

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  getName() {
    return this.name;
  },

  changeName(newName) {
    if (typeof newName === 'string' && newName.length !== 0) {
      this.name = newName;
    }
  },

  updateRating(newRating) {
    if (typeof newRating === 'number' && newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },
};

console.log(playlist);

console.log(playlist.getName());

playlist.changeName('My new playlist');
playlist.updateRating(4);

console.log(playlist);
