import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './components/Header/Header';
import './App.css'
function App() {

  return (
    <div>
    
       <Routes>
          <Route index element={<Home />}/>
       </Routes>
    </div>
  )
}

export default App
