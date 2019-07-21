import fire from '../fire';

export const getImageList = () => (
  fire
    .database()
    .ref('Images')
    .orderByChild('date')
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
