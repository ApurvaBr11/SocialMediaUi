import logo from './logo.svg';
import './App.css';
import InterPage from './components/InterPage';
import LoginPage from './components/LoginPage';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
