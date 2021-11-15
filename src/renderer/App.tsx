import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Tabs from './Tabs/Tabs';

const Hello = () => {
  return (
    <body>
      <div>
        <div className="container">
          <Tabs />
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
