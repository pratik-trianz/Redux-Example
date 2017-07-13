var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  searchText : '',
  showCompleted : false,
  todos: []
}

var reducer = (state = stateDefault, action)=>{
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText : action.text
      };
    default :
      return state;
    }

};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('search text ', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
})

var currentStateTodo = store.getState();

store.dispatch({
  type : 'CHANGE_SEARCH_TEXT',
  text: 'clean'
});
store.dispatch({
  type : 'CHANGE_SEARCH_TEXT',
  text: 'the'
});
store.dispatch({
  type : 'CHANGE_SEARCH_TEXT',
  text: 'yard'
});
