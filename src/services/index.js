import fire from '../fire';

const getImageList = (page = 0) => (
  fire
    .database()
    .ref('Images')
    .orderByChild('date')
    .startAt(page)
    .limitToLast(20)
    .once('value')
    .then((images) => images.val())
);

export default getImageList;
