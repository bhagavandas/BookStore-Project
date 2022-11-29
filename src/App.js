
import './App.css';

 import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { LoginForm } from './Pages/LoginForm';
import SignUpForm from './Pages/SignUpForm';
import BookPage from './Pages/BookPage';




function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/LoginForm" element={<LoginForm/>}>
        </Route>
        <Route exact path="/SignUpForm" element={<SignUpForm/>}>
        </Route>
        <Route exact path="/BookPage" element={<BookPage/>}>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
