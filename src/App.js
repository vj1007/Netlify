import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ResponsiveAppBar from './Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path='/' element={<ResponsiveAppBar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
