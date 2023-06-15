import './App.css';
import { AppContextProvider } from './context/AppContext';
import { Title } from './components/Title';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer';
import { Background } from './components/Background';

function App() {

  return (
    <AppContextProvider>
      <Title />
      <Countdown />
      <Footer />
      <Background />
    </AppContextProvider>
  )
}

export default App
