import React, { Component } from 'react';
import { render } from 'react-dom';
import Search from './components/Search';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
