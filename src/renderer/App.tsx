import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// const { ipcRenderer } = window.require('electron');
import Tabs from './tabs';

// let root = document.getElementById('root')!;

const Hello = () => {
  // const closee = () => {
  //   ipcRenderer.send('close-window');
  // };

  return (
    <body>
      {/* <div onClick={closee}>
        asdadsfsfsdfsdfsdfdfsdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfsfsdffd
      </div> */}
      <div>
        <div className="container">
          <Tabs />
          {/* <div className="Hello">test</div> */}
        </div>
      </div>
    </body>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
