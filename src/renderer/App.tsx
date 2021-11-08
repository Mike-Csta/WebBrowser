import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Tabs from './tabs';

// let root = document.getElementById('root')!;

const Hello = () => {
  // const WebView = document.createElement('webview');
  // WebView.setAttribute('src', 'http://www.google.com/');
  // WebView.setAttribute('autosize', 'on');
  // WebView.setAttribute('class', 'page');
  // document.body.appendChild(WebView);

  return (
    <div className="container">
      <Tabs />
      {/* <div className="Hello">test</div> */}
    </div>
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
