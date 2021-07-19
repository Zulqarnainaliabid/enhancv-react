import Home from './Components/HomePage'
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
function App() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 5000,
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
   const types = {
    ERROR: 'error'
  }
  return (
    <>
   <AlertProvider template={AlertTemplate} {...types} {...options}>
   <Home/>
  </AlertProvider>
   </>
  );
}

export default App;
