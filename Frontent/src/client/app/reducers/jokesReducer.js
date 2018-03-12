export default function jokesReducer (state={
    jokes: [],
    ratings: [],
  }, action) {
  switch (action.type) {
    case "SHOW_JOKES": {
      return {
        ...state,
        jokes: action.payload.text,
      }
    }
    case "ADD_JOKE": {
      return {
        ...state,
        jokes: [...state.jokes, action.payload],
      }
    }
    case "DELETE_JOKE": {
      return {
        ...state,
        jokes: state.jokes.filter(joke => joke.text != action.payload.text.substring(3).replace(/&quot;/g, '"')),
      }
    }
    case "RATE_JOKE": {
      return {
        ...state,
        ratings: [...state.ratings, action.payload.value],
      }
    }
    case "RATE_JOKE_FAILED": {
      return {
        ...state,
        ratings: action.payload.value
      }
    }
  }

  return state;
}