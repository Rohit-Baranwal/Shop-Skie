import './App.css';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;