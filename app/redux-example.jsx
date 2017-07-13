var redux = require('redux');
var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log('Starting redux example');

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New state', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  }else {
    document.getElementById('app').innerHTML = '<a href="'+state.map.url+'" target="_blank">Your Location</a>'
  }
});

// unsubscribe();
var currentState = store.getState();
console.log('currentState',currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Nagpure'));

store.dispatch(actions.addHobby('Running'))
store.dispatch(actions.addHobby('Eating'))

store.dispatch(actions.removeHobby(2))

store.dispatch(actions.changeName('Pratik'));

store.dispatch(actions.addMovie('Avenger','Action'));
store.dispatch(actions.addMovie('DON','Action'));

store.dispatch(actions.removeMovie(2));
