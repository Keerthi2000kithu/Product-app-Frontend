import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' exact element={<Add/>}/>
      <Route path='search' exact element={<Search/>}/>
      <Route path='viewall' exact element={<Viewall/>}/>
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
