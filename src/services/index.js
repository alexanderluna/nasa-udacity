import fire from '../fire';

export const getImageList = (page = 0) => (
  fire
    .database()
    .ref('Images')
    .orderByChild('date')
    .startAt(page)
    .limitToLast(20)
    .once('value')
    .then((images) => images.val())
);

export const getImageById = (id) => (
  fire
    .database()
    .ref('Images')
    .child(id)
    .once('value')
    .then((image) => image.val())
);
