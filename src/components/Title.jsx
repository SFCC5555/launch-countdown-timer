import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import data from '../data.json';

const Title = () => {

  const {language} = useContext(AppContext);
    
  return (
    <div>{data.language[language.status].title}</div>
  )
}

export {Title};