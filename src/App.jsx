import './App.css';
import { AppContextProvider } from './context/AppContext';
import { Title } from './components/Title';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer';

function App() {

  return (
    <AppContextProvider>
      <Title />
      <Countdown />
      <Footer />
    </AppContextProvider>
  )
}

export default App
