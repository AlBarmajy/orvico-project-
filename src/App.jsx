import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import { useRoutes } from 'react-router-dom'
import Routes from './Routes.jsx'
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  const element= useRoutes(Routes);
  return element;
  }

  export default App