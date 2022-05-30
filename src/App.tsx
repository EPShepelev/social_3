import { Header } from "./components/Header/Header";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Profile } from "./components/Profile/Profile"
import { Users } from "./components/Users/Users"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={ <Profile/> } />
            <Route path="/users" element={ <Users/> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
