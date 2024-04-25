import { Route, Routes } from 'react-router-dom';
import HariPortFolio from './pages/portfolio/Index';
import './App.scss';

function App() {
  return (
    <div className="app-root-component">
        <Routes>
          <Route path='/' Component={HariPortFolio}/>
        </Routes>
    </div>
  );
}

export default App;
