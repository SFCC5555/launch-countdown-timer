import './App.css';
import { AppContextProvider } from './context/AppContext';
import { Title } from './components/Title';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { Button } from './components/Button';

function App() {

  return (
    <AppContextProvider>
      <section className='absolute top-12  w-full px-5 sm:px-20 flex justify-between'>
        <Button concept='language' list={['english','spanish','german','french','italian']} />
        <Button concept='theme' list={['Magenta','Violet','Cyan','Teal','Orange']} />
      </section>
      <Title />
      <Countdown />
      <Footer />
      <Background />
    </AppContextProvider>
  )
}

export default App
