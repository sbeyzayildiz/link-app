import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddLink from './pages/AddLink';
import LinkList from './pages/LinkList';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Route path="/" exact>
            <LinkList />
          </Route>
          <Route path="/add">
            <AddLink />
          </Route>
        </Router>
    </div>
  );
}

export default App;
