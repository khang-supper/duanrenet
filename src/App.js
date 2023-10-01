import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./component";
import Register from "./pages/register/Register";
import Login from './pages/login/Login';
function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={ <Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;