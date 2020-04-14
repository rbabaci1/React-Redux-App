export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const url = 'https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae';

export const fetchAllPictures = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
