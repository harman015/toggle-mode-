import {Routes,Route} from 'react-router-dom';
import Table from "./Components/Table";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
function App(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
     <Routes>
        <Route path="/" element={<Table/>}/>
      </Routes>
      </ThemeContext.Provider>
  </div>
)
}

export default App;
