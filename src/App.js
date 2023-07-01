import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Home from './component/Home';
import { BrowserRouter, Router, Routes,Route} from 'react-router-dom';
import Create from './component/Create';
import Update from './component/Update';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
