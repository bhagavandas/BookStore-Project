
import './App.css';

 import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { LoginForm } from './Pages/LoginForm';
import SignUpForm from './Pages/SignUpForm';



function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/LoginForm" element={<LoginForm/>}>
        </Route>
        <Route exact path="/SignUpForm" element={<SignUpForm/>}>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
