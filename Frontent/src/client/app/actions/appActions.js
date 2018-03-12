import axios from 'axios';

export function showJokes(text) {
  console.log('Showing jokes');
  return {
    type: "SHOW_JOKES",
    payload: [
      text,
    ]
  };
}

export function addJoke(text) {
  console.log('Adding Joke...');
  return {
    type: "ADD_JOKE",
    payload: {
      text,
    }
  }
}

export function deleteJoke(text) {
  console.log('Deleteing joke...');
  return {
    type: "DELETE_JOKE",
    payload: {
      text,
    },
  };
}

export function rateJoke(url) {
  console.log('Rating joke...');
  return function(dispatch) {
    axios({
      method: 'get',
      url: url
      //data: JSON.stringify(text)
    })
  //axios.get(url)
    .then((response) => {
      dispatch({type: "RATE_JOKE", payload: response.data});
      console.log(response.data);
    })
    .catch((error) => {
      dispatch({type: "RATE_JOKE_FAILED", payload: error});
    });
  };
}