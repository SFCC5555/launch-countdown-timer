import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import data from '../data.json';

const Countdown = () => {

  const language = useSelector(state=>state.language);
  const theme = useSelector(state=>state.theme);


  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const storedCountdown = localStorage.getItem('countdown');
    if (storedCountdown) {
      const parsedCountdown = JSON.parse(storedCountdown);
      const savedTimestamp = new Date(parsedCountdown.timestamp);
      const currentTimestamp = new Date();
      const timeDifference = Math.abs(currentTimestamp - savedTimestamp);

      // Calcular el tiempo transcurrido en segundos
      const totalSeconds = parsedCountdown.remainingSeconds - Math.floor(timeDifference / 1000);

      if (totalSeconds <= 0) {
        // Reiniciar el contador si ya ha pasado el tiempo establecido
        resetCountdown();
      } else {
        // Calcular los días, horas, minutos y segundos restantes
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        setCountdown({ days, hours, minutes, seconds });
      }
    } else {
      // Configurar el contador inicial de n días si no hay valor en el localStorage
      resetCountdown();
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        const totalSeconds =
          prevCountdown.days * 24 * 60 * 60 +
          prevCountdown.hours * 60 * 60 +
          prevCountdown.minutes * 60 +
          prevCountdown.seconds -
          1;

        if (totalSeconds <= 0) {
          resetCountdown();
        } else {
          const days = Math.floor(totalSeconds / (24 * 60 * 60));
          const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
          const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
          const seconds = Math.floor(totalSeconds % 60);

          updateLocalStorage({ days, hours, minutes, seconds });
          return { days, hours, minutes, seconds };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const resetCountdown = () => {
    const initialCountdown = { days: 5, hours: 5, minutes: 5, seconds: 5 };
    updateLocalStorage(initialCountdown);
    setCountdown(initialCountdown);
  };

  const updateLocalStorage = (countdownData) => {
    const timestamp = new Date().toISOString();
    const dataToStore = { timestamp, remainingSeconds: calculateRemainingSeconds(countdownData) };
    localStorage.setItem('countdown', JSON.stringify(dataToStore));
  };

  const calculateRemainingSeconds = (countdownData) => {
    return (
      countdownData.days * 24 * 60 * 60 +
      countdownData.hours * 60 * 60 +
      countdownData.minutes * 60 +
      countdownData.seconds
    );
  };

  const timeList=['days','hours','minutes','seconds'];


  return (
    <div className="flex items-center gap-2">
      {timeList.map(t=> <div key={t} className="flex flex-col items-center gap-5" >
        <section className="w-16 h-16 sm:w-32 sm:h-32 relative cursor-crosshair">
          <div className="w-full h-1/2 rounded-md opacity-75" style={{backgroundColor:'var(--text)'}}/>
          <div className="w-full h-1/2 rounded-md opacity-75 shadowBottom" style={{backgroundColor:'var(--text)'}}/>
          <div className="w-full h-1/2 bg-black/25 absolute top-0 z-20 rounded-md"/>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-6xl`} style={{color:`var(--text${theme})`}} >{countdown[t]}</div>
        </section>

        <p className="text-xs" style={{color:'var(--text)'}} >{data.language[language][t]}</p>
      </div>)}
    </div>
  );
};

export {Countdown};