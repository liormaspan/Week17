import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Shop from "./components/Shop"
import { Routes,Route,Link } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'> About</Link>
          <Link to='/shop'> Shop</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about'element={<About/>} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:id/:name' element={<Product/>}/>
        <Route path='*' element={<h2>404 Not Found</h2>}/>
      </Routes>
    </div>
  );
}

export default App;
