import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css'
import Footer from './components/Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
       <Router>
          <App />
   
       </Router>
)
