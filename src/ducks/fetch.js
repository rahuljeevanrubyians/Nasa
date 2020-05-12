let BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/';
let API_KEY = '1gNhyhc6UBKYck0DX3fP6sNbqHv9dcm1CLHKVEZH';

const FETCH_SUCCESS = 'ducks/fetch/FETCH_SUCCESS';
const FETCH_FAILED = 'ducks/fetch/FETCH_FAILED';

const initialState = {
  data: null,
  error: false,
};

//api.nasa.gov/neo/rest/v1/neo/{{ENTER_ASTEROID_ID_HERE}}?api_key={{YOUR_API_KEY}}

export const fetchData = id => {
  return dispatch => {
    console.log('inside');
    return fetch(BASE_URL + id + '?api_key=' + API_KEY)
      .then(val => val.json())
      .then(data => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: data,
        });
        console.log('data', data);
      })
      .catch(err => {
        dispatch({
          type: FETCH_FAILED,
          payload: err,
        });
        console.log('err', err);
      });
  };
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    }
    case FETCH_FAILED: {
      return {
        ...state,
        data: null,
        error: true,
      };
    }
    default:
      return {...state};
  }
};

export default Reducer;
