
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/create" element = {<Create/>}></Route>
          <Route path = "/recipe/:id" element = {<Recipe/>}></Route>
          <Route path = "/search" element = {<Search/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
