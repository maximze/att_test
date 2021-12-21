import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from '../store/applicationStore';
import AppContainer from "../components/appContainer"




class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));