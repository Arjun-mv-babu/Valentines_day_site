import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Second from './components/Second';
import Third from './components/Third';
import Yes from './components/Yes';
import Love from './components/Love';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/second' element={<Second/>}/>
        <Route path='/third' element={<Third/>}/>
        <Route path='/yes' element={<Yes/>}/>
        <Route path='/love' element={<Love/>}/>
      </Routes>
    </>
  );
}

export default App;
