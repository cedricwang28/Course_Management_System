import React from 'react';
import {Provider} from 'react-redux'
import store from './Store'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          hello
        </div>
      </Provider>
    </Router>
  );
}

export default App;
