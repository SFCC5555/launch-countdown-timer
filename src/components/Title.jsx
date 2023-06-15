import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import data from '../data.json';

const Title = () => {

  const {language} = useContext(AppContext);
    
  return (
    <h1 className="text-white text-2xl">{data.language[language.status].title}</h1>
  )
}

export {Title};