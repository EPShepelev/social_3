import { Header } from "./components/Header/Header";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Profile } from "./components/Profile/Profile"
import { Users } from "./components/Users/Users"
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { Auth } from "./components/Auth/Auth";
import { NotFound } from "./components/NotFound/NotFound";
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
              <Route path="/users" element={<RequireAuth><Users /></RequireAuth>} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
