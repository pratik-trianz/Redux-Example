var axios = require('axios');

export var changeName = (name) =>{
  return {
    type : 'CHANGE_NAME',
    name
  }
}

export var addHobby = (hobby) =>{
  return {
      type: 'ADD_HOBBY',
      hobby
    }
}

export var removeHobby = (id) => {
  return {
    type: 'RMV_HOBBY',
    id
  }
}

export var addMovie = (title, genre) =>{
  return{
    type: 'ADD_MOVIE',
    title,
    genre
  }
}

export var removeMovie = (id) =>{
  return {
    type: 'RMV_MOVIE',
    id
  }
}


export var startLocationFetch = () =>{
  return {
    type: 'COMPLETE_LOCATION_FETCH'
    }
}

export var completeLocationSearch = (url) =>{
  return {
    type : 'COMPLETE_LOCATION_FETCH',
    url
  }
}

export var fetchLocation = () => {

    return (dispatch, getState) =>{
      dispatch(startLocationFetch());

      axios.get('http://ipinfo.io').then(function (res) {
        var loc = res.data.loc;
        var baseUrl = 'http://maps.google.com?q='

        dispatch(completeLocationSearch(baseUrl+loc));
      })
    }
}
