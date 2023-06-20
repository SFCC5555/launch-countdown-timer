import { useSelector } from 'react-redux';
import data from '../data.json';

const Title = () => {

  const language = useSelector(state=>state.language);
    
  return (
    <h1 className="text-white text-2xl">{data.language[language].title}</h1>
  )
}

export {Title};